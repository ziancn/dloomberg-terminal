"use client"

import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchCommand } from "@/features/shell/search-command"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"


// ── Shortcut Buttons ────────────────────────────────────────

const frequentButtons: { label: string; href: string }[] = [
  { label: "HOME", href: "/" },
  { label: "HKSS", href: "/hkss" },
]


// ── Shortcut Bar (Second Row) ───────────────────────────────

export function ShortcutBar() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-neutral-800">
      {/* Frequently Used Button Group — visible on md+ */}
      <div className="hidden md:flex items-center gap-2">
        {frequentButtons.map((item) => (
          <Button
            key={item.label}
            variant="default"
            size="xs"
            onClick={() => router.push(item.href)}
          >
            {item.label}
          </Button>
        ))}
      </div>

      {/* Dropdown Menu — visible below md */}
      <div className="flex items-center md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={(props) => (
              <Button variant="default" size="xs" {...props}>
                Quick Access
                <ChevronDown className="-me-1 ms-1 size-4" />
              </Button>
            )}
          />
          <DropdownMenuContent align="start">
            {frequentButtons.map((item) => (
              <DropdownMenuItem
                key={item.label}
                onClick={() => router.push(item.href)}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Command Search */}
      <div>
        <SearchCommand />
      </div>
    </div>
  )
}
