"use client";

import { useState, useRef, useCallback } from "react";
import { apiGet, API } from "@/lib/api";
import type { LetfApiResponse } from "@/features/letf/types";
import type { LetfSearchParams } from "@/features/letf/letf-search-params";
export interface UseLetfDataReturn {
  data: LetfApiResponse | null;
  loading: boolean;
  error: string | null;
  search: (params: LetfSearchParams) => void;
}

export function useLetfData(): UseLetfDataReturn {
  const [data, setData] = useState<LetfApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cancelledRef = useRef(false);

  const search = useCallback((params: LetfSearchParams) => {
    cancelledRef.current = false;

    const query = new URLSearchParams({
      letf_ticker: params.letfTicker,
      underlying_ticker: params.underlyingTicker,
      leverage: String(params.leverage),
      start_date: params.startDate,
      end_date: params.endDate,
      ref_currency: params.currency,
    });

    setLoading(true);
    setError(null);

    apiGet<LetfApiResponse>(`${API.letf}?${query.toString()}`)
      .then((json) => {
        if (cancelledRef.current) return;
        setData(json);
        setError(null);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (cancelledRef.current) return;
        setError(err instanceof Error ? err.message : String(err));
        setLoading(false);
      });
  }, []);

  return { data, loading, error, search };
}
