"use client"

import { useMemo, useState } from "react"
import { AgGridReact } from "ag-grid-react"
import {
  type ColDef,
  type GridOptions,
  ModuleRegistry,
  AllCommunityModule,
  themeQuartz,
  colorSchemeDark,
} from "ag-grid-community"
import {
  Search,
  RefreshCw,
  ChevronDown,
  Download,
  Filter,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

// ── AG Grid Registration ────────────────────────────────────

ModuleRegistry.registerModules([AllCommunityModule])

// ── Mock Data ───────────────────────────────────────────────

interface RowData {
  symbol: string
  name: string
  price: number
  change: number
  changePct: number
  volume: number
  marketCap: string
  sector: string
}

function generateMockData(): RowData[] {
  const symbols = [
    "AAPL", "MSFT", "GOOGL", "AMZN", "NVDA", "META", "TSLA", "JPM",
    "V", "WMT", "JNJ", "MA", "PG", "UNH", "HD", "BAC", "DIS", "NFLX",
    "ADBE", "CRM", "CSCO", "INTC", "VZ", "PYPL", "ORCL", "ABNB",
  ]
  const sectors = [
    "Technology", "Finance", "Healthcare", "Consumer", "Energy",
    "Industrial", "Real Estate", "Communication",
  ]

  return symbols.map((symbol) => {
    const price = +(Math.random() * 500 + 20).toFixed(2)
    const changePct = +(Math.random() * 6 - 3).toFixed(2)
    const change = +((price * changePct) / 100).toFixed(2)
    const volume = Math.floor(Math.random() * 50_000_000) + 1_000_000
    return {
      symbol,
      name: `${symbol} Inc.`,
      price,
      change,
      changePct,
      volume,
      marketCap: `$${(Math.random() * 2000 + 50).toFixed(1)}B`,
      sector: sectors[Math.floor(Math.random() * sectors.length)],
    }
  })
}

// ── Column Definitions ──────────────────────────────────────

const columnDefs: ColDef<RowData>[] = [
  {
    field: "symbol",
    headerName: "Symbol",
    pinned: "left",
    width: 100,
    cellClass: "font-mono font-semibold",
  },
  { field: "name", headerName: "Name", width: 160 },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    type: "rightAligned",
    valueFormatter: (p) => `$${p.value.toFixed(2)}`,
  },
  {
    field: "change",
    headerName: "Chg",
    width: 80,
    type: "rightAligned",
    valueFormatter: (p) => `$${p.value.toFixed(2)}`,
    cellClass: (p) =>
      p.value >= 0 ? "text-emerald-400" : "text-red-400",
  },
  {
    field: "changePct",
    headerName: "Chg%",
    width: 80,
    type: "rightAligned",
    valueFormatter: (p) => `${p.value >= 0 ? "+" : ""}${p.value.toFixed(2)}%`,
    cellClass: (p) =>
      p.value >= 0 ? "text-emerald-400" : "text-red-400",
  },
  {
    field: "volume",
    headerName: "Volume",
    width: 120,
    type: "rightAligned",
    valueFormatter: (p) => p.value.toLocaleString("en-US"),
  },
  {
    field: "marketCap",
    headerName: "Mkt Cap",
    width: 100,
    type: "rightAligned",
  },
  {
    field: "sector",
    headerName: "Sector",
    width: 140,
  },
]

const defaultColDef: ColDef = {
  resizable: true,
  sortable: true,
  filter: true,
}

// ── AG Grid Theme ───────────────────────────────────────────

const gridTheme = themeQuartz.withPart(colorSchemeDark).withParams({
  backgroundColor: "oklch(0.145 0 0)",
  borderColor: "oklch(1 0 0 / 10%)",
  headerBackgroundColor: "oklch(0.205 0 0)",
  headerTextColor: "oklch(0.708 0 0)",
  headerFontSize: "11px",
  headerFontWeight: "600",
  rowHoverColor: "oklch(0.269 0 0)",
  rowBorder: { style: "solid", width: 1, color: "oklch(1 0 0 / 6%)" },
  fontSize: "12px",
  fontFamily:
    "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
  spacing: 6,
})

// ── Params Panel ────────────────────────────────────────────

function ParamsPanel() {
  const [symbol, setSymbol] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [sector, setSector] = useState("All")
  const [sortBy, setSortBy] = useState("Symbol")

  return (
    <Card className="rounded-none h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <Filter className="size-4" />
          Filters & Controls
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 flex-1">
        <Separator />

        {/* Symbol Search */}
        <div className="flex flex-col gap-1.5">
          <Label className="text-[11px] text-muted-foreground uppercase tracking-wide">
            Symbol
          </Label>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="e.g. AAPL"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="pl-7 h-8 text-xs"
            />
          </div>
        </div>

        {/* Price Range */}
        <div className="flex flex-col gap-1.5">
          <Label className="text-[11px] text-muted-foreground uppercase tracking-wide">
            Price Range
          </Label>
          <div className="flex gap-2">
            <Input
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="h-8 text-xs"
              type="number"
            />
            <Input
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="h-8 text-xs"
              type="number"
            />
          </div>
        </div>

        {/* Sector Dropdown */}
        <div className="flex flex-col gap-1.5">
          <Label className="text-[11px] text-muted-foreground uppercase tracking-wide">
            Sector
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-xs font-normal shadow-sm hover:bg-accent hover:text-accent-foreground">
              {sector}
              <ChevronDown className="size-3.5 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              <DropdownMenuItem onClick={() => setSector("All")}>
                All Sectors
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSector("Technology")}>
                Technology
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSector("Finance")}>
                Finance
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSector("Healthcare")}>
                Healthcare
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSector("Consumer")}>
                Consumer
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSector("Energy")}>
                Energy
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex flex-col gap-1.5">
          <Label className="text-[11px] text-muted-foreground uppercase tracking-wide">
            Sort By
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-xs font-normal shadow-sm hover:bg-accent hover:text-accent-foreground">
              {sortBy}
              <ChevronDown className="size-3.5 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              <DropdownMenuItem onClick={() => setSortBy("Symbol")}>
                Symbol
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("Price")}>
                Price
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("Change %")}>
                Change %
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("Volume")}>
                Volume
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("Market Cap")}>
                Market Cap
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Separator />

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <Button size="sm" className="h-8 text-xs gap-2">
            <Search className="size-3.5" />
            Apply Filters
          </Button>
          <Button size="sm" variant="outline" className="h-8 text-xs gap-2">
            <RefreshCw className="size-3.5" />
            Reset All
          </Button>
          <Button size="sm" variant="outline" className="h-8 text-xs gap-2">
            <Download className="size-3.5" />
            Export CSV
          </Button>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Status Footer */}
        <div className="text-[10px] text-muted-foreground/50 text-center">
          Last updated: just now
        </div>
      </CardContent>
    </Card>
  )
}

// ── Data Table ──────────────────────────────────────────────

function DataTable() {
  const rowData = useMemo(() => generateMockData(), [])

  const gridOptions: GridOptions = useMemo(
    () => ({
      rowHeight: 32,
      headerHeight: 32,
      suppressCellFocus: true,
    }),
    [],
  )

  return (
    <div className="flex flex-col h-full w-full">
      {/* Table Mini Toolbar */}
      <div className="flex h-10 shrink-0 items-center justify-between border-b px-4 bg-muted/30">
        <span className="text-xs text-muted-foreground font-medium">
          26 Results
        </span>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="h-7 text-xs gap-1 text-muted-foreground">
            <RefreshCw className="size-3" />
            Refresh
          </Button>
          <Button variant="ghost" size="sm" className="h-7 text-xs gap-1 text-muted-foreground">
            <Download className="size-3" />
            Export
          </Button>
        </div>
      </div>

      {/* AG Grid */}
      <div className="flex-1 ag-theme-quartz-dark">
        <AgGridReact<RowData>
          theme={gridTheme}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          gridOptions={gridOptions}
        />
      </div>
    </div>
  )
}

// ── Dashboard Content (Main Area) ───────────────────────────

export function DashboardContent() {
  return (
    <div className="flex flex-1 min-h-0">
      {/* Left: Params Panel */}
      <div className="w-60 shrink-0">
        <ParamsPanel />
      </div>

      {/* Right: Table */}
      <div className="flex-1 min-w-0">
        <DataTable />
      </div>
    </div>
  )
}