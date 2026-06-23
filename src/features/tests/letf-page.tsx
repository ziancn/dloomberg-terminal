"use client";

import { useEffect, useRef, useState } from "react";
import {
  createChart,
  LineSeries,
  BaselineSeries,
  HistogramSeries,
  ColorType,
  type IChartApi,
  type ISeriesApi,
  type Time,
  type IRange,
} from "lightweight-charts";

// ─── 类型定义 ────────────────────────────────────────────────────────────────

interface ChartSeriesData {
  name: string;
  data: number[];
}

interface LetfApiResponse {
  meta: {
    letf_ticker: string;
    underlying_ticker: string;
    leverage: number;
    start_date: string;
    end_date: string;
    data_points: number;
    letf_currency: string;
    underlying_currency: string;
    ref_currency: string;
    fx_pairs_used: string[];
  };
  dates: string[];
  charts: {
    cumulative_returns: {
      title: string;
      x_label: string;
      y_label: string;
      series: ChartSeriesData[];
    };
    decay: {
      title: string;
      x_label: string;
      y_label: string;
      series: ChartSeriesData[];
    };
    tracking_error: {
      title: string;
      x_label: string;
      y_label: string;
      series: ChartSeriesData[];
    };
  };
}

// ─── 工具函数 ────────────────────────────────────────────────────────────────

/** 将 dates + series.data 数组组装为 lightweight-charts 的数据格式 */
function toChartData(dates: string[], values: number[]) {
  return dates.map((date, i) => ({
    time: date as Time,
    value: values[i],
  }));
}

// ─── 颜色配置（对齐 shadcn/ui 暗色主题，红绿保持 Bloomberg 配色）──────────────

const COLORS = {
  bg: "#141414",
  grid: "rgba(255,255,255,0.06)",
  text: "#a3a3a3",
  border: "rgba(255,255,255,0.1)",
  crosshair: "rgba(255,255,255,0.15)",
  series: ["#2196f3", "#ff9800", "#4caf50"], // LETF / Theoretical / Simple
  decay: "#ef5350",
  decayFillTop: "rgba(239, 83, 80, 0.15)",
  decayFillBottom: "rgba(239, 83, 80, 0.05)",
  histogramUp: "#00a651",
  histogramDown: "#ff3b30",
  tooltipBg: "rgba(28, 28, 28, 0.96)",
  tooltipBorder: "rgba(255,255,255,0.1)",
};

/** 创建三个图表共用的基础配置 */
function baseChartOptions(
  container: HTMLDivElement,
  showTimeScale: boolean,
): Parameters<typeof createChart>[1] {
  return {
    width: container.clientWidth,
    height: container.clientHeight,
    layout: {
      background: { type: ColorType.Solid, color: COLORS.bg },
      textColor: COLORS.text,
      fontSize: 11,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      attributionLogo: false,
    },
    grid: {
      vertLines: { color: COLORS.grid, style: 1 },
      horzLines: { color: COLORS.grid, style: 1 },
    },
    crosshair: {
      vertLine: { color: COLORS.crosshair, width: 1, style: 2 },
      horzLine: { color: COLORS.crosshair, width: 1, style: 2 },
    },
    rightPriceScale: {
      borderColor: COLORS.border,
      scaleMargins: { top: 0.1, bottom: 0.1 },
    },
    timeScale: {
      borderColor: COLORS.border,
      visible: showTimeScale,
      timeVisible: showTimeScale,
    },
    handleScroll: { vertTouchDrag: false },
  };
}

// ─── 组件 ────────────────────────────────────────────────────────────────────

export default function LetfPage() {
  const container1Ref = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);
  const container3Ref = useRef<HTMLDivElement>(null);
  const tooltip1Ref = useRef<HTMLDivElement>(null);
  const tooltip2Ref = useRef<HTMLDivElement>(null);
  const chart1Ref = useRef<IChartApi | null>(null);
  const chart2Ref = useRef<IChartApi | null>(null);
  const chart3Ref = useRef<IChartApi | null>(null);
  const isSyncingRef = useRef(false);

  const [data, setData] = useState<LetfApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ── 数据获取 ──────────────────────────────────────────────────────────────

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8000/letf");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: LetfApiResponse = await res.json();
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (err: unknown) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : String(err));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  // ── 图表初始化 & 数据填充 ──────────────────────────────────────────────────

  useEffect(() => {
    if (!data) return;

    // 销毁旧图表（严格模式下重复挂载时清理）
    const destroyCharts = () => {
      [chart1Ref, chart2Ref, chart3Ref].forEach((ref) => {
        if (ref.current) {
          ref.current.remove();
          ref.current = null;
        }
      });
    };
    destroyCharts();

    const c1 = container1Ref.current;
    const c2 = container2Ref.current;
    const c3 = container3Ref.current;
    if (!c1 || !c2 || !c3) return;

    // ── 创建三个图表 ────────────────────────────────────────────────────────

    const chart1 = createChart(c1, {
      ...baseChartOptions(c1, false),
    });
    const chart2 = createChart(c2, {
      ...baseChartOptions(c2, false),
    });
    const chart3 = createChart(c3, {
      ...baseChartOptions(c3, true),
    });

    chart1Ref.current = chart1;
    chart2Ref.current = chart2;
    chart3Ref.current = chart3;

    // ── 添加系列 ────────────────────────────────────────────────────────────

    const { cumulative_returns, decay, tracking_error } = data.charts;
    const dates = data.dates;

    // Chart 1: Cumulative Returns（多条线）
    const cumSeries: ISeriesApi<"Line">[] = [];
    const cumNames: string[] = [];
    cumulative_returns.series.forEach((s, i) => {
      const ls = chart1.addSeries(LineSeries, {
        color: COLORS.series[i % COLORS.series.length],
        lineWidth: 2,
        priceFormat: { type: "price", precision: 4, minMove: 0.0001 },
      });
      ls.setData(toChartData(dates, s.data));
      cumSeries.push(ls);
      cumNames.push(s.name);
    });

    // ── Hover Tooltip：Cumulative Returns ────────────────────────────────────
    const tooltip1 = tooltip1Ref.current;
    if (tooltip1) {
      const container1 = container1Ref.current!;
      chart1.subscribeCrosshairMove((param) => {
        if (!param.time || param.point === undefined) {
          tooltip1.style.display = "none";
          return;
        }
        const dateStr = param.time as string;
        const lines: string[] = [`<div style="font-size:10px;color:${COLORS.text};margin-bottom:4px">${dateStr}</div>`];
        cumSeries.forEach((series, idx) => {
          const dataAt = param.seriesData.get(series) as { value: number } | undefined;
          const val = dataAt?.value;
          if (val !== undefined) {
            lines.push(
              `<div style="display:flex;align-items:center;gap:6px;font-size:11px">` +
                `<span style="width:8px;height:8px;border-radius:50%;background:${COLORS.series[idx % COLORS.series.length]};flex-shrink:0"></span>` +
                `<span style="color:#b0b8c0">${cumNames[idx]}</span>` +
                `<span style="color:#e0e0e0;margin-left:auto;font-variant-numeric:tabular-nums">${val.toFixed(4)}</span>` +
                `</div>`
            );
          }
        });
        tooltip1.innerHTML = lines.join("");
        tooltip1.style.display = "block";
        const px = param.point.x;
        const py = param.point.y;
        // 让浏览器先渲染以获得 tooltip 真实尺寸
        requestAnimationFrame(() => {
          const rect = container1.getBoundingClientRect();
          const tw = tooltip1.offsetWidth;
          const th = tooltip1.offsetHeight;
          let x = px + 16;
          let y = py - 60;
          if (x + tw > rect.width) x = px - tw - 16;
          if (y < 0) y = py + 20;
          if (y + th > rect.height) y = rect.height - th - 4;
          if (x < 0) x = 4;
          tooltip1.style.left = `${x}px`;
          tooltip1.style.top = `${y}px`;
        });
      });
    }

    // Chart 2: Decay（BaselineSeries，以 y=0 为基线填充）
    let decaySeries: ISeriesApi<"Baseline"> | null = null;
    if (decay.series.length > 0) {
      decaySeries = chart2.addSeries(BaselineSeries, {
        baseValue: { type: "price", price: 0 },
        topLineColor: COLORS.decay,
        bottomLineColor: COLORS.decay,
        lineWidth: 2,
        topFillColor1: COLORS.histogramUp,
        topFillColor2: "rgba(38, 166, 154, 0.05)",
        bottomFillColor1: COLORS.histogramDown,
        bottomFillColor2: "rgba(239, 83, 80, 0.08)",
        priceFormat: { type: "price", precision: 4, minMove: 0.0001 },
      });
      decaySeries.setData(toChartData(dates, decay.series[0].data));
    }

    // ── Hover Tooltip：Decay ─────────────────────────────────────────────────
    const ds = decaySeries;
    const tooltip2 = tooltip2Ref.current;
    if (tooltip2 && ds) {
      const container2 = container2Ref.current!;
      chart2.subscribeCrosshairMove((param) => {
        if (!param.time || param.point === undefined) {
          tooltip2.style.display = "none";
          return;
        }
        const dateStr = param.time as string;
        const dataAt = param.seriesData.get(ds) as { value: number } | undefined;
        const val = dataAt?.value;
        if (val === undefined) {
          tooltip2.style.display = "none";
          return;
        }
        const decayName = decay.series[0].name;
        tooltip2.innerHTML =
          `<div style="font-size:10px;color:${COLORS.text};margin-bottom:4px">${dateStr}</div>` +
          `<div style="display:flex;align-items:center;gap:6px;font-size:11px">` +
            `<span style="width:8px;height:8px;border-radius:50%;background:${COLORS.decay};flex-shrink:0"></span>` +
            `<span style="color:#b0b8c0">${decayName}</span>` +
            `<span style="color:#e0e0e0;margin-left:auto;font-variant-numeric:tabular-nums">${val.toFixed(4)}</span>` +
          `</div>`;
        tooltip2.style.display = "block";
        const px = param.point.x;
        const py = param.point.y;
        requestAnimationFrame(() => {
          const rect = container2.getBoundingClientRect();
          const tw = tooltip2.offsetWidth;
          const th = tooltip2.offsetHeight;
          let x = px + 16;
          let y = py - 30;
          if (x + tw > rect.width) x = px - tw - 16;
          if (y < 0) y = py + 20;
          if (y + th > rect.height) y = rect.height - th - 4;
          if (x < 0) x = 4;
          tooltip2.style.left = `${x}px`;
          tooltip2.style.top = `${y}px`;
        });
      });
    }

    // Chart 3: Tracking Error（柱状图，正负颜色区分）
    if (tracking_error.series.length > 0) {
      const teSeries = chart3.addSeries(HistogramSeries, {
        priceFormat: { type: "price", precision: 4, minMove: 0.0001 },
      });
      const rawData = tracking_error.series[0].data;
      const histData = dates.map((date, i) => ({
        time: date as Time,
        value: rawData[i],
        color: rawData[i] >= 0 ? COLORS.histogramUp : COLORS.histogramDown,
      }));
      teSeries.setData(histData);
    }

    // ── 三图联动：时间轴同步 ─────────────────────────────────────────────────

    const allCharts = [chart1, chart2, chart3];

    allCharts.forEach((chart) => {
      chart.timeScale().subscribeVisibleTimeRangeChange((range) => {
        if (isSyncingRef.current) return;
        if (!range) return;
        isSyncingRef.current = true;
        const syncRange: IRange<Time> = { from: range.from, to: range.to };
        allCharts.forEach((c) => {
          if (c !== chart) {
            c.timeScale().setVisibleRange(syncRange);
          }
        });
        isSyncingRef.current = false;
      });
    });

    // ── 响应式处理 ──────────────────────────────────────────────────────────

    const observers: ResizeObserver[] = [];
    [
      { container: c1, chart: chart1 },
      { container: c2, chart: chart2 },
      { container: c3, chart: chart3 },
    ].forEach(({ container, chart }) => {
      const observer = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        chart.applyOptions({ width, height });
      });
      observer.observe(container);
      observers.push(observer);
    });

    // ── 清理 ────────────────────────────────────────────────────────────────

    return () => {
      observers.forEach((o) => o.disconnect());
      destroyCharts();
    };
  }, [data]);

  // ── 渲染 ──────────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        background: COLORS.bg,
        minHeight: "100vh",
        padding: "20px 16px",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* 标题 */}
      {data && (
        <div style={{ marginBottom: 16 }}>
          <h1
            style={{
              color: "#e0e0e0",
              fontSize: 18,
              fontWeight: 600,
              margin: 0,
            }}
          >
            {data.meta.letf_ticker} ×{data.meta.leverage}{" "}
            <span style={{ color: COLORS.text, fontWeight: 400, fontSize: 14 }}>
              vs {data.meta.underlying_ticker}
            </span>
          </h1>
          <p style={{ color: COLORS.text, fontSize: 12, margin: "4px 0 0" }}>
            {data.meta.start_date} → {data.meta.end_date} ·{" "}
            {data.meta.data_points.toLocaleString()} data points
          </p>
        </div>
      )}

      {/* 加载 / 错误状态 */}
      {loading && (
        <div style={{ color: COLORS.text, padding: 40, textAlign: "center" }}>
          Loading chart data…
        </div>
      )}
      {error && (
        <div style={{ color: "#ef5350", padding: 40, textAlign: "center" }}>
          Failed to load: {error}
        </div>
      )}

      {/* 图表容器 */}
      {data && (
        <div
          style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          overflow: "hidden",
            border: `1px solid ${COLORS.border}`,
          }}
        >
          {/* Chart 1: Cumulative Returns */}
          <div style={{ position: "relative", borderBottom: `1px solid ${COLORS.border}` }}>
            {/* 左上角：标题 + 图例 */}
            <div
              style={{
                position: "absolute",
                top: 8,
                left: 12,
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  color: COLORS.text,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                {data.charts.cumulative_returns.title}
              </span>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                {data.charts.cumulative_returns.series.map((s, i) => (
                  <span
                    key={s.name}
                    style={{
                      color: "#b0b8c0",
                      fontSize: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span
                      style={{
                        width: 14,
                        height: 3,
                        background: COLORS.series[i % COLORS.series.length],
                        borderRadius: 1.5,
                        display: "inline-block",
                      }}
                    />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
            <div ref={container1Ref} style={{ width: "100%", height: 280 }} />
            <div
              ref={tooltip1Ref}
              style={{
                display: "none",
                position: "absolute",
                zIndex: 2,
                pointerEvents: "none",
                background: COLORS.tooltipBg,
                border: `1px solid ${COLORS.tooltipBorder}`,
                borderRadius: 4,
                padding: "6px 10px",
                whiteSpace: "nowrap",
              }}
            />
          </div>

          {/* Chart 2: Decay */}
          <div style={{ position: "relative", borderBottom: `1px solid ${COLORS.border}` }}>
            <div
              style={{
                position: "absolute",
                top: 8,
                left: 12,
                zIndex: 1,
                color: COLORS.text,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                pointerEvents: "none",
              }}
            >
              {data.charts.decay.title}
            </div>
            <div ref={container2Ref} style={{ width: "100%", height: 220 }} />
            <div
              ref={tooltip2Ref}
              style={{
                display: "none",
                position: "absolute",
                zIndex: 2,
                pointerEvents: "none",
                background: COLORS.tooltipBg,
                border: `1px solid ${COLORS.tooltipBorder}`,
                borderRadius: 4,
                padding: "6px 10px",
                whiteSpace: "nowrap",
              }}
            />
          </div>

          {/* Chart 3: Tracking Error */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 8,
                left: 12,
                zIndex: 1,
                color: COLORS.text,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                pointerEvents: "none",
              }}
            >
              {data.charts.tracking_error.title}
            </div>
            <div ref={container3Ref} style={{ width: "100%", height: 200 }} />
          </div>
        </div>
      )}
    </div>
  );
}