import { twMerge } from "tailwind-merge";
import {
  buttonAppearanceConfig,
  fallbackAppearance,
} from "./button.config";
import { BUTTON_BASE } from "./button.styles";
import type {
  ButtonAppearanceSlice,
  ButtonSurface,
  ButtonTone,
  ButtonVariant,
} from "./button.types";

export function focusRing(outer: string): string {
  return (
    "focus-visible:outline-none " +
    `focus-visible:shadow-[0_0_0_2px_#ffffff,0_0_0_5px_${outer}] focus-visible:overflow-visible`
  );
}

export function mergeAppearance(
  slice: ButtonAppearanceSlice,
  selected: boolean,
): string {
  return twMerge(
    BUTTON_BASE,
    slice.shell,
    selected ? slice.selected : slice.idle,
    focusRing(slice.focusOuter),
  );
}

export function resolveButtonAppearance(
  variant: ButtonVariant,
  outline: boolean,
  destructive: boolean,
): { tone: ButtonTone; visual: ButtonVariant } {
  const withOutline: ButtonVariant = outline ? "secondaryOutline" : variant;
  const visual: ButtonVariant =
    destructive && variant === "neutral" && withOutline !== "secondaryOutline"
      ? "secondarySolid"
      : withOutline;
  const tone: ButtonTone = destructive ? "destructive" : "default";
  return { tone, visual };
}

export function getEnabledAppearanceClasses(
  variant: ButtonVariant,
  outline: boolean,
  destructive: boolean,
  onColor: boolean,
  selected: boolean,
): string {
  const { tone, visual } = resolveButtonAppearance(
    variant,
    outline,
    destructive,
  );
  const surface: ButtonSurface = onColor ? "on" : "off";
  const slice =
    buttonAppearanceConfig[tone][surface][visual] ?? fallbackAppearance;
  return mergeAppearance(slice, selected);
}
