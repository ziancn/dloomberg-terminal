import {
  AgChartTheme,
  AllCommunityModule,
  ModuleRegistry,
  type AgCartesianChartOptions,
} from "ag-charts-community";

import {
  AgChartOptions,
  AnimationModule,
  AreaSeriesModule,
  BarSeriesModule,
  ContextMenuModule,
  CrosshairModule,
  LegendModule,
  LineSeriesModule,
  NavigatorModule,
  NumberAxisModule,
  SyncModule,
  TimeAxisModule,
  UnitTimeAxisModule,
  ZoomModule,
} from "ag-charts-enterprise";

import type { ChartSeriesData } from "./types";

ModuleRegistry.registerModules([
  AllCommunityModule,
  AnimationModule,
  AreaSeriesModule,
  BarSeriesModule,
  CrosshairModule,
  LegendModule,
  LineSeriesModule,
  NavigatorModule,
  NumberAxisModule,
  SyncModule,
  TimeAxisModule,
  UnitTimeAxisModule,
  ZoomModule,
  ContextMenuModule,
]);

/** Sync group id for cross-chart axis synchronization */
export const SYNC_GROUP_ID = "letf-charts";

/** Parse "YYYY-MM-DD" as local Date (no UTC offset) */
function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y!, m! - 1, d!);
}

export interface TransformedChartData {
  data: Record<string, Date | number | null>[];
  /** First date in the data array, for clamping x-axis min */
  minDate: Date | null;
  /** Last date in the data array, for clamping x-axis max */
  maxDate: Date | null;
}

/** Transform API series data into AG Charts data format (array of objects keyed by date + s0..sN) */
export function transformSeriesData(
  dates: string[],
  series: ChartSeriesData[],
): TransformedChartData {
  if (dates.length === 0) {
    return { data: [], minDate: null, maxDate: null };
  }

  const minDate = parseLocalDate(dates[0]!);
  const maxDate = parseLocalDate(dates[dates.length - 1]!);

  const data = dates.map((dateStr, i) => {
    const localDate = parseLocalDate(dateStr);
    const row: Record<string, Date | number | null> = { date: localDate };
    series.forEach((s, j) => {
      row[`s${j}`] = s.data[i];
    });
    return row;
  });

  return { data, minDate, maxDate };
}

/* -------------------------------------------------------------------------- */
/*  Shared chart theming — tweak this object as you like                      */
/* -------------------------------------------------------------------------- */

const terminalChartTheme: AgChartTheme = {
  baseTheme: "ag-financial-dark",

  // palette: {
  //   fills: ["#00ff1e", "#ff00dd", "#00fff7", "#8f00ff", "#ff0000"],
  //   strokes: ["#000"],
  // },

  overrides: {
    line: {
      series: {
        strokeWidth: 1,
      },
    },
  },

  params: {
    backgroundColor: "#101010",
    textColor: "oklch(0.985 0 0)",
    tooltipBackgroundColor: "oklch(0.205 0 0)",
  }

};



export const LETFChartDefaultOptions: AgCartesianChartOptions = {
  theme: terminalChartTheme,

  padding: {
    top: 12,
    bottom: 12,
    left: 8,
    right: 8,
  },

  sync: {
    enabled: true,
    groupId: SYNC_GROUP_ID,
    axes: "x",
    nodeInteraction: true,
  },

  zoom: {
    enabled: true,
    enablePanning: true,
    enableSelecting: false,
  },

  tooltip: {
    enabled: true,
    mode: "compact",
    
  },

  legend: {
  position: {
    placement: "top-left",
    floating: true,
    xOffset: 8,
    yOffset: 8,
  },
  border: {
    enabled: true,
  },
  fill: "oklch(0.205 0 0)",
  maxHeight: 100,
  maxWidth: 500,
  },

  axes: {
     x: {
      type: "time",
      nice: false,
      crosshair: {
        label: {
          enabled: false,
        },
      },
      line: {
        enabled: false,
      },
      label: {
        enabled: false,
        autoRotate: false,
        format: "%d/%m/%Y",
      },
    },
    y: {
      type: "number",
      position: "right",
      nice: false,
      line: {
        enabled: true,
      },
      label: {
        enabled: true,
        autoRotate: false,
        fontSize: 11,
        spacing: 5,
        truncate: true,
        wrapping: "never",
      },
      tick: {
        enabled: true,
        size: 6,
        width: 1,
      },
      thickness: 40,
    },
  },
};