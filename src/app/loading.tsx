export default function Loading() {
  return (
    <div className="flex flex-col size-full justify-center items-center gap-3">
        <div className="size-6 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
        <span className="text-xs text-muted-foreground">Loading</span>
    </div>
  )
}