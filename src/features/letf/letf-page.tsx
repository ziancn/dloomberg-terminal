"use client";

import { useState } from "react";
import { useLetfData } from "@/hooks/use-letf-data";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CumulativeReturnsChart from "./cumulative-returns-chart";
import DecayChart from "./decay-chart";
import TrackingErrorChart from "./tracking-error-chart";
import PremiumChart from "./premium-chart";
import FlowChart from "./flow-chart";
import {
  type LetfSearchParams,
  DEFAULT_PARAMS,
  CURRENCIES,
} from "./letf-search-params";
import type { ChartSeriesData } from "./types";

const EMPTY_DATES: string[] = [];
const EMPTY_SERIES: ChartSeriesData[] = [];

export default function LetfPage() {
  const { data, loading, search } = useLetfData();

  const [form, setForm] = useState<LetfSearchParams>({ ...DEFAULT_PARAMS });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.letfTicker.trim()) return;
    if (!form.underlyingTicker.trim()) return;
    if (!form.leverage || form.leverage <= 0) return;
    search(form);
  };

  const updateField = <K extends keyof LetfSearchParams>(
    key: K,
    value: LetfSearchParams[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="size-full flex flex-col overflow-y-auto px-4">

      <div className="w-full min-h-150 flex-1 flex flex-col gap-4 py-4">

        {/* Search form */}
        <form onSubmit={handleSubmit} className="shrink-0">
          <div className="flex flex-wrap items-end gap-3">
            {/* LETF Ticker */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="letf-ticker">LETF</Label>
              <Input
                id="letf-ticker"
                className="w-32"
                size="sm"
                value={form.letfTicker}
                onChange={(e) => updateField("letfTicker", e.target.value)}
              />
            </div>

            {/* Underlying Ticker */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="underlying-ticker">Underlying</Label>
              <Input
                id="underlying-ticker"
                className="w-32"
                size="sm"
                value={form.underlyingTicker}
                onChange={(e) => updateField("underlyingTicker", e.target.value)}
              />
            </div>

            {/* Leverage */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="leverage">Leverage</Label>
              <Input
                id="leverage"
                type="number"
                className="w-16 scheme-dark"
                size="sm"
                step="any"
                placeholder=""
                value={form.leverage || ""}
                onChange={(e) =>
                  updateField("leverage", Number(e.target.value))
                }
              />
            </div>

            {/* Start Date */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="start-date">Start Date</Label>
              <Input
                id="start-date"
                type="date"
                className="w-30 scheme-dark"
                size="sm"
                value={form.startDate}
                onChange={(e) => updateField("startDate", e.target.value)}
              />
            </div>

            {/* End Date */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="end-date">End Date</Label>
              <Input
                id="end-date"
                type="date"
                className="w-30 scheme-dark"
                size="sm"
                value={form.endDate}
                onChange={(e) => updateField("endDate", e.target.value)}
              />
            </div>

            {/* Currency */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="currency">Currency</Label>
              <Select
                value={form.currency}
                onValueChange={(v) => {
                  if (v) updateField("currency", v);
                }}
              >
                <SelectTrigger id="currency" size="sm">
                  <SelectValue>
                    {CURRENCIES.find((c) => c.value === form.currency)?.label ??
                      form.currency}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {CURRENCIES.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" disabled={loading} size="sm">
              Load
            </Button>
          </div>
        </form>

        {/* Main content: charts + right card */}
        <div className="min-h-0 flex-1 flex flex-col lg:flex-row gap-4">
          
          {/* Right card — order-1 on small screens (appears first/top), order-2 on lg (appears right) */}
          <aside className="shrink-0 order-1 lg:order-2 min-h-0 lg:max-w-150 lg:w-auto">
            <Card className="lg:h-full">
              <CardHeader>
                <CardTitle className="text-sm">ETF Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {data?.fund_profile ? (
                  (() => {
                    const fp = data.fund_profile;

                    // Format helpers
                    const formatVal = (raw: string | undefined) => raw || "N/A";
                    const formatLeverage = (v: string | undefined) => {
                      if (!v) return "-";
                      const n = parseFloat(v);
                      return isNaN(n) ? v : `${(n / 100).toFixed(1)}×`;
                    };
                    const formatPercent = (v: string | undefined) => {
                      if (!v) return "-";
                      return `${v}%`;
                    };
                    const formatBool = (v: string | undefined) => {
                      if (!v) return "-";
                      const lower = v.toLowerCase();
                      return (lower === "true" || lower === "y") ? "Yes" : "No";
                    };

                    // Section definitions — keys match API fund_profile property names
                    const sections = [
                      {
                        title: "Appropriations",
                        items: [
                          { label: "Leverage", key: "Leverage", fmt: formatLeverage },
                          { label: "Actively Managed", key: "Actively Managed", fmt: formatBool },
                          { label: "Swap Based", key: "Swap Based", fmt: formatBool },
                          { label: "Derivatives Based", key: "Derivatives Based", fmt: formatBool },
                          { label: "Currency Hedged", key: "Currency Hedged", fmt: formatBool },
                          { label: "Replication Strategy", key: "Replication Strategy", fmt: formatVal },
                          { label: "Securities Lending", key: "Securities Lending", fmt: formatBool },
                        ],
                      },
                      {
                        title: "Characteristics",
                        items: [
                          { label: "Index Weight", key: "Index Weight", fmt: formatVal },
                          { label: "1M Px Track. Error", key: "1M Px Track. Error", fmt: formatPercent },
                          { label: "1M NAV Track. Error", key: "1M NAV Track. Error", fmt: formatPercent },
                          { label: "Inception Date", key: "Inception Date", fmt: formatVal },
                          { label: "Expense Ratio", key: "Expense Ratio", fmt: formatPercent },
                        ],
                      },
                    ];

                    return sections.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-1.5">
                          {section.title}
                        </h4>
                        <dl className="space-y-0.5">
                          {section.items.map(({ label, key, fmt }) => (
                            <div key={key} className="flex justify-between gap-20">
                              <dt className="text-bloomberg-primary">{label}</dt>
                              <dd className="text-foreground">{fmt(fp[key])}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ));
                  })()
                ) : (
                  <p className="text-muted-foreground text-sm">No ETF profile data.</p>
                )}
              </CardContent>
            </Card>
          </aside>

          {/* Charts — order-2 on small screens (appears below), order-1 on lg (appears left) */}
          <div className="order-2 lg:order-1 flex-1 min-h-0 grid grid-rows-10 border divide-y-4 divide-border">
            <div className="overflow-hidden min-h-0 row-span-4">
              <CumulativeReturnsChart
                dates={data?.dates ?? EMPTY_DATES}
                seriesData={data?.charts.cumulative_returns.series ?? EMPTY_SERIES}
                title={data?.charts.cumulative_returns.title ?? "CUMULATIVE RETURNS"}
              />
            </div>
            <div className="overflow-hidden min-h-0 row-span-1">
              <PremiumChart
                dates={data?.dates ?? EMPTY_DATES}
                seriesData={data?.fund_data?.premium}
                title={data?.fund_data?.premium?.name ?? "ETF PREMIUM"}
              />
            </div>
            <div className="overflow-hidden min-h-0 row-span-1">
              <FlowChart
                dates={data?.dates ?? EMPTY_DATES}
                seriesData={data?.fund_data?.flow}
                title={data?.fund_data?.flow?.name ?? "ETF FLOW"}
              />
            </div>
            <div className="overflow-hidden min-h-0 row-span-1">
              <TrackingErrorChart
                dates={data?.dates ?? EMPTY_DATES}
                seriesData={data?.charts.tracking_error.series ?? EMPTY_SERIES}
                title={
                  data?.charts.tracking_error.series?.[0]?.name ??
                  "TRACKING ERROR"
                }
              />
            </div>
            <div className="overflow-hidden min-h-0 row-span-3">
              <DecayChart
                dates={data?.dates ?? EMPTY_DATES}
                seriesData={data?.charts.decay.series ?? EMPTY_SERIES}
                title={data?.charts.decay.title ?? "DECAY"}
              />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}