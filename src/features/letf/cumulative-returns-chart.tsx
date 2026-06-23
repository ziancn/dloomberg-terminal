"use client";

import { useMemo } from "react";
import { AgCharts } from "ag-charts-react";
import type { AgCartesianChartOptions } from "ag-charts-community";
import type { ChartSeriesData } from "./types";
import { LETFChartDefaultOptions, transformSeriesData } from "./ag-chart-theme";

interface CumulativeReturnsChartProps {
  dates: string[];
  seriesData: ChartSeriesData[];
  title: string;
}

export default function CumulativeReturnsChart({
  dates,
  seriesData,
  title,
}: CumulativeReturnsChartProps) {
  const options: AgCartesianChartOptions = useMemo(() => {
    const { data, minDate, maxDate } = transformSeriesData(dates, seriesData);

    // Color mapping by index: 0=Underlying, 1=LETF NAV, 2=Theoretical Nx Compounded, 3=Underlying xN Simple
    const colorDefs = [
      { stroke: "#d1d5db" },                                          // light gray solid - Underlying
      { stroke: "#ff8c00" },                                          // orange solid - LETF NAV
      { stroke: "#a855f7", lineDash: [6, 3] },                       // purple dashed - Theoretical Nx Compounded
      { stroke: "#6b7280", lineDash: [6, 3] },                       // gray dashed - Underlying xN Simple
    ];

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
      series: seriesData.map((s, i) => ({
        type: "line" as const,
        xKey: "date",
        yKey: `s${i}`,
        yName: s.name,
        stroke: colorDefs[i]?.stroke,
        lineDash: colorDefs[i]?.lineDash,
        marker: { enabled: false },
      })),
    } satisfies AgCartesianChartOptions;

  }, [dates, seriesData, title]);

  return <AgCharts options={options} className="size-full" />;
}