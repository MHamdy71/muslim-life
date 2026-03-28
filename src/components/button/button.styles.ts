import { twMerge } from "tailwind-merge";
import type { ComponentRounded, ComponentSize } from "../../types/ui";

//#region Base

export const BUTTON_BASE = "border-2 font-medium";

//#endregion

//#region Rounded

export const roundedClasses: Record<ComponentRounded, string> = {
  none: "rounded-none",
  small: "rounded-sm",
  medium: "rounded-md",
  large: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

//#endregion

//#region Disabled

export const DISABLED_CLASSES = twMerge(
  BUTTON_BASE,
  "border-transparent",
  "cursor-not-allowed bg-gray-200 text-gray-400",
  "[&_path:not([fill=none])]:!fill-gray-400 [&_path[stroke]]:!stroke-gray-400",
  "focus-visible:shadow-none focus-visible:outline-none",
);

//#endregion

//#region Size

export const sizeConfig: Record<
  ComponentSize,
  {
    root: string;
    iconOnly: string;
    iconSlot: string;
  }
> = {
  small: {
    root: "min-h-6 h-6 gap-1 px-2 text-xs leading-[1.125rem]",
    iconOnly: "size-6 max-h-6 max-w-6 min-h-6 min-w-6 p-0",
    iconSlot: "size-4",
  },
  medium: {
    root: "min-h-8 h-8 gap-1 px-3 text-sm leading-5",
    iconOnly: "size-8 max-h-8 max-w-8 min-h-8 min-w-8 p-0",
    iconSlot: "size-5",
  },
  large: {
    root: "min-h-10 h-10 gap-1 px-4 text-base leading-6",
    iconOnly: "size-10 max-h-10 max-w-10 min-h-10 min-w-10 p-0",
    iconSlot: "size-6",
  },
};

//#endregion
