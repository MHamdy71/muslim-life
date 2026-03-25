import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ComponentRounded, ComponentSize } from "../../types/ui";

export type ButtonVariant =
  | "neutral"
  | "primary"
  | "secondarySolid"
  | "secondaryOutline"
  | "subtle"
  | "transparent";

export type ButtonTone = "default" | "destructive";
export type ButtonSurface = "off" | "on";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style"
> {
  variant?: ButtonVariant;
  size?: ComponentSize;
  rounded?: ComponentRounded;
  outline?: boolean;
  destructive?: boolean;
  onColor?: boolean;
  iconOnly?: boolean;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  selected?: boolean;
}

export type ButtonAppearanceSlice = {
  shell: string;
  idle: string;
  selected: string;
  focusOuter: string;
};

export const BUTTON_ROOT_DATA_ATTR = "data-msl-button-root" as const;
