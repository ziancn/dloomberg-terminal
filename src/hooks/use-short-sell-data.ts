"use client"

import { useEffect, useState, useRef } from "react"
import { apiGet, API, type ShortSellSession } from "@/lib/api"

export type Period = "am" | "pm"

export interface UseShortSellDataReturn {
  /** Rows for the currently selected period (am/pm). */
  rowData: ShortSellSession["rows"]
  /** Full data keyed by session. */
  allData: Record<Period, ShortSellSession["rows"]>
  isLoading: boolean
  error: Error | null
}

/**
 * Fetches /hkex/short-sell-turnover and returns data split by session.
 *
 * The hook automatically refetches whenever `reloadTrigger` changes.
 * Components no longer need to know the API URL or parse the response shape.
 */
export function useShortSellData(
  period: Period,
  reloadTrigger = 0,
): UseShortSellDataReturn {
  const [allData, setAllData] = useState<Record<Period, ShortSellSession["rows"]>>({
    am: [],
    pm: [],
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  // Prevent stale state from an unmounted component
  const cancelledRef = useRef(false)

  useEffect(() => {
    cancelledRef.current = false
    setIsLoading(true)
    setError(null)

    apiGet<ShortSellSession[]>(API.shortSellTurnover)
      .then((sessions) => {
        if (cancelledRef.current) return
        const amRows =
          sessions.find((d) => d.session.toLowerCase() === "am")?.rows ?? []
        const pmRows =
          sessions.find((d) => d.session.toLowerCase() === "pm")?.rows ?? []
        setAllData({ am: amRows, pm: pmRows })
        setIsLoading(false)
      })
      .catch((err) => {
        if (cancelledRef.current) return
        console.error("Failed to fetch short sell data:", err)
        setAllData({ am: [], pm: [] })
        setError(err instanceof Error ? err : new Error(String(err)))
        setIsLoading(false)
      })

    return () => {
      cancelledRef.current = true
    }
  }, [reloadTrigger])

  return {
    rowData: allData[period],
    allData,
    isLoading,
    error,
  }
}