"use client"

import { Suspense } from "react"
import { getSettingsById } from "@/config/settings-registry"

interface SettingsContentProps {
  activeId: string
}

export function SettingsContent({ activeId }: SettingsContentProps) {
  const section = getSettingsById(activeId)

  if (!section) return null

  const { label, description, Component } = section

  return (
    <div className="flex-1 px-6 py-4 overflow-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">{label}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <Suspense fallback={<div className="text-muted-foreground">Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  )
}
