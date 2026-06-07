"use client"

import { useMemo, useCallback } from "react"
import { AgGridProvider, AgGridReact } from "ag-grid-react"
import { AllCommunityModule, type ColDef, type FirstDataRenderedEvent } from "ag-grid-community"
import { dloombergTerminalTheme } from "@/lib/ag-grid/dloomberg-terminal-theme"
import { Check, Minus } from "lucide-react"
import { useShortSellData, type Period } from "@/hooks/use-short-sell-data"
import type { ShortSellRow } from "@/lib/api"
export type { ShortSellRow }

import {
  CellSelectionModule,
  ClipboardModule,
  ContextMenuModule,
  SideBarModule,
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
  StatusBarModule,
  SetFilterModule,
} from "ag-grid-enterprise"

const modules = [
  AllCommunityModule,
  CellSelectionModule,
  ContextMenuModule,
  ClipboardModule,
  SideBarModule,
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
  StatusBarModule,
  SetFilterModule,
]


interface ShortSellTurnoverGridProps {
  period: Period
  reloadTrigger?: number
}

export function ShortSellTurnoverGrid({ period, reloadTrigger = 0 }: ShortSellTurnoverGridProps) {
  const { rowData, isLoading } = useShortSellData(period, reloadTrigger)

  const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
    params.api.autoSizeColumns(["code", "non_hkd", "board"])
  }, [])

  const defaultColDef = useMemo<ColDef<ShortSellRow>>(
    () => ({ sortable: true, resizable: true, floatingFilter: true }),
    [],
  )

  const columnDefs = useMemo<ColDef<ShortSellRow>[]>(
    () => [
      {
        field: "code",
        filter: "agSetColumnFilter",
        flex: 1,
      },
      {
        field: "name",
        filter: true,
        flex: 1,
      },
      {
        field: "shares",
        filter: "agNumberColumnFilter",
        valueFormatter: (params) => {
          return params.value?.toLocaleString("en-US") || ""
        },
        flex: 1,
      },
      {
        field: "value",
        filter: "agNumberColumnFilter",
        valueFormatter: (params) => {
          return params.value?.toLocaleString("en-US") || ""
        },
        flex: 1,
      },
      {
        field: "non_hkd",
        filter: true,
        flex: 1,
        cellRenderer: (params: any) => {
          return params.value ? (
            <div className="flex items-center h-full text-emerald-500">
              <Check className="size-4" />
            </div>
          ) : (
            <div className="flex items-center h-full text-muted-foreground/40">
              <Minus className="size-4" />
            </div>
          )
        },
      },
      {
        field: "board",
        filter: true,
        flex: 1,
      },
    ],
    [],
  )

  const statusBar = useMemo(() => {
    return {
      statusPanels: [
        { statusPanel: "agTotalAndFilteredRowCountComponent" },
        { statusPanel: "agTotalRowCountComponent" },
        { statusPanel: "agFilteredRowCountComponent" },
      ],
    }
  }, [])

  return (
    <AgGridProvider modules={modules}>
      <div className="h-full min-h-160 dloomberg-terminal-grid">
        <AgGridReact<ShortSellRow>
          className="size-full"
          containerStyle={{ height: "100%", width: "100%" }}
          theme={dloombergTerminalTheme}
          rowData={rowData}
          loading={isLoading}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          statusBar={statusBar}
          onFirstDataRendered={onFirstDataRendered}
          sideBar={{
            toolPanels: ["columns", "filters"],
          }}
          cellSelection={{
            handle: { mode: "range" },
          }}
          rowSelection={{
            mode: "multiRow",
            enableClickSelection: true,
          }}
          selectionColumnDef={{
            width: 34,
          }}
        />
      </div>
    </AgGridProvider>
  )
}