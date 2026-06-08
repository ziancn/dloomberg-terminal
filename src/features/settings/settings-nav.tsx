"use client"

import { Button } from "@/components/ui/button"
import { settingsRegistry, type SettingsSection } from "@/config/settings-registry"
import { cn } from "@/lib/utils"

interface SettingsNavProps {
  activeId: string
  onSelect: (id: string) => void
}

export function SettingsNav({ activeId, onSelect }: SettingsNavProps) {
  return (
    <nav className="w-52 py-4 border-r"> 
      <div className="flex flex-col">
        {settingsRegistry.map((section) => (
          <Button
            key={section.id}
            onClick={() => onSelect(section.id)}
            variant={activeId === section.id ? "secondary" : "ghost"}
            size="lg"
            className={cn(
              "w-full justify-start text-sm border-0",
              activeId === section.id
                ? ""
                : "text-muted-foreground"
            )}
          >
            {section.label}
          </Button>
        ))}
      </div>
    </nav>
  )
}
