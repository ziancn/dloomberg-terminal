"use client"

import { useEffect, useState } from "react"
import { Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"


export function SearchCommand() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((prev) => !prev)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <Button 
                variant="default" size="xs"
                className="gap-2 border-0 bg-bloomberg-primary hover:bg-bloomberg-primary/70"
                onClick={() => {setOpen(true)}}
            >
                <Terminal className="h-4 w-4" />
                <span className="text-muted">Search</span>
                <div className="hidden md:flex gap-1">
                    <Kbd className="bg-muted/90 rounded">Ctrl</Kbd>
                    <Kbd className="bg-muted/90 rounded">K</Kbd>
                </div>        
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <Command>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem className="gap-2">
                                <span className="font-mono">HOME</span>
                                <span className="text-muted-foreground">Home page</span>
                            </CommandItem>
                            <CommandItem className="gap-2">
                                <span className="font-mono">HKSS</span>
                                <span className="text-muted-foreground">HKEX short sell turnover today</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>Settings</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    )
}
