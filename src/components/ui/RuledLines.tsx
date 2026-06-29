import { cn } from "@/lib/utils";

interface RuledLinesProps {
  className?: string;
  dark?: boolean;
}

export function RuledLines({ className, dark = false }: RuledLinesProps) {
  return (
    <div
      className={cn(
        "w-full h-px",
        dark ? "bg-line-plum" : "bg-line",
        className
      )}
      aria-hidden="true"
    />
  );
}
