"use client"

import { useState } from "react"
import { StatusBar } from "@/terminal-components/status-bar"
import { ShortcutBar } from "@/terminal-components/shortcut-bar"
import { ShortSellTurnoverGrid } from "@/components/ag-grids/short-sell-turnover-grid"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"


export default function Page() {
  const [period, setPeriod] = useState<"am" | "pm">("am")

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Row 1: Server Status + World Clocks + Settings */}
      <StatusBar />

      {/* Row 2: Shortcut Buttons + Command Search */}
      <ShortcutBar />

      {/* Row 4: Short Sell Turnover Grid */}

      <div className="flex h-full px-4 py-4 gap-4">
        <ShortSellTurnoverGrid period={period} />
        <div className="w-[30%]">
          <ToggleGroup variant="outline" type="single" value={period} onValueChange={(value) => setPeriod(value as "am" | "pm")} className="gap-0 border">
            <ToggleGroupItem value="am" aria-label="Toggle am" className="border-0 text-muted-foreground">
              AM
            </ToggleGroupItem>
            <ToggleGroupItem value="pm" aria-label="Toggle pm" className="border-0 text-muted-foreground">
              PM
            </ToggleGroupItem>
          </ToggleGroup>
          {/* <Button variant="outline">
            Settings
          </Button> */}
        </div>
      </div>
    </div>
  )
}