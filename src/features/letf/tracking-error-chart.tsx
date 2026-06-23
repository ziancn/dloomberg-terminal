"use client";

import { useMemo } from "react";
import { AgCharts } from "ag-charts-react";
import type { AgCartesianChartOptions } from "ag-charts-community";
import type { ChartSeriesData } from "./types";
import { LETFChartDefaultOptions, transformSeriesData } from "./ag-chart-theme";

interface TrackingErrorChartProps {
  dates: string[];
  seriesData: ChartSeriesData[];
  title: string;
}

/**
 * Combined Tracking Error chart:
 * - Bar chart showing daily tracking error (series[0])
 *   - Green bars for positive values, red bars for negative values
 * - Line chart showing cumulative tracking error (series[1])
 */
export default function TrackingErrorChart({
  dates,
  seriesData,
  title,
}: TrackingErrorChartProps) {
  const options: AgCartesianChartOptions = useMemo(() => {
    const dailySeries = seriesData[0];
    const cumulativeSeries = seriesData[1];
    if (!dailySeries && !cumulativeSeries) {
      return { ...LETFChartDefaultOptions, data: [], series: [] };
    }

    const activeSeries: ChartSeriesData[] = [];
    if (dailySeries) activeSeries.push(dailySeries);
    if (cumulativeSeries) activeSeries.push(cumulativeSeries);

    const { data, minDate, maxDate } = transformSeriesData(dates, activeSeries);

    const seriesDefs: AgCartesianChartOptions["series"] = [];

    if (dailySeries) {
      seriesDefs.push({
        type: "bar",
        xKey: "date",
        yKey: "s0",
        yName: dailySeries.name,
        widthRatio: 0.8,
        itemStyler: ({ datum }: { datum: { s0: number } }) => {
          if (datum.s0 >= 0) {
            return {
              fill: "rgba(0, 200, 0, 0.8)",
              stroke: "rgba(0, 200, 0, 1)",
            };
          }
          return {
            fill: "rgba(255, 0, 0, 0.8)",
            stroke: "rgba(255, 0, 0, 1)",
          };
        },
      });
    }

    if (cumulativeSeries) {
      // yKey depends on whether dailySeries is present
      const yKey = dailySeries ? "s1" : "s0";
      seriesDefs.push({
        type: "area",
        xKey: "date",
        yKey,
        yName: cumulativeSeries.name,
        fill: "#FFC42E",
        fillOpacity: 0.1,
        stroke: "#FFC42E",
        strokeWidth: 1,
        marker: { enabled: false },
      });
    }

    return {
      ...LETFChartDefaultOptions,
      data,
      axes: {
        ...LETFChartDefaultOptions.axes,
        x: {
          ...LETFChartDefaultOptions.axes?.x,
          min: minDate ?? undefined,
          max: maxDate ?? undefined,
        },
      } as AgCartesianChartOptions["axes"],
      series: seriesDefs,
    } satisfies AgCartesianChartOptions;
  }, [dates, seriesData, title]);

  return <AgCharts options={options} className="size-full" />;
}