const BASE_URL = "http://localhost:8000"

const DEFAULT_TIMEOUT = 8000 // 8 seconds

export interface ApiClientOptions {
  /** Override the default timeout (ms). Set to 0 to disable. */
  timeout?: number
  /** AbortController signal for external cancellation. */
  signal?: AbortSignal
}

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number | null,
    public readonly body: unknown,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

/**
 * Unified HTTP client.
 * - Centralizes BASE_URL so it is never hardcoded in components.
 * - Built-in timeout via AbortSignal.timeout (or custom signal merge).
 * - Throws ApiError on non-ok responses for consistent error handling.
 */
export async function apiGet<T = unknown>(
  path: string,
  options: ApiClientOptions = {},
): Promise<T> {
  const { timeout = DEFAULT_TIMEOUT, signal: externalSignal } = options

  let signal: AbortSignal | undefined = externalSignal

  if (timeout > 0) {
    // Merge external signal with internal timeout signal
    const timeoutController = new AbortController()
    const timeoutId = setTimeout(() => timeoutController.abort(), timeout)

    if (externalSignal) {
      // If external signal fires, also abort the timeout
      externalSignal.addEventListener("abort", () => {
        clearTimeout(timeoutId)
        timeoutController.abort()
      }, { once: true })
    }

    signal = timeoutController.signal
  }

  const response = await fetch(`${BASE_URL}${path}`, { signal })

  if (!response.ok) {
    let body: unknown = null
    try {
      body = await response.json()
    } catch {
      // ignore parse errors
    }
    throw new ApiError(
      `API ${response.status}: ${response.statusText}`,
      response.status,
      body,
    )
  }

  return (await response.json()) as T
}