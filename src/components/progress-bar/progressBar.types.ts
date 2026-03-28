import type { ReactNode } from "react";

//#region Primitives

export type ProgressBarSize = "small" | "medium" | "large";

export type ProgressBarStyle =
  | "primary"
  | "neutral"
  | "warning"
  | "error"
  | "info";

//#endregion

//#region Props

export type ProgressBarProps = {
  value: number;
  size?: ProgressBarSize;
  style?: ProgressBarStyle;
  label?: ReactNode;
  helperText?: ReactNode;
  helperIcon?: ReactNode;
  rounded?: boolean;
  circular?: boolean;
  className?: string;
};

//#endregion
