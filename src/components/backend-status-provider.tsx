'use client';

import { ReactNode, useEffect, useState, useCallback, useRef } from 'react';
import { BackendStatusContext, BackendStatus } from '@/hooks/use-backend-status';
import { apiGet, API } from '@/lib/api';

const STATUS_TIMEOUT = 2000;
const POLL_INTERVAL = 2000; // 2 seconds
const MAX_RETRIES = 2;

export function BackendStatusProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<BackendStatus>({
    fastapi: 'loading',
    blpapi: 'loading',
    isRetrying: false,
    retryCount: 0,
    maxRetries: MAX_RETRIES,
  });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isCheckingRef = useRef(false);

  const checkBackendStatus = useCallback(async () => {
    // Prevent overlapping requests
    if (isCheckingRef.current) return;
    isCheckingRef.current = true;

    try {
      const data = await apiGet<{ blpapi: boolean }>(API.status, {
        timeout: STATUS_TIMEOUT,
      });

      setStatus((prev) => ({
        ...prev,
        fastapi: 'ok',
        blpapi: data.blpapi === true ? 'ok' : 'offline',
        isRetrying: false,
        retryCount: 0,
      }));
    } catch (error) {
      console.error('Backend status check failed:', error);

      setStatus((prev) => {
        const newRetryCount = prev.retryCount + 1;
        const isMaxRetriesReached = newRetryCount >= prev.maxRetries;

        return {
          ...prev,
          fastapi: isMaxRetriesReached ? 'offline' : 'loading',
          blpapi: isMaxRetriesReached ? 'offline' : 'loading',
          isRetrying: !isMaxRetriesReached,
          retryCount: newRetryCount,
        };
      });
    } finally {
      isCheckingRef.current = false;
    }
  }, []);

  // Initial check
  useEffect(() => {
    checkBackendStatus();
  }, [checkBackendStatus]);

  // Periodic polling with page visibility detection
  useEffect(() => {
    const startPolling = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        checkBackendStatus();
      }, POLL_INTERVAL);
    };

    const stopPolling = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopPolling();
      } else {
        startPolling();
      }
    };

    // Start polling if page is visible
    if (!document.hidden) {
      startPolling();
    }

    // Listen to visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopPolling();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [checkBackendStatus]);

  return (
    <BackendStatusContext.Provider value={status}>
      {children}
    </BackendStatusContext.Provider>
  );
}
