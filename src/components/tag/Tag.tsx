import { twMerge } from "tailwind-merge";
import {
  tagAppearanceClasses,
  tagRadiusClasses,
  tagSizeClasses,
} from "./tag.styles";
import type { TagProps } from "./tag.types";

export default function Tag({
  children,
  size = "medium",
  style = "neutral",
  variant = "filled",
  rounded = false,
  icon,
  iconPlacement = "leading",
  className,
}: TagProps) {
  const s = tagSizeClasses[size];

  const hasLabel =
    children != null &&
    children !== false &&
    (typeof children !== "string" || children.trim().length > 0);

  const hasIcon = icon != null;

  if (!hasIcon && !hasLabel) return null;

  const iconOnly = hasIcon && !hasLabel;

  const rootClasses = twMerge(
    "max-w-max",
    s.root,
    s.gap,
    tagAppearanceClasses(style, variant),
    tagRadiusClasses(rounded),
    iconOnly ? `${s.iconOnlyPadding} ${s.iconOnlyMin}` : s.labelPadding,
    className,
  );

  const iconEl = hasIcon ? (
    <span
      className={twMerge(
        "inline-flex shrink-0 items-center justify-center text-current",
        s.icon,
      )}
    >
      {icon}
    </span>
  ) : null;

  return (
    <span className={rootClasses}>
      {iconPlacement === "leading" && iconEl}
      {hasLabel && <span className={s.label}>{children}</span>}
      {iconPlacement === "trailing" && iconEl}
    </span>
  );
}
