"use client"

import { StatusBar } from "@/features/shell/status-bar"
import { FavBar } from "@/features/shell/fav-bar"

export function TerminalChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col bg-background">
      <StatusBar />
      <FavBar />
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  )
}