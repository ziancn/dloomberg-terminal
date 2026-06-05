"use client"


import { StatusBar } from "@/terminal-components/status-bar"
import { ShortcutBar } from "@/terminal-components/shortcut-bar"


export default function Page() {

  return (
    <div className="flex h-dvh flex-col bg-background">
      <StatusBar />
      <ShortcutBar />
      <div className="flex items-center justify-center flex-1 min-h-0 px-4 py-4">
        <p className="animate-fade-in text-3xl text-center leading-relaxed">
          Getting started with the<br />
          <span className="font-mono font-semibold text-bloomberg-primary animate-pulse">Dloomberg</span>{" "}
          Terminal <br /> (Anywhere in browser)
        </p>
      </div>
    </div>
  )
}