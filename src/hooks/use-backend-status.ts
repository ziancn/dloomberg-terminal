'use client';

import { createContext, useContext } from 'react';

export type BackendServiceStatus = 'ok' | 'loading' | 'offline';

export interface BackendStatus {
  fastapi: BackendServiceStatus;
  blpapi: BackendServiceStatus;
  isRetrying: boolean;
  retryCount: number;
  maxRetries: number;
}

export const BackendStatusContext = createContext<BackendStatus | undefined>(undefined);

export function useBackendStatus(): BackendStatus {
  const context = useContext(BackendStatusContext);
  if (!context) {
    throw new Error('useBackendStatus must be used within BackendStatusProvider');
  }
  return context;
}
