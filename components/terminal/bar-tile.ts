import { cn } from "@/lib/utils"

/** Bar cell: 1px `border-r` dividers; hover only tints bg (no ring — rings read thicker than borders). */
export const barTileClass = cn(
    "relative z-0 inline-flex h-full shrink-0 items-center text-xs",
    "hover:z-10 hover:border-r-accent hover:bg-accent hover:text-accent-foreground",
    "focus-visible:z-10 focus-visible:border-r-accent focus-visible:bg-accent focus-visible:text-accent-foreground focus-visible:outline-none",
)