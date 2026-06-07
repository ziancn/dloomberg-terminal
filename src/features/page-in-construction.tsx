"use client"

import { Construction } from "lucide-react"

export function PageInConstruction() {
  return (
    <div className="size-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-muted-foreground">
            <Construction className="size-14 animate-pulse text-bloomberg-primary"/>
            <span>Page in construction</span>
        </div>
    </div>
  )
}