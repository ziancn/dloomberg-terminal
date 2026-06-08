"use client"

import { useState } from "react"
import { SettingsNav } from "./settings-nav"
import { SettingsContent } from "./settings-content"

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState("favorites")

  return (
    <div className="size-full flex justify-center px-4">
      <div className="size-full max-w-6xl flex flex-col">
        <div className="py-4 border-b">
          <h1 className="text-3xl font-medium">Settings</h1>
        </div>

        <div className="flex-1 flex overflow-hidden bg-background">
          <SettingsNav activeId={activeSection} onSelect={setActiveSection} />
          <SettingsContent activeId={activeSection} />
        </div>
      </div>
    </div>
  )
}
