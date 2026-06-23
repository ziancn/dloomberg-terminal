"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import { Alert, AlertDescription } from "@/components/ui/alert"

import {
  ChartCandlestick,
  Contact,
  TrendingUpDown,
  ExternalLink,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react"

interface StartStep {
  step: number
  title: string
  description: string
  url?: string
  note?: string
  optional?: boolean
}

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

export function StartPage() {
  const startSteps: StartStep[] = [
    {
      step: 1,
      title: "Clone Dloomberg Service & Run Locally",
      description:
        "This is a pure static frontend. Backend logic currently requires local execution. Cloud hosting may be considered if funding permits in the future.",
      url: "https://github.com/ziancn/dloomberg-service",
    },
    {
      step: 2,
      title: "Launch Bloomberg Terminal",
      description:
        "To use Bloomberg BLPAPI as a data source, open your Bloomberg Terminal. Dloomberg Service will automatically fetch data via BLPAPI.",
      note: "Reminder: This consumes your BLPAPI quota. Exhausting it will affect data retrieval for Excel Bloomberg functions.",
      optional: true,
    },
    {
      step: 3,
      title: "Check Connection Status",
      description:
        "If both Step 1 and Step 2 are running properly, the status indicator in the top bar will show a green dot. Otherwise, it will be red.",
    },
  ]

  const recentFunctions: ActionItem[] = [
    { icon: TrendingUpDown, title: "HKSS", subtitle: "HKEX short selling turnover today", url: "/hkss" },
    { icon: Contact, title: "SFCPR", subtitle: "HKSFC public register of licensed entities", url: "/sfcpr" },
    { icon: ChartCandlestick, title: "LETF", subtitle: "Leveraged ETF cummulative decay analysis", url: "/letf" },
  ]

  const githubRepos: GithubRepo[] = [
    { name: "dloomberg-terminal", path: "github.com/ziancn/dloomberg-terminal" },
    { name: "dloomberg-service", path: "github.com/ziancn/dloomberg-service" },
  ]

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="mx-auto flex justify-center w-full max-w-7xl flex-1 flex-col px-8 py-14">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            <p>
              <span className="font-(family-name:--font-faster-one) text-[2.4rem] font-light">D</span>loomberg Terminal
            </p>
            <p className="text-xl text-muted-foreground uppercase">Anywhere</p>
          </h1>
        </div>

        <Separator className="mb-8" />

        {/* Main Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-10">
            {/* Left Column: Start */}
            <div className="md:col-span-5">
              <h2 className="mb-4 text-xl font-medium">Get Started</h2>

              <div className="flex flex-col">
                {startSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex items-start gap-3 py-2.5"
                  >
                    {/* Step number */}
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-[11px] font-semibold text-muted-foreground">
                      {step.step}
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-medium">
                          {step.title}
                          {step.optional && (
                            <span className="ml-1 text-xs font-normal text-muted-foreground">
                              {" "}(Optional)
                            </span>
                          )}
                        </span>
                        {step.url && (
                          <a
                            href={step.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                            title="Open in new tab"
                          >
                            <ExternalLink className="size-4" />
                          </a>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      {step.note && (
                        <Alert variant="default" className="mt-2 bg-bloomberg-primary/10">
                          <AlertTriangle />
                          <AlertDescription className="text-wrap">{step.note}</AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Recent Functions & GitHub Repos */}
            <div className="md:col-span-5">
              <h2 className="mb-4 text-xl font-medium">Recent Functions</h2>

              <div className="flex flex-col gap-4">
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

              <Separator className="my-8" />

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
                    className="inline-flex h-auto flex-col items-start px-3 py-2 text-left transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400">
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
          </div>
        </main>
      </div>
    </div>
  )
}