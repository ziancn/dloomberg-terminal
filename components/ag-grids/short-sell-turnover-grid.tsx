"use client"

import { useMemo, useEffect, useState, useRef, useCallback } from "react"
import { AgGridProvider, AgGridReact } from "ag-grid-react"
import { AllCommunityModule, type ColDef, type GridApi } from "ag-grid-community"
import { dloombergTerminalTheme } from "@/lib/ag-grid/dloomberg-terminal-theme"

import { 
  CellSelectionModule, 
  ClipboardModule, 
  ContextMenuModule, 
  SideBarModule, 
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
  StatusBarModule,
} from "ag-grid-enterprise"

export type ShortSellRow = {
  code: string
  name: string
  shares: number
  value: number
  non_hkd: boolean
}

const modules = [
  AllCommunityModule,
  CellSelectionModule,
  ContextMenuModule,
  ClipboardModule,
  SideBarModule,
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
  StatusBarModule,
]

interface ShortSellTurnoverGridProps {
  period: "am" | "pm"
}

export function ShortSellTurnoverGrid({ period }: ShortSellTurnoverGridProps) {
  const [rowData, setRowData] = useState<ShortSellRow[]>()
  const [allData, setAllData] = useState<Record<"am" | "pm", ShortSellRow[]>>({ am: [], pm: [] })
  const [isLoading, setIsLoading] = useState(true)
  const gridApiRef = useRef<GridApi | null>(null)

  const onGridReady = useCallback((params: { api: GridApi }) => {
    gridApiRef.current = params.api
  }, [])

  useEffect(() => {
    fetch("http://localhost:8000/hkex/short-sell-turnover")
      .then((res) => res.json())
      .then((data) => {
        // data.data[0] = Mainboard by AM
        // data.data[1] = GEM by AM
        // data.data[2] = Mainboard by PM
        // data.data[3] = GEM by PM
        const amRows = data.data[0]?.parsed?.rows || []
        const pmRows = data.data[2]?.parsed?.rows || []
        setAllData({ am: amRows, pm: pmRows })
        setRowData(amRows)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Failed to fetch short sell data:", error)
        setRowData([])
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    setRowData(allData[period])
  }, [period, allData])

  useEffect(() => {
    if (rowData && rowData.length > 0 && gridApiRef.current) {
      gridApiRef.current.autoSizeColumns(["code"])
    }
  }, [rowData])

  const columnDefs = useMemo<ColDef<ShortSellRow>[]>(
    () => [
      { field: "code", filter: true, flex: undefined },
      { field: "name", filter: true, flex: 1 },
      { 
        field: "shares", 
        filter: "agNumberColumnFilter",
        valueFormatter: (params) => {
          return params.value?.toLocaleString("en-US") || ""
        },
        flex: 1
      },
      { 
        field: "value", 
        filter: "agNumberColumnFilter",
        valueFormatter: (params) => {
          return params.value?.toLocaleString("en-US") || ""
        },
        flex: 1
      },
    ],
    [],
  )

  const defaultColDef = useMemo<ColDef<ShortSellRow>>(
    () => ({ sortable: true, resizable: true, floatingFilter: true }),
    [],
  )

  const statusBar = useMemo(() => { 
    return {
          statusPanels: [
              { statusPanel: 'agTotalAndFilteredRowCountComponent' },
              { statusPanel: 'agTotalRowCountComponent' },
              { statusPanel: 'agFilteredRowCountComponent' },
              // { statusPanel: 'agSelectedRowCountComponent' },
              // { statusPanel: 'agAggregationComponent' }
          ]
      };
  }, []);

  return (
    <AgGridProvider modules={modules}>
      <div className="flex-1">
        <AgGridReact<ShortSellRow>
          className="size-full"
          containerStyle={{ height: "100%", width: "100%" }}
          theme={dloombergTerminalTheme}
          rowData={rowData}
          loading={isLoading}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          statusBar={statusBar}
          sideBar={{
            toolPanels: ["columns", "filters"],
          }}
          onGridReady={onGridReady}
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
