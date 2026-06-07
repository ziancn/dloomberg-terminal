"use client"

import { ReactNode } from "react"
import { getSettingsById } from "@/config/settings-registry"

interface SettingsContentProps {
  activeId: string
  children: Record<string, ReactNode>
}

export function SettingsContent({ activeId, children }: SettingsContentProps) {
  const section = getSettingsById(activeId)

  if (!section) return null

  return (
    <div className="flex-1 px-6 py-4 overflow-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">{section.label}</h2>
        {section.description && (
          <p className="text-sm text-muted-foreground">{section.description}</p>
        )}
      </div>
      <div>{children[activeId]}</div>
    </div>
  )
}
