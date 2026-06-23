export interface LetfSearchParams {
  letfTicker: string;
  underlyingTicker: string;
  leverage: number;
  startDate: string;
  endDate: string;
  currency: string;
}

const today = new Date();
const oneYearAgo = new Date(today);
oneYearAgo.setFullYear(today.getFullYear() - 1);

const fmt = (d: Date) => d.toISOString().slice(0, 10);

export const DEFAULT_PARAMS: LetfSearchParams = {
  letfTicker: "",
  underlyingTicker: "",
  leverage: 0,
  startDate: fmt(oneYearAgo),
  endDate: fmt(today),
  currency: "local",
};

export const CURRENCIES = [
  { value: "local", label: "LCL" },
  { value: "USD", label: "USD" },
  { value: "HKD", label: "HKD" },
  { value: "EUR", label: "EUR" },
  { value: "JPY", label: "JPY" },
  { value: "GBP", label: "GBP" },
  { value: "CHF", label: "CHF" },
  { value: "CNY", label: "CNY" },
] as const;