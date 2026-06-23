"use client";

import { useMemo } from "react";
import { AgCharts } from "ag-charts-react";
import type { AgCartesianChartOptions } from "ag-charts-community";
import type { ChartSeriesData } from "./types";
import { LETFChartDefaultOptions, transformSeriesData } from "./ag-chart-theme";

interface FlowChartProps {
  dates: string[];
  seriesData: ChartSeriesData | undefined;
  title: string;
}

/**
 * Fund Flow chart:
 * - Bar chart showing fund flow data
 * - Green bars for positive values, red bars for negative values
 */
export default function FlowChart({
  dates,
  seriesData,
  title,
}: FlowChartProps) {
  const options: AgCartesianChartOptions = useMemo(() => {
    if (!seriesData) {
      return { ...LETFChartDefaultOptions, data: [], series: [] };
    }

    const { data, minDate, maxDate } = transformSeriesData(dates, [seriesData]);

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
      series: [
        {
          type: "bar",
          xKey: "date",
          yKey: "s0",
          yName: title,
          // strokeWidth: 1,
          // stroke: "#101010",
          widthRatio: 0.8,
          itemStyler: ({ datum }: { datum: { s0: number } }) => {
            if (datum.s0 >= 0) {
              return {
                fill: "rgba(0, 200, 0, 0.8)",
              };
            }
            return {
              fill: "rgba(255, 0, 0, 0.8)",
            };
          },
        },
      ],
    } satisfies AgCartesianChartOptions;
  }, [dates, seriesData, title]);

  return <AgCharts options={options} className="size-full" />;
}