"use client";

import { useMemo, useRef } from "react";
import { ModuleRegistry } from "ag-charts-community";
import {
  AllCommunityModule,
  CartesianChartModule,
  TimeAxisModule,
  LegendModule,
} from "ag-charts-community";
import { RangeBarSeriesModule } from "ag-charts-enterprise";
import { AgCharts } from "ag-charts-react";

// Register all required modules (must happen before any chart renders)
ModuleRegistry.registerModules([
  AllCommunityModule,
  CartesianChartModule,
  TimeAxisModule,
  LegendModule,
  RangeBarSeriesModule,
]);

/** Raw SFC license records — one row per (company, activity, period). */
const sfoRecords = [
  {
    lcRole: "RE",
    prinCeName: "CITIC Securities Asset Management (HK) Limited",
    prinCeNameChin: "中信證券資產管理(香港)有限公司",
    regulatedActivity: {
      actType: 1,
      actDesc: "Dealing in Securities",
      cactDesc: "證券交易",
      status: "A",
    },
    effectivePeriodList: [
      { effectiveDate: "2025-03-27", endDate: null, isAmloLcCatDeem: false },
    ],
  },
  {
    lcRole: "RE",
    prinCeName: "CITIC Securities International Global Markets Limited",
    prinCeNameChin: "中信證券國際全球市場有限公司",
    regulatedActivity: {
      actType: 1,
      actDesc: "Dealing in Securities",
      cactDesc: "證券交易",
      status: "A",
    },
    effectivePeriodList: [
      { effectiveDate: "2025-03-27", endDate: null, isAmloLcCatDeem: false },
    ],
  },
  {
    lcRole: "RE",
    prinCeName: "CLSA Limited",
    prinCeNameChin: "中信里昂證券有限公司",
    regulatedActivity: {
      actType: 1,
      actDesc: "Dealing in Securities",
      cactDesc: "證券交易",
      status: "A",
    },
    effectivePeriodList: [
      { effectiveDate: "2025-03-27", endDate: null, isAmloLcCatDeem: false },
    ],
  },
  {
    lcRole: "RE",
    prinCeName: "CITIC Securities Asset Management (HK) Limited",
    prinCeNameChin: "中信證券資產管理(香港)有限公司",
    regulatedActivity: {
      actType: 2,
      actDesc: "Dealing in Futures Contracts",
      cactDesc: "期貨合約交易",
      status: "A",
    },
    effectivePeriodList: [
      { effectiveDate: "2025-10-09", endDate: null, isAmloLcCatDeem: false },
    ],
  },
  {
    lcRole: "RE",
    prinCeName: "CITIC Securities International Global Markets Limited",
    prinCeNameChin: "中信證券國際全球市場有限公司",
    regulatedActivity: {
      actType: 2,
      actDesc: "Dealing in Futures Contracts",
      cactDesc: "期貨合約交易",
      status: "A",
    },
    effectivePeriodList: [
      { effectiveDate: "2025-03-27", endDate: null, isAmloLcCatDeem: false },
    ],
  },
  {
    lcRole: "RE",
    prinCeName: "CITIC Securities Asset Management (HK) Limited",
    prinCeNameChin: "中信證券資產管理(香港)有限公司",
    regulatedActivity: {
      actType: 4,
      actDesc: "Advising on Securities",
      cactDesc: "就證券提供意見",
      status: "A",
    },
    effectivePeriodList: [
      { effectiveDate: "2024-08-28", endDate: null, isAmloLcCatDeem: false },
    ],
  },
  {
    lcRole: "RE",
    prinCeName: "CITIC Securities Asset Management (HK) Limited",
    prinCeNameChin: "中信證券資產管理(香港)有限公司",
    regulatedActivity: {
      actType: 9,
      actDesc: "Asset Management",
      cactDesc: "提供資產管理",
      status: "R",
    },
    effectivePeriodList: [
      { effectiveDate: "2024-08-28", endDate: "2025-03-31", isAmloLcCatDeem: false },
    ],
  },
  {
    lcRole: "RE",
    prinCeName: "Poseidon Capital Limited",
    prinCeNameChin: null,
    regulatedActivity: {
      actType: 9,
      actDesc: "Asset Management",
      cactDesc: "提供資產管理",
      status: "R",
    },
    effectivePeriodList: [
      { effectiveDate: "2022-12-06", endDate: "2024-06-14", isAmloLcCatDeem: false },
    ],
  },
];

/** Transform SFC records into chart-friendly data points. */
function buildChartData() {
  const now = new Date().getTime();
  return sfoRecords
    .filter((r) => r.effectivePeriodList.length > 0)
    .map((r) => {
      const period = r.effectivePeriodList[0];
      const start = new Date(period.effectiveDate).getTime();
      const end = period.endDate ? new Date(period.endDate).getTime() : now;
      return {
        company: r.prinCeName,
        activity: `${r.regulatedActivity.actDesc} (${r.regulatedActivity.status === "A" ? "Active" : "Inactive"})`,
        start,
        end,
      };
    });
}

export function LicenceTimelineChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const data = useMemo(() => buildChartData(), []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chartOptions: any = useMemo(
    () => ({
      title: {
        text: "SFC Licence Timeline",
        fontSize: 18,
      },
      subtitle: {
        text: "Regulated Activities by Company",
      },
      data,
      series: [
        {
          type: "range-bar",
          direction: "horizontal",
          xKey: "company",
          xName: "Company",
          yLowKey: "start",
          yHighKey: "end",
          yName: "Duration",
          cornerRadius: 4,
          label: {
            enabled: true,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter: ({ datum }: any) => datum.activity,
            fontSize: 10,
            color: "#ffffff",
            placement: "inside",
          },
          tooltip: {
            enabled: true,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            renderer: ({ datum }: any) => {
              const startStr = new Date(datum.start).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              });
              const endStr = new Date(datum.end).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              });
              return {
                title: datum.company,
                content: `${datum.activity}\n${startStr} — ${endStr}`,
              };
            },
          },
        },
      ],
      axes: {
        left: {
          type: "category",
          position: "left",
          title: {
            text: "Company",
          },
          label: {
            fontSize: 11,
            maxLength: 30,
          },
        },
        bottom: {
          type: "time",
          position: "bottom",
          title: {
            text: "Date",
          },
          gridLine: {
            enabled: true,
          },
          nice: false,
          min: new Date(2022, 6, 1).getTime(),
          max: new Date(2026, 6, 1).getTime(),
        },
      },
      legend: {
        enabled: false,
      },
      padding: {
        top: 20,
        right: 40,
        bottom: 20,
        left: 40,
      },
    }),
    [data],
  );

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div
        ref={chartRef}
        className="w-full"
        style={{ height: "600px" }}
      >
        <AgCharts options={chartOptions} style={{ height: "100%" }} />
      </div>
    </div>
  );
}