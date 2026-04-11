import type { Sizes } from "../types/ui";

export const shadowClasses: Record<Sizes, string> = {
  none: "shadow-none",
  small: "shadow-sm",
  medium: "shadow-md",
  large: "shadow-lg",
};

export const borderClasses: Record<Sizes, string> = {
  none: "border-none",
  small: "border border-gray-200",
  medium: "border-2 border-gray-200",
  large: "border-2 border-gray-200",
};