export default function SectionHeading({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="font-mono text-2xl sm:text-3xl font-bold whitespace-nowrap">
        <span className="text-accent">#</span>
        {children}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}
