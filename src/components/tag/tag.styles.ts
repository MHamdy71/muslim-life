import type { TagSize, TagStyle } from "./tag.types";

const tagRootLayout = "inline-flex items-center justify-center";

type Variant = "outline" | "filled";

type Tone = Record<Variant, string>;

const tones: Record<TagStyle, Tone> = {
  neutral: {
    outline: "bg-transparent border-gray-700 text-gray-800",
    filled: "bg-gray-50 border-gray-200 text-gray-800",
  },
  success: {
    outline: "bg-transparent border-success-700 text-success-800",
    filled: "bg-success-50 border-success-200 text-success-800",
  },
  warning: {
    outline: "bg-transparent border-warning-700 text-warning-800",
    filled: "bg-warning-50 border-warning-200 text-warning-800",
  },
  error: {
    outline: "bg-transparent border-error-700 text-error-800",
    filled: "bg-error-50 border-error-200 text-error-800",
  },
  info: {
    outline: "bg-transparent border-info-700 text-info-800",
    filled: "bg-info-50 border-info-200 text-info-800",
  },
};

export function tagAppearanceClasses(
  style: TagStyle,
  variant: Variant
): string {
  const appearance = tones[style][variant];
  return `${tagRootLayout} border ${appearance}`;
}

export function tagRadiusClasses(rounded: boolean): string {
  return rounded ? "rounded-full" : "rounded-sm";
}

const iconSvg = "[&>svg]:size-full";

const labelBaseMd = "text-base leading-6 font-medium whitespace-nowrap";

export const tagSizeClasses: Record<
  TagSize,
  {
    root: string;
    label: string;
    icon: string;
    gap: string;
    iconOnlyPadding: string;
    labelPadding: string;
    iconOnlyMin: string;
  }
> = {
  xSmall: {
    root: "min-h-5 h-5",
    label: "text-[0.625rem] leading-[0.875rem] font-semibold whitespace-nowrap",
    icon: `size-2.5 ${iconSvg}`,
    gap: "gap-1",
    iconOnlyPadding: "p-0.5",
    labelPadding: "px-2",
    iconOnlyMin: "min-w-5",
  },
  small: {
    root: "min-h-6 h-6",
    label: "text-xs leading-[1.125rem] font-medium whitespace-nowrap",
    icon: `size-3 ${iconSvg}`,
    gap: "gap-1",
    iconOnlyPadding: "p-0.5",
    labelPadding: "px-2",
    iconOnlyMin: "min-w-6",
  },
  medium: {
    root: "min-h-8 h-8",
    label: labelBaseMd,
    icon: `size-4 ${iconSvg}`,
    gap: "gap-1",
    iconOnlyPadding: "p-0.5",
    labelPadding: "px-3",
    iconOnlyMin: "min-w-8",
  },
  large: {
    root: "min-h-10 h-10",
    label: labelBaseMd,
    icon: `size-5 ${iconSvg}`,
    gap: "gap-1.5",
    iconOnlyPadding: "p-1",
    labelPadding: "px-4",
    iconOnlyMin: "min-w-10",
  },
};