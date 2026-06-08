"use client"

import { useMemo, useCallback } from "react"
import { AgGridProvider, AgGridReact } from "ag-grid-react"
import {
  AllCommunityModule,
  type ColDef,
  type FirstDataRenderedEvent,
} from "ag-grid-community"
import {
  CellSelectionModule,
  ClipboardModule,
  ContextMenuModule,
  SideBarModule,
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
  StatusBarModule,
} from "ag-grid-enterprise"
import { dloombergTerminalTheme } from "@/lib/ag-grid/dloomberg-terminal-theme"
import type { SfcLicenseeItem } from "@/lib/api"
import { Check, Minus } from "lucide-react"

const modules = [
  AllCommunityModule,
  CellSelectionModule,
  ClipboardModule,
  ContextMenuModule,
  SideBarModule,
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
  StatusBarModule,
]

interface SfcprGridProps {
  rowData: SfcLicenseeItem[]
  isLoading: boolean
}

export function SfcprGrid({ rowData, isLoading }: SfcprGridProps) {
  const defaultColDef = useMemo<ColDef<SfcLicenseeItem>>(
    () => ({ sortable: true, resizable: true, floatingFilter: true }),
    [],
  )

  const columnDefs = useMemo<ColDef<SfcLicenseeItem>[]>(() => {
    const typeCol = (actType: number): ColDef<SfcLicenseeItem> => ({
      headerName: `T${actType}`,
      flex: 0.5,
      minWidth: 40,
      cellRenderer: (params: any) => {
        if (!params.data) return null
        const has = params.data.raDetails.some(
          (ra: { actType: number }) => ra.actType === actType,
        )
        return has ? (
          <div className="flex items-center justify-center h-full text-emerald-500">
            <Check className="size-3.5" />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground/25">
            <Minus className="size-3.5" />
          </div>
        )
      },
    })

    return [
      {
        field: "ceref",
        headerName: "CE Ref",
        filter: true,
        flex: 1,
        minWidth: 80,
      },
      {
        field: "name",
        headerName: "Name (EN)",
        filter: true,
        flex: 2,
        minWidth: 120,
      },
      {
        field: "nameChi",
        headerName: "Name (ZH)",
        filter: true,
        flex: 2,
        minWidth: 100,
      },
      {
        headerName: "Type",
        filter: true,
        flex: 1,
        minWidth: 90,
        valueGetter: (params) => {
          if (!params.data) return ""
          const d = params.data
          if (d.isIndi) return "Individual"
          if (d.isCorp) return "Corporation"
          return ""
        },
      },
      {
        field: "hasActiveLicence",
        headerName: "Active Licence",
        filter: true,
        flex: 1,
        minWidth: 100,
        cellRenderer: (params: any) => {
          return params.value === "Y" ? (
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
        headerName: "Details",
        flex: 0.8,
        minWidth: 80,
        sortable: false,
        cellRenderer: (params: any) => {
          if (!params.data?.ceref) return null
          const type = params.data.isCorp ? "corp" : "indi"
          return (
            <a
              href={`https://apps.sfc.hk/publicregWeb/${type}/${params.data.ceref}/details`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Details
            </a>
          )
        },
      },
      typeCol(1),
      typeCol(2),
      typeCol(3),
      typeCol(4),
      typeCol(5),
      typeCol(6),
      typeCol(7),
      typeCol(8),
      typeCol(9),
      typeCol(10),
    ]
  }, [])

  const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
    params.api.autoSizeColumns(["ceref"])
  }, [])

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
      <div className="h-full min-h-0 dloomberg-terminal-grid">
        <AgGridReact<SfcLicenseeItem>
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