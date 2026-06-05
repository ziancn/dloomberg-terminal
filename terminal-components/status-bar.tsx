"use client"

import { Settings, LoaderCircle } from "lucide-react"
import { SiGithub } from '@icons-pack/react-simple-icons'
import { useBackendStatus } from "@/hooks/use-backend-status"

function StatusIndicator({ status, label }: { status: string; label: string }) {
  const isOk = status === 'ok'
  const isLoading = status === 'loading'
  const isOffline = status === 'offline'

  return (
    <div className="flex items-center gap-1.5">
      {isLoading ? (
        <LoaderCircle className="size-2 animate-spin text-yellow-500" />
      ) : isOk ? (
        <span className="size-2 rounded-full bg-green-500" />
      ) : isOffline ? (
        <span className="size-2 rounded-full bg-red-500" />
      ) : null}
      <span className="text-xs">{label}</span>
    </div>
  )
}

export function StatusBar() {
  const backendStatus = useBackendStatus()

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-800">
        {/* Left: Server Status */}
        <div className="flex items-center gap-4">
          <div>
            <StatusIndicator status={backendStatus.fastapi} label="FastAPI" />
          </div>
          <div>
            <StatusIndicator status={backendStatus.blpapi} label="BLPAPI" />
          </div>
        </div>

        {/* Quick links */}
        <div className="flex items-center gap-4">
          <a className="text-muted-foreground hover:text-foreground transition-colors" href="https://github.com/ziancn/dloomberg-service" target="_blank">
            <SiGithub className="size-4" />
          </a>
          <a className="text-muted-foreground hover:text-foreground transition-colors" href="#">
            <Settings className="size-4" />
          </a>
        </div>
      </div>
    </>
  )
}