export type Feature = {
  id: string
  label: string
  path: string
  description: string
}

/**
 * Centralized app feature registry
 * Add new features here to make them available in ShortcutBar, SearchCommand, etc.
 */
export const appRegistry: Feature[] = [
  {
    id: "start",
    label: "START",
    path: "/",
    description: "Get started with Dloomberg",
  },
  {
    id: "hkss",
    label: "HKSS",
    path: "/hkss",
    description: "HKEX short sell turnover today",
  },
  {
    id: "set",
    label: "SET",
    path: "/settings",
    description: "Application settings",
  },
]

export const getFeatureById = (id: string): Feature | undefined =>
  appRegistry.find((f) => f.id === id)
