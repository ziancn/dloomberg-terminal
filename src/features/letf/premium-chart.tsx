"use client";

import { useMemo } from "react";
import { AgCharts } from "ag-charts-react";
import type { AgCartesianChartOptions } from "ag-charts-community";
import type { ChartSeriesData } from "./types";
import { LETFChartDefaultOptions, transformSeriesData } from "./ag-chart-theme";

interface PremiumChartProps {
  dates: string[];
  seriesData: ChartSeriesData | undefined;
  title: string;
}

/**
 * Fund Premium chart:
 * - Area chart showing % premium/discount of fund price vs NAV
 */
export default function PremiumChart({
  dates,
  seriesData,
  title,
}: PremiumChartProps) {
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
          type: "area",
          xKey: "date",
          yKey: "s0",
          yName: title,
          fill: "#60a5fa",
          fillOpacity: 0.2,
          stroke: "#60a5fa",
          strokeWidth: 1,
        },
      ],
    } satisfies AgCartesianChartOptions;
  }, [dates, seriesData, title]);

  return <AgCharts options={options} className="size-full" />;
}