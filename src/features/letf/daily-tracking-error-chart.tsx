"use client";

import { useMemo } from "react";
import { AgCharts } from "ag-charts-react";
import type { AgCartesianChartOptions } from "ag-charts-community";
import type { ChartSeriesData } from "./types";
import { LETFChartDefaultOptions, transformSeriesData } from "./ag-chart-theme";

interface DailyTrackingErrorChartProps {
  dates: string[];
  seriesData: ChartSeriesData[];
  title: string;
}

/**
 * Daily Tracking Error chart:
 * - Bar chart showing daily tracking error (series[0])
 * - Green bars for positive values, red bars for negative values (via itemStyler)
 */
export default function DailyTrackingErrorChart({
  dates,
  seriesData,
  title,
}: DailyTrackingErrorChartProps) {
  const options: AgCartesianChartOptions = useMemo(() => {
    const dailySeries = seriesData[0];
    if (!dailySeries) {
      return { ...LETFChartDefaultOptions, data: [], series: [] };
    }

    const { data, minDate, maxDate } = transformSeriesData(dates, [dailySeries]);

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
          yName: dailySeries.name,
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
        },
      ],
    } satisfies AgCartesianChartOptions;
  }, [dates, seriesData, title]);

  return (
    <div className="min-h-0 flex-1">
      <AgCharts options={options} style={{ height: "100%", width: "100%" }} />
    </div>
  );
}