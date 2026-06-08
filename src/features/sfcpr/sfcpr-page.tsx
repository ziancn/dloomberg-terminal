"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSfcData } from "@/hooks/use-sfc-data"
import { SfcprGrid } from "./sfcpr-grid"

export function SfcprPage() {
  const { rowData, totalCount, isLoading, search } = useSfcData()

  const [keyword, setKeyword] = useState("")
  const [licstatus, setLicstatus] = useState<"active" | "all">("active")
  const [searchby, setSearchby] = useState<"individual" | "corporation" | "ceref">("individual")

  const handleSearch = useCallback(() => {
    const trimmed = keyword.trim()
    if (!trimmed) return
    search({ keyword: trimmed, licstatus, searchby })
  }, [keyword, licstatus, searchby, search])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleSearch()
    },
    [handleSearch],
  )

  return (
    <div className="size-full flex justify-center overflow-auto">
      <div className="size-full max-w-350 p-4">
        <div className="flex flex-col size-full gap-4">
          {/* Top: Filter card */}
          <Card className="shrink-0">
            <CardHeader>
              <CardTitle className="text-lg">HKSFC Public Register</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Filter options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Licence/Registration status */}
                <div className="space-y-2.5">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Licence / Registration Status
                  </h3>
                  <RadioGroup
                    value={licstatus}
                    onValueChange={(v) => setLicstatus(v as "active" | "all")}
                    className="gap-2"
                  >
                    <label
                      htmlFor="status-active"
                      className="flex items-center gap-2 text-xs cursor-pointer rounded-md border px-3 py-2 has-[[data-state=checked]]:border-primary/50 has-[[data-state=checked]]:bg-primary/5 transition-colors"
                    >
                      <RadioGroupItem value="active" id="status-active" />
                      Active
                    </label>
                    <label
                      htmlFor="status-active-inactive"
                      className="flex items-center gap-2 text-xs cursor-pointer rounded-md border px-3 py-2 has-[[data-state=checked]]:border-primary/50 has-[[data-state=checked]]:bg-primary/5 transition-colors"
                    >
                      <RadioGroupItem value="all" id="status-active-inactive" />
                      Active and inactive
                    </label>
                  </RadioGroup>
                </div>

                {/* Search by */}
                <div className="space-y-2.5">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Search By
                  </h3>
                  <RadioGroup
                    value={searchby}
                    onValueChange={(v) =>
                      setSearchby(v as "individual" | "corporation" | "ceref")
                    }
                    className="gap-2"
                  >
                    <label
                      htmlFor="search-individual"
                      className="flex items-center gap-2 text-xs cursor-pointer rounded-md border px-3 py-2 has-[[data-state=checked]]:border-primary/50 has-[[data-state=checked]]:bg-primary/5 transition-colors"
                    >
                      <RadioGroupItem value="individual" id="search-individual" />
                      Individual name
                    </label>
                    <label
                      htmlFor="search-corporation"
                      className="flex items-center gap-2 text-xs cursor-pointer rounded-md border px-3 py-2 has-[[data-state=checked]]:border-primary/50 has-[[data-state=checked]]:bg-primary/5 transition-colors"
                    >
                      <RadioGroupItem value="corporation" id="search-corporation" />
                      Corporation name
                    </label>
                    <label
                      htmlFor="search-entity-number"
                      className="flex items-center gap-2 text-xs cursor-pointer rounded-md border px-3 py-2 has-[[data-state=checked]]:border-primary/50 has-[[data-state=checked]]:bg-primary/5 transition-colors"
                    >
                      <RadioGroupItem value="ceref" id="search-entity-number" />
                      Central entity number
                    </label>
                  </RadioGroup>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t" />

              {/* Search bar */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <Input
                  placeholder="Enter search term..."
                  className="flex-1"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button
                  onClick={handleSearch}
                  disabled={isLoading}
                  className="sm:w-auto w-full"
                >
                  {isLoading ? "Searching…" : "Search"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Bottom: AG Grid */}
          <div className="flex-1 min-h-150">
            <SfcprGrid rowData={rowData} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  )
}