"use client";

import { useMemo } from "react";
import { AgCharts } from "ag-charts-react";
import type { AgCartesianChartOptions } from "ag-charts-community";
import type { ChartSeriesData } from "./types";
import { LETFChartDefaultOptions, transformSeriesData } from "./ag-chart-theme";

interface DecayChartProps {
  dates: string[];
  seriesData: ChartSeriesData[];
  title: string;
}

/**
 * Volatility Decay chart:
 * - Line: Theoretical Nx Decay (blue dashed)
 * - Area: LETF Decay NAV (light blue)
 * - Only chart that shows the x-axis (line + labels)
 */
export default function DecayChart({
  dates,
  seriesData,
  title,
}: DecayChartProps) {
  const options: AgCartesianChartOptions = useMemo(() => {
    if (!seriesData || seriesData.length === 0) {
      return { ...LETFChartDefaultOptions, data: [], series: [] };
    }

    const { data, minDate, maxDate } = transformSeriesData(dates, seriesData);

    return {
      ...LETFChartDefaultOptions,
      data,
      axes: {
        ...LETFChartDefaultOptions.axes,
           x: {
           ...LETFChartDefaultOptions.axes?.x,
           min: minDate ?? undefined,
           max: maxDate ?? undefined,
           crosshair: {
             label: {
               enabled: true,
             },
           },
           line: {
            enabled: true,
          },
          label: {
            enabled: true,
            autoRotate: false,
            spacing: 4,
          },
          tick: {
            enabled: true,
            size: 6,
            width: 1,
          },
        },
      } as AgCartesianChartOptions["axes"],
      series: [
        {
          type: "line",
          xKey: "date",
          yKey: "s0",
          yName: seriesData[0]?.name,
          stroke: "#3b82f6",
          lineDash: [6, 3],
          marker: { enabled: false },
        },
        {
          type: "area",
          xKey: "date",
          yKey: "s1",
          yName: seriesData[1]?.name,
          fill: "#60a5fa",
          fillOpacity: 0.2,
          stroke: "#60a5fa",
          strokeWidth: 1,
          marker: { enabled: false },
        },
      ],
    } satisfies AgCartesianChartOptions;
  }, [dates, seriesData, title]);

  return <AgCharts options={options} className="size-full" />;
}