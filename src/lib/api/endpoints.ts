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

// ---- /sfc/search ----

export interface SfcRaDetail {
  actType: number
  actDesc: string
  cactDesc: string
  hasLicence: boolean
  parentType: number | null
}

export interface SfcLicenseeItem {
  ceref: string
  name: string
  nameChi: string
  entityName: string
  entityOtherName: string
  entityType: string | null
  isIndi: boolean
  isEo: boolean
  isCorp: boolean
  isRi: boolean
  hasActiveLicence: "Y" | "N"
  hasActiveLicenceAmlo: "Y" | "N"
  isDeemedLicence: "Y" | "N"
  isDeemedLicenceAmlo: "Y" | "N"
  isActiveEo: "Y" | "N"
  address: string | null
  raDetails: SfcRaDetail[]
  raDetailsAmlo: SfcRaDetail[]
}

export interface SfcSearchResponse {
  totalCount: number
  items: SfcLicenseeItem[]
}

export interface SfcSearchParams {
  keyword: string
  licstatus: "active" | "all"
  searchby: "individual" | "corporation" | "ceref"
}

// ---------------------------------------------------------------------------
// Endpoint path constants (no hardcoded URLs in components)
// ---------------------------------------------------------------------------

export const API = {
  shortSellTurnover: "/hkex/short-sell-turnover",
  status: "/status",
  sfcSearch: "/sfc/search",
} as const
