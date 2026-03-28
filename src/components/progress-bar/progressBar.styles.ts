import type { ProgressBarSize, ProgressBarStyle } from "./progressBar.types";

//#region Helpers

export function clampProgress(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.min(100, Math.max(0, value));
}

//#endregion

//#region Size

export const progressTrackHeights: Record<ProgressBarSize, string> = {
  small: "h-1",
  medium: "h-2",
  large: "h-4",
};

const labelBase = "text-gray-900";

export const progressLabelClasses: Record<ProgressBarSize, string> = {
  small: `text-sm leading-5 ${labelBase}`,
  medium: `text-sm leading-5 ${labelBase}`,
  large: `text-base leading-6 ${labelBase}`,
};

export const progressHelperTextClasses: Record<ProgressBarSize, string> = {
  small: "text-xs leading-[1.125rem]",
  medium: "text-sm leading-5",
  large: "text-sm leading-5",
};

export const circularSizePx: Record<ProgressBarSize, number> = {
  small: 64,
  medium: 120,
  large: 160,
};

export const circularStrokeWidth: Record<ProgressBarSize, number> = {
  small: 6,
  medium: 8,
  large: 10,
};

export const circularPercentTextClasses: Record<ProgressBarSize, string> = {
  small: "text-sm font-bold leading-5 text-gray-900",
  medium: "text-2xl font-bold leading-8 text-gray-900",
  large: "text-3xl font-bold leading-10 text-gray-900",
};

export const circularInnerCaptionClasses: Record<ProgressBarSize, string> = {
  small: "text-xs leading-[1.125rem]",
  medium: "text-sm leading-5",
  large: "text-base leading-6",
};

//#endregion

//#region Style

const progressFillMap: Record<ProgressBarStyle, string> = {
  primary: "bg-primary-600",
  neutral: "bg-gray-700",
  warning: "bg-warning-600",
  error: "bg-error-600",
  info: "bg-info-600",
};

export function progressFillClasses(style: ProgressBarStyle): string {
  return progressFillMap[style];
}

const progressStrokeMap: Record<ProgressBarStyle, string> = {
  primary: "stroke-primary-600",
  neutral: "stroke-gray-700",
  warning: "stroke-warning-600",
  error: "stroke-error-600",
  info: "stroke-info-600",
};

export function progressStrokeClasses(style: ProgressBarStyle): string {
  return progressStrokeMap[style];
}

const helperToneMap: Record<ProgressBarStyle, string> = {
  primary: "text-gray-700",
  neutral: "text-gray-700",
  warning: "text-warning-800",
  error: "text-error-700",
  info: "text-info-800",
};

export function helperToneClasses(style: ProgressBarStyle): string {
  return helperToneMap[style];
}

//#endregion
