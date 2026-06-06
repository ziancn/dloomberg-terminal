"use client"

import { useState, useCallback } from "react"
import { ShortSellTurnoverGrid } from "@/components/ag-grids/short-sell-turnover-grid"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"


export function HkssPage() {
  const [period, setPeriod] = useState<"am" | "pm">("am")
  const [reloadKey, setReloadKey] = useState(0)
  const handleReload = useCallback(() => setReloadKey((k) => k + 1), [])

  return (
    <div className="flex flex-col items-center h-full w-full px-4 py-3">
      <div className="h-full w-full max-w-7xl flex flex-col gap-3">
        <div className="flex justify-between">
          <Button size="xs" variant="default" onClick={handleReload}>Reload</Button>
          <div className="flex items-center gap-2">
            <span className="text-sm">As of</span>
              <ButtonGroup>
                <Button size="xs" variant={period === "am" ? "default" : "outline"} onClick={() => setPeriod("am")}>
                  Morning Close
                </Button>
                <Button size="xs" variant={period === "pm" ? "default" : "outline"} onClick={() => setPeriod("pm")}>
                  Day Close
                </Button>
              </ButtonGroup>
          </div>
          
        </div>
        <div className="flex-1 min-h-0 w-full">
          <ShortSellTurnoverGrid period={period} reloadTrigger={reloadKey} />
        </div>
      </div>
    </div>
  )
}
