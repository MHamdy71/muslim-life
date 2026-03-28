import type { ReactNode } from "react";

//#region Primitives

export type TagSize = "xSmall" | "small" | "medium" | "large";

export type TagStyle =
  | "neutral"
  | "success"
  | "warning"
  | "error"
  | "info";

export type TagVariant = "outline" | "filled";

export type TagIconPlacement = "leading" | "trailing";

//#endregion

//#region Props

export type TagProps = {
  children?: ReactNode;
  size?: TagSize;
  style?: TagStyle;
  variant?: TagVariant;
  rounded?: boolean;
  icon?: ReactNode;
  iconPlacement?: TagIconPlacement;
  className?: string;
};

//#endregion
