import type { ReactNode } from "react";

export type TagSize = "xSmall" | "small" | "medium" | "large";

export type TagStyle =
  | "neutral"
  | "success"
  | "warning"
  | "error"
  | "info";

export type TagVariant = "outline" | "filled";

export type TagIconPlacement = "leading" | "trailing";

export type TagProps = {
  children?: ReactNode;
  size?: TagSize;
  style?: TagStyle;
  variant?: TagVariant; // 👈 بدل outline
  rounded?: boolean;
  icon?: ReactNode;
  iconPlacement?: TagIconPlacement;
  className?: string;
};