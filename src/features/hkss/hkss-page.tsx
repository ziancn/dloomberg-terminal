"use client"

import { useState, useCallback } from "react"
import { ShortSellTurnoverGrid } from "./short-sell-turnover-grid"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { RefreshCcw } from "lucide-react"


export function HkssPage() {
  const [period, setPeriod] = useState<"am" | "pm">("am")
  const [reloadKey, setReloadKey] = useState(0)
  const handleReload = useCallback(() => setReloadKey((k) => k + 1), [])

  return (
    <div className="flex flex-col items-center size-full px-4 overflow-auto">
      <div className="size-full max-w-350 flex flex-col">
        <div className="flex py-4 justify-between">
          {/* Reload Button */}
          <Button size="sm" variant="default" onClick={handleReload}>
            <RefreshCcw />
            Reload
          </Button>
          {/* Switch for data scope */}
          <div className="flex items-center gap-2">
            <ButtonGroup>
              <Button size="sm" variant={period === "am" ? "default" : "outline"} onClick={() => setPeriod("am")}>
                Morning Close
              </Button>
              <Button size="sm" variant={period === "pm" ? "default" : "outline"} onClick={() => setPeriod("pm")}>
                Day Close
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="flex-1">
          <ShortSellTurnoverGrid period={period} reloadTrigger={reloadKey} />
        </div>
      </div>
    </div>
  )
}
