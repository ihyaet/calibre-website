import { cn } from "@/lib/utils";
import { SPECS } from "@/data/specs";
import { RevealItem } from "@/components/ui/RevealItem";

interface SpecificationTableProps {
  className?: string;
}

export function SpecificationTable({ className }: SpecificationTableProps) {
  return (
    <table
      className={cn("w-full border-collapse", className)}
      aria-label="Calibre keyboard specifications"
    >
      <tbody>
        {SPECS.map((row, i) => (
          <tr key={i} className="border-t border-line-plum last:border-b">
            <td className="py-4 pr-8 font-mono text-[length:var(--text-label)] uppercase tracking-widest text-mute-plum">
              <RevealItem index={i} stagger={70} duration={420}>
                {row.label}
              </RevealItem>
            </td>
            <td className="py-4 font-sans text-[length:var(--text-small)] text-on-plum text-right">
              <RevealItem index={i} baseDelay={60} stagger={70} duration={420}>
                {row.value}
              </RevealItem>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
