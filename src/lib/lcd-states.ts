export type LcdState = "dock" | "clock" | "timeline";

export interface AppIcon {
  label: string;
  color: string;
  letter: string;
}

export interface LcdDockState {
  type: "dock";
  icons: AppIcon[];
}

export interface LcdClockState {
  type: "clock";
  time: string;
  bars: number[];
}

export interface LcdTimelineState {
  type: "timeline";
  timecode: string;
  clips: { color: string; width: number }[];
  playheadPosition: number;
}

export type LcdStateData = LcdDockState | LcdClockState | LcdTimelineState;

export const LCD_STATES: Record<LcdState, LcdStateData> = {
  dock: {
    type: "dock",
    icons: [
      { label: "Finder", color: "#3B82F6", letter: "F" },
      { label: "Chrome", color: "#EF4444", letter: "C" },
      { label: "Figma", color: "#8B5CF6", letter: "Fi" },
      { label: "Premiere", color: "#5B3DF5", letter: "Pr" },
      { label: "Slack", color: "#E11D48", letter: "S" },
      { label: "Spotify", color: "#22C55E", letter: "Sp" },
      { label: "Terminal", color: "#0E0E10", letter: "T" },
      { label: "Notes", color: "#EAB308", letter: "N" },
    ],
  },
  clock: {
    type: "clock",
    time: "9:80",
    bars: [3, 5, 8, 6, 9, 4, 7, 5, 8, 6, 4, 7, 9, 5, 6, 8, 3, 7, 5, 4],
  },
  timeline: {
    type: "timeline",
    timecode: "00:03:15:10",
    clips: [
      { color: "#5B3DF5", width: 18 },
      { color: "#7C5BFF", width: 12 },
      { color: "#3B82F6", width: 22 },
      { color: "#5B3DF5", width: 8 },
      { color: "#8B5CF6", width: 15 },
      { color: "#6E4FE0", width: 10 },
    ],
    playheadPosition: 42,
  },
};
