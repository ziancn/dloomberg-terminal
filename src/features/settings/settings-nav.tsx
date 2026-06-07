"use client"

import { settingsRegistry, type SettingsSection } from "@/config/settings-registry"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SettingsNavProps {
  activeId: string
  onSelect: (id: string) => void
}

export function SettingsNav({ activeId, onSelect }: SettingsNavProps) {
  return (
    <nav className="w-52 bg-muted/30 py-4">
      <div className="space-y-1 px-2">
        {settingsRegistry.map((section) => (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className={cn(
              "w-full text-left px-3 py-2 rounded-sm text-sm font-medium transition-colors",
              activeId === section.id
                ? "bg-neutral-700 text-foreground"
                : "text-muted-foreground hover:bg-neutral-800 hover:text-foreground"
            )}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
