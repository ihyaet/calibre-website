import { cn } from "@/lib/utils";

interface SectionDividerProps {
  label?: string;
  dark?: boolean;
  className?: string;
}

export function SectionDivider({ label, dark = false, className }: SectionDividerProps) {
  return (
    <div className={cn("flex items-center gap-4", className)} aria-hidden={!label}>
      <div className={cn("flex-1 h-px", dark ? "bg-line-plum" : "bg-line")} />
      {label && (
        <span
          className={cn(
            "font-mono text-[length:var(--text-label)] uppercase tracking-widest",
            dark ? "text-mute-plum" : "text-mute"
          )}
        >
          {label}
        </span>
      )}
      <div className={cn("flex-1 h-px", dark ? "bg-line-plum" : "bg-line")} />
    </div>
  );
}
