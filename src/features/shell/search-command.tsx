"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { appRegistry } from "@/config/app-registry"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"


export function SearchCommand() {
    const router = useRouter()
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

    const handleSelect = (path: string) => {
        setOpen(false)
        router.push(path)
    }

    return (
        <>
            <Button 
                variant="default" size="sm"
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
                    <CommandList className="max-h-[60vh]">
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Navigation">
                            {appRegistry.map((feature) => (
                                <CommandItem 
                                    key={feature.id}
                                    className="gap-2"
                                    onSelect={() => handleSelect(feature.path)}
                                >
                                    <span className="font-mono">{feature.label}</span>
                                    <span className="text-muted-foreground">{feature.description}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </CommandDialog>
        </>
    )
}
