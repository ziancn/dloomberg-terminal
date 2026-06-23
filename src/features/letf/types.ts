export interface ChartSeriesData {
  name: string;
  data: (number | null)[];
}

export interface LetfApiResponse {
  meta: {
    letf_ticker: string;
    underlying_ticker: string;
    leverage: number;
    start_date: string;
    end_date: string;
    data_points: number;
    letf_currency: string;
    underlying_currency: string;
    ref_currency: string;
    fx_pairs_used: string[];
  };
  dates: string[];
  charts: {
    cumulative_returns: {
      title: string;
      x_label: string;
      y_label: string;
      series: ChartSeriesData[];
    };
    decay: {
      title: string;
      x_label: string;
      y_label: string;
      series: ChartSeriesData[];
    };
    tracking_error: {
      title: string;
      x_label: string;
      y_label: string;
      series: ChartSeriesData[];
    };
  };
  fund_data: {
    premium: ChartSeriesData;
    flow: ChartSeriesData;
  };
  fund_profile: Record<string, string>;
}
