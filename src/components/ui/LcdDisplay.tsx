"use client";

import { cn } from "@/lib/utils";
import { LCD_STATES, type LcdState } from "@/lib/lcd-states";
import { useEffect, useState } from "react";

interface LcdDisplayProps {
  state?: LcdState;
  cycleStates?: LcdState[];
  cycleInterval?: number;
  className?: string;
}

export function LcdDisplay({
  state: controlledState,
  cycleStates,
  cycleInterval = 4000,
  className,
}: LcdDisplayProps) {
  const [activeState, setActiveState] = useState<LcdState>(
    controlledState ?? (cycleStates?.[0] ?? "dock")
  );
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (controlledState) {
      setActiveState(controlledState);
      return;
    }
    if (!cycleStates || cycleStates.length <= 1) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveState((prev) => {
          const idx = cycleStates.indexOf(prev);
          return cycleStates[(idx + 1) % cycleStates.length];
        });
        setVisible(true);
      }, 200);
    }, cycleInterval);

    return () => clearInterval(interval);
  }, [controlledState, cycleStates, cycleInterval]);

  const data = LCD_STATES[activeState];

  return (
    <div
      className={cn(
        "relative h-9 rounded-sm overflow-hidden",
        "bg-[#0A0612] border border-[#2A1A40]",
        "shadow-[0_0_12px_rgba(91,61,245,0.35)]",
        "transition-opacity duration-200",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
      role="img"
      aria-label={`LCD display showing ${activeState} mode`}
    >
      <div className="absolute inset-0 flex items-center px-3 gap-2">
        {data.type === "dock" && (
          <div className="flex items-center gap-1.5 w-full">
            {data.icons.map((icon, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-6 h-6 rounded-[4px] flex items-center justify-center text-[7px] font-mono font-bold text-white"
                style={{ backgroundColor: icon.color }}
                title={icon.label}
              >
                {icon.letter.slice(0, 2)}
              </div>
            ))}
          </div>
        )}

        {data.type === "clock" && (
          <div className="flex items-center gap-4 w-full">
            <span className="font-mono text-xl font-bold text-violet leading-none tracking-tight">
              {data.time}
            </span>
            <div className="flex items-end gap-0.5 flex-1 h-6">
              {data.bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[1px] bg-violet transition-all duration-300"
                  style={{ height: `${(h / 9) * 100}%`, opacity: 0.6 + (h / 9) * 0.4 }}
                />
              ))}
            </div>
          </div>
        )}

        {data.type === "timeline" && (
          <div className="flex flex-col justify-center gap-1 w-full">
            <div className="flex items-center gap-1 h-4 relative">
              {data.clips.map((clip, i) => (
                <div
                  key={i}
                  className="h-full rounded-[1px] border border-white/10"
                  style={{
                    backgroundColor: clip.color,
                    width: `${clip.width}%`,
                    opacity: 0.8,
                  }}
                />
              ))}
              <div
                className="absolute top-0 bottom-0 w-px bg-white"
                style={{ left: `${data.playheadPosition}%` }}
              />
            </div>
            <span className="font-mono text-[8px] text-mute-plum tracking-widest">
              {data.timecode}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
