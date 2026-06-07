"use client"

import { useState } from "react"
import { SettingsNav } from "./settings-nav"
import { SettingsContent } from "./settings-content"

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile")

  return (
    <div className="size-full flex justify-center px-4 py-3">
      <div className="size-full max-w-6xl flex flex-col">
        <h1 className="text-3xl font-medium mb-4">Settings</h1>

        <div className="flex-1 flex overflow-hidden bg-background">
          <SettingsNav activeId={activeSection} onSelect={setActiveSection} />
          <SettingsContent activeId={activeSection}>
            {{
              profile: (
                <div className="text-muted-foreground">
                  Profile settings content
                </div>
              ),
              account: (
                <div className="text-muted-foreground">
                  Account settings content
                </div>
              ),
              billing: (
                <div className="text-muted-foreground">
                  Billing settings content
                </div>
              ),
              appearance: (
                <div className="text-muted-foreground">
                  Appearance settings content
                </div>
              ),
              notifications: (
                <div className="text-muted-foreground">
                  Notifications settings content
                </div>
              ),
              display: (
                <div className="text-muted-foreground">
                  Display settings content
                </div>
              ),
            }}
          </SettingsContent>
        </div>
      </div>
    </div>
  )
}
