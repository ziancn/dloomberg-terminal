"use client"

import { StatusBar } from "@/terminal-components/status-bar"
import { ShortcutBar } from "@/terminal-components/shortcut-bar"

export function TerminalChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col bg-background">
      <StatusBar />
      <ShortcutBar />
      {children}
    </div>
  )
}