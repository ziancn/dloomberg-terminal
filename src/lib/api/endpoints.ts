// ---------------------------------------------------------------------------
// Type definitions for every backend API contract
// ---------------------------------------------------------------------------

// ---- /hkex/short-sell-turnover ----

export interface ShortSellRow {
  code: string
  name: string
  shares: number
  value: number
  non_hkd: boolean
  board: string
}

export interface ShortSellSession {
  session: string // "am" | "pm"
  rows: ShortSellRow[]
}

export type ShortSellTurnoverResponse = ShortSellSession[]

// ---- /status ----

export interface BackendStatusResponse {
  blpapi: boolean
  // FastAPI being "online" is implied by a successful HTTP response.
  // Other fields may be added by the backend in the future.
}

// ---------------------------------------------------------------------------
// Endpoint path constants (no hardcoded URLs in components)
// ---------------------------------------------------------------------------

export const API = {
  shortSellTurnover: "/hkex/short-sell-turnover",
  status: "/status",
} as const