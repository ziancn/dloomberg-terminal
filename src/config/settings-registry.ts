import { ComponentType, lazy } from "react"
import { LucideIcon } from "lucide-react"

export type SettingsSection = {
  id: string
  label: string
  description?: string
  icon?: LucideIcon
  /** Lazy-loaded section content component */
  Component: ComponentType
}

/**
 * Settings sections registry
 *
 * Add a new section:
 * 1. Create a component file under src/features/settings/sections/
 * 2. Add an entry here with lazy(() => import("..."))
 */
export const settingsRegistry: SettingsSection[] = [
  {
    id: "favorites",
    label: "Favorites",
    description: "Personalise your favorites bar",
    Component: lazy(() => import("@/features/settings/sections/favorites-section")),
  },
  {
    id: "general",
    label: "General",
    description: "Generic settings",
    Component: lazy(() => import("@/features/settings/sections/general-section")),
  },
]

export const getSettingsById = (id: string): SettingsSection | undefined =>
  settingsRegistry.find((s) => s.id === id)
