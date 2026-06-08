"use client"

import { useState, useRef, useCallback } from "react"
import { apiGet, API, type SfcSearchResponse, type SfcSearchParams, type SfcLicenseeItem } from "@/lib/api"

export interface UseSfcDataReturn {
  rowData: SfcLicenseeItem[]
  totalCount: number
  isLoading: boolean
  error: Error | null
  /** Call to fetch data with the given search params. */
  search: (params: SfcSearchParams) => void
}

/**
 * Fetches /sfc/search with the given parameters.
 * Components call `search(params)` to trigger a fetch (e.g. on button click).
 */
export function useSfcData(): UseSfcDataReturn {
  const [rowData, setRowData] = useState<SfcLicenseeItem[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const cancelledRef = useRef(false)

  const search = useCallback((params: SfcSearchParams) => {
    cancelledRef.current = false
    setIsLoading(true)
    setError(null)

    const query = new URLSearchParams({
      keyword: params.keyword,
      licstatus: params.licstatus,
      searchby: params.searchby,
    })

    apiGet<SfcSearchResponse>(`${API.sfcSearch}?${query.toString()}`)
      .then((data) => {
        if (cancelledRef.current) return
        setRowData(data.items)
        setTotalCount(data.totalCount)
        setIsLoading(false)
      })
      .catch((err) => {
        if (cancelledRef.current) return
        console.error("Failed to fetch SFC data:", err)
        setRowData([])
        setTotalCount(0)
        setError(err instanceof Error ? err : new Error(String(err)))
        setIsLoading(false)
      })
  }, [])

  return {
    rowData,
    totalCount,
    isLoading,
    error,
    search,
  }
}