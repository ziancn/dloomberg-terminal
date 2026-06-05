"use client"

import { useMemo, useEffect, useState } from "react"
import { AgGridProvider, AgGridReact } from "ag-grid-react"
import { AllCommunityModule, type ColDef } from "ag-grid-community"
import { 
  CellSelectionModule, 
  ClipboardModule, 
  ContextMenuModule, 
  SideBarModule, 
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
} from "ag-grid-enterprise"
import { dloombergTerminalTheme } from "@/lib/ag-grid/dloomberg-terminal-theme"

/** Olympic Winners data from AG Grid sample (https://www.ag-grid.com/example-assets/olympic-winners.json). */
export type OlympicRow = {
  athlete: string
  age: number
  country: string
  year: number
  date: string
  sport: string
  gold: number
  silver: number
  bronze: number
  total: number
}

const modules = [
  AllCommunityModule,
  CellSelectionModule,
  ContextMenuModule,
  ClipboardModule,
  SideBarModule,
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
]

export function ThemeTestGrid() {
  const [rowData, setRowData] = useState<OlympicRow[]>()

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((res) => res.json())
      .then((data: OlympicRow[]) => setRowData(data))
  }, [])

  const columnDefs = useMemo<ColDef<OlympicRow>[]>(
      () => [
        { field: "athlete", filter: true },
        { field: "age", filter: "agNumberColumnFilter" },
        { field: "country", filter: true },
        { field: "year", filter: "agNumberColumnFilter" },
        { field: "date", },
        { field: "sport", filter: true },
        { field: "gold", },
        { field: "silver", },
        { field: "bronze", },
        { field: "total", },
      ],
      [],
  )

  const defaultColDef = useMemo<ColDef<OlympicRow>>(
      () => ({ sortable: true, resizable: true, floatingFilter: true}),
      [],
  )

  return (
      <AgGridProvider modules={modules}>
        <div className="flex-1">
          <AgGridReact<OlympicRow>
              className="size-full"
              containerStyle={{ height: "100%", width: "100%" }}
              theme={dloombergTerminalTheme}
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
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
              autoSizeStrategy={{
                type: 'fitCellContents', 
              }}
              selectionColumnDef={{
                width: 33,        // 设置固定宽度，例如 40px
                // suppressSizeToFit: true // 禁止自动调整大小
              }}
          />
        </div>
      </AgGridProvider>
  )
}
