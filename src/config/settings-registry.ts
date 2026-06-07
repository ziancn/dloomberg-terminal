import { LucideIcon } from "lucide-react"

export type SettingsSection = {
  id: string
  label: string
  description?: string
  icon?: LucideIcon
}

/**
 * Settings sections registry
 * Add new setting sections here
 */
export const settingsRegistry: SettingsSection[] = [
  {
    id: "profile",
    label: "Profile",
    description: "Manage your profile information",
  },
  {
    id: "account",
    label: "Account",
    description: "Account security and preferences",
  },
  {
    id: "billing",
    label: "Billing",
    description: "Billing and subscription",
  },
  {
    id: "appearance",
    label: "Appearance",
    description: "Theme and display settings",
  },
  {
    id: "notifications",
    label: "Notifications",
    description: "Notification preferences",
  },
  {
    id: "display",
    label: "Display",
    description: "Display settings",
  },
]

export const getSettingsById = (id: string): SettingsSection | undefined =>
  settingsRegistry.find((s) => s.id === id)
