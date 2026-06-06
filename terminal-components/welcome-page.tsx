"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import {
  TrendingUpDown,
  Server,
  Monitor,
  ExternalLink,
  type LucideIcon,
} from "lucide-react"

interface ActionItem {
  icon: LucideIcon
  title: string
  subtitle: string
  url: string
  shortcut?: string
}

interface GithubRepo {
  name: string
  path: string
}

export function WelcomePage() {
  const startActions: ActionItem[] = [
    { icon: Server, title: "Local Backend Service", subtitle: "Clone and run FastAPI server locally", url: "https://github.com/zian/dloomberg-service" },
    { icon: Monitor, title: "Bloomberg Terminal", subtitle: "Launch to access BLPAPI", url: "#" },
  ]

  const recentFunctions: ActionItem[] = [
    { icon: TrendingUpDown, title: "HKSS", subtitle: "HKEX Short Selling Turnover Today", url: "/hkss" },
    // { icon: Settings, title: "Customize your Setup", subtitle: "Configure data sources, layouts, and workspace preferences", url: "#" },
  ]

  const githubRepos: GithubRepo[] = [
    { name: "dloomberg-terminal", path: "github.com/zian/dloomberg-terminal" },
    { name: "dloomberg-service", path: "github.com/zian/dloomberg-service" },
  ]


  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="mx-auto flex justify-center w-full max-w-6xl flex-1 flex-col px-8 py-14">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            <p>Dloomberg Terminal</p>
            <p className="text-xl text-muted-foreground uppercase">Anywhere</p>
          </h1>
        </div>

        <Separator className="mb-8" />

        {/* Main Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">

            {/* Left Column: Start & Recent */}
            <div className="md:col-span-5">
              <h2 className="mb-4 text-xl font-medium">Start</h2>

              <div className="flex flex-col">
                {startActions.map((action, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    className="h-auto justify-start px-3 py-2 text-left"
                  >
                    <action.icon className="mr-3 size-5" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{action.title}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{action.subtitle}</div>
                    </div>
                    {action.shortcut && (
                      <kbd className="hidden rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-xs text-muted-foreground sm:inline">
                        {action.shortcut}
                      </kbd>
                    )}
                  </Button>
                ))}
              </div>

              <Separator className="my-6" />

              {/* GitHub Repos */}
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                GitHub Repos
              </h2>
              <div className="flex flex-col">
                {githubRepos.map((project, idx) => (
                  <a
                    key={idx}
                    href={`https://${project.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-auto flex-col items-start rounded-md px-3 py-2 text-left transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium">
                      {project.name}
                      <ExternalLink className="size-3 text-muted-foreground" />
                    </span>
                    <span className="max-w-xs truncate text-xs text-muted-foreground md:max-w-full">
                      {project.path}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Recent Functions */}
            <div className="md:col-span-7">
              <h2 className="mb-4 text-xl font-medium">Recent Functions</h2>

              <div className="space-y-4">
                {recentFunctions.map((item, idx) => (
                  <Link key={idx} href={item.url}>
                    <Card className="cursor-pointer transition-colors hover:bg-accent/50">
                      <CardHeader className="flex gap-4">
                        <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-background">
                          <item.icon className="size-5" />
                        </span>
                        <div>
                          <CardTitle className="text-sm font-semibold">{item.title}</CardTitle>
                          <CardDescription className="mt-1">{item.subtitle}</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Help & Product Links */}
              <Separator className="my-8" />
              <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                <div>
                  <div className="mb-2 font-semibold text-foreground">Dummy Links</div>
                  <ul className="space-y-1.5">
                    <li>
                      <a href="#" className="text-primary underline-offset-4 hover:underline">
                        Link
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary underline-offset-4 hover:underline">
                        Link
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary underline-offset-4 hover:underline">
                        Link
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="mb-2 font-semibold text-foreground">For future use</div>
                  <ul className="space-y-1.5">
                    <li>
                      <a href="#" className="text-primary underline-offset-4 hover:underline">
                        Link
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary underline-offset-4 hover:underline">
                        Link
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary underline-offset-4 hover:underline">
                        Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </div>
  )
}