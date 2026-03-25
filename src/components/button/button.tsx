import { forwardRef, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { BUTTON_ROOT_DATA_ATTR, type ButtonProps } from "./button.types";
import {
  DISABLED_CLASSES,
  roundedClasses,
  sizeConfig,
} from "./button.styles";
import { getEnabledAppearanceClasses } from "./button.utils";

export type {
  ButtonProps,
  ButtonVariant,
  ButtonTone,
  ButtonSurface,
} from "./button.types";

export { BUTTON_ROOT_DATA_ATTR };

function IconSlot({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  if (children == null) return null;
  return (
    <span
      className={twMerge(
        "inline-flex shrink-0 items-center justify-center text-current",
        "[&>svg]:size-full",
        className,
      )}
    >
      {children}
    </span>
  );
}

function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={twMerge("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "neutral",
    size = "large",
    rounded = "small",
    outline = false,
    destructive = false,
    onColor = false,
    iconOnly = false,
    loading = false,
    leadingIcon,
    trailingIcon,
    selected = false,
    disabled,
    className,
    children,
    type = "button",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    ...rest
  },
  ref,
) {
  if (import.meta.env.DEV && iconOnly) {
    if (!ariaLabel?.trim() && !ariaLabelledBy?.trim()) {
      console.warn(
        "[Button] iconOnly should include a non-empty aria-label or aria-labelledby for screen readers.",
      );
    }
    if (trailingIcon != null) {
      console.warn(
        "[Button] trailingIcon is ignored when iconOnly is true; only leadingIcon (or children) render in the icon slot.",
      );
    }
  }

  const isDisabled = Boolean(disabled || loading);
  const variantClasses = isDisabled
    ? DISABLED_CLASSES
    : getEnabledAppearanceClasses(
        variant,
        outline,
        destructive,
        onColor,
        selected,
      );

  const s = sizeConfig[size];
  const showTrailing = Boolean(trailingIcon) && !iconOnly;
  const showLeadSlot = !iconOnly && (loading || leadingIcon != null);
  const showLabel =
    !iconOnly && children != null && children !== false;
  const iconOnlyContent = loading ? (
    <LoadingSpinner className={s.iconSlot} />
  ) : (
    (leadingIcon ?? children)
  );

  const root = twMerge(
    "inline-flex items-center justify-center overflow-hidden",
    roundedClasses[rounded],
    loading && "cursor-wait",
    iconOnly ? s.iconOnly : s.root,
    variantClasses,
    isDisabled && "pointer-events-none",
    className,
  );

  return (
    <button
      ref={ref}
      {...rest}
      type={type}
      disabled={isDisabled}
      aria-busy={loading ? true : undefined}
      aria-pressed={selected ? true : undefined}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={root}
      {...{ [BUTTON_ROOT_DATA_ATTR]: "" }}
    >
      {iconOnly ? (
        <IconSlot className={s.iconSlot}>{iconOnlyContent}</IconSlot>
      ) : (
        <>
          {showLeadSlot && (
            <IconSlot className={s.iconSlot}>
              {loading ? (
                <LoadingSpinner className="size-full max-h-[1.25em] max-w-[1.25em]" />
              ) : (
                leadingIcon
              )}
            </IconSlot>
          )}
          {showLabel && (
            <span className="shrink-0 whitespace-nowrap">{children}</span>
          )}
          {showTrailing && (
            <IconSlot className={s.iconSlot}>{trailingIcon}</IconSlot>
          )}
        </>
      )}
    </button>
  );
});

export default Button;
