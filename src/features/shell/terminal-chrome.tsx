"use client"

import { StatusBar } from "@/features/shell/status-bar"
import { ShortcutBar } from "@/features/shell/shortcut-bar"

export function TerminalChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col bg-background">
      <StatusBar />
      <ShortcutBar />
      {children}
    </div>
  )
}