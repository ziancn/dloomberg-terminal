"use client"

import { barTileClass } from "@/components/terminal/bar-tile"
import { SearchCommand } from "@/terminal-components/ui/search-command"
import { cn } from "@/lib/utils"

const menuItems = [
    { key: "F1", label: "Home" },
    { key: "F2", label: "News" },
    { key: "F3", label: "World" },
    { key: "F4", label: "Equity" },
    { key: "F5", label: "Crypto" },
]

export function TerminalMenuBar() {
    return (
        <header className="flex h-12 w-full border-b border-border bg-background">
            <nav className="flex h-full">
                {menuItems.map((item) => (
                    <button
                        key={item.key}
                        type="button"
                        className={cn(barTileClass, "gap-1.5 px-3 border-r border-border")}
                    >
                        <span className="text-muted-foreground">[{item.key}]</span>
                        <span className="tracking-wider">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="ml-auto flex h-full border-l">
                <SearchCommand />
            </div>
        </header>
    )
}
