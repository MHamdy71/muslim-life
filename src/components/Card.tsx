import { CaretDownIcon, CheckIcon, HeartIcon } from "@phosphor-icons/react";
import {
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

export type CardType = "default" | "favorite" | "progress" | "selectable";
export type CardDepth = "none" | "small" | "medium" | "large";

export type CardProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "title" | "children"
> & {
  type?: CardType;
  expandable?: boolean;
  shadow?: CardDepth;
  stroke?: CardDepth;
  disabled?: boolean;
  featuredIcon?: ReactNode;
  image?: ReactNode;
  title?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  tags?: string[];
  rating?: number;
  ariaLabel?: string;
  defaultSelected?: boolean;
  separator?: boolean;
};

const shadowClasses: Record<CardDepth, string> = {
  none: "shadow-none",
  small: "shadow-sm",
  medium:
    "shadow-[0_0.25rem_0.5rem_0_rgba(16,24,40,0.1),0_0.125rem_0.25rem_0_rgba(16,24,40,0.06)]",
  large: "shadow-lg",
};

const strokeClasses: Record<CardDepth, string> = {
  none: "border-none",
  small: "border border-gray-200",
  medium: "border-2 border-gray-200",
  large: "border-2 border-gray-200",
};

function isNestedInteractiveTarget(
  target: EventTarget | null,
  cardRoot: Element,
): boolean {
  if (!(target instanceof Element)) return false;
  const hit = target.closest(
    [
      "button",
      "a[href]",
      "input",
      "select",
      "textarea",
      "label",
      '[role="button"]',
      '[role="link"]',
      '[role="menuitem"]',
      '[role="checkbox"]',
      '[contenteditable="true"]',
    ].join(","),
  );
  if (!hit || hit === cardRoot) return false;
  return cardRoot.contains(hit);
}

function HeartIndicator({
  selected,
  disabled,
}: {
  selected: boolean;
  disabled: boolean;
}) {
  return (
    <div
      className={twMerge(
        "size-8 flex justify-center items-center rounded-full hover:bg-primary-50 transition-colors",
        selected ? "bg-primary-50" : "",
      )}
    >
      <HeartIcon
        size={20}
        weight={selected ? "fill" : "regular"}
        className={twMerge(
          "transition-colors",
          disabled
            ? "text-gray-400"
            : selected
              ? "text-primary-600"
              : "text-gray-500",
        )}
        aria-hidden
      />
    </div>
  );
}

function CheckboxIndicator({
  selected,
  disabled,
}: {
  selected: boolean;
  disabled: boolean;
}) {
  const base = "size-5 rounded-sm flex items-center justify-center";
  const border = disabled ? "border border-gray-400" : "border border-gray-500";
  const fill = selected
    ? disabled
      ? "bg-gray-400"
      : "bg-primary-600"
    : "bg-transparent";

  if (!selected) {
    return <div className={twMerge(base, fill, border)} aria-hidden="true" />;
  }

  return (
    <div className={twMerge(base, fill, border)} aria-hidden="true">
      <CheckIcon
        size={12}
        weight="bold"
        className={twMerge(disabled ? "text-gray-950" : "text-white")}
        aria-hidden
      />
    </div>
  );
}

function ChevronIcon({
  expanded,
  disabled,
}: {
  expanded: boolean;
  disabled: boolean;
}) {
  return (
    <CaretDownIcon
      size={16}
      weight="regular"
      className={twMerge(
        "transition-transform",
        disabled ? "text-gray-400" : "text-gray-800",
        expanded && "rotate-180",
      )}
      aria-hidden
    />
  );
}

export default function Card({
  type = "default",
  expandable = false,
  shadow = "medium",
  stroke = "none",
  disabled = false,
  featuredIcon,
  image,
  title,
  body,
  footer,
  tags,
  rating,
  className,
  ariaLabel,
  defaultSelected = false,
  separator = false,
  ...rest
}: CardProps) {
  const isExpandable = expandable;
  const isSelectable = type === "selectable";
  const isFavorite = type === "favorite";
  const isControlOnly = isSelectable || isFavorite;
  const isProgress = type === "progress";
  const rootInteractive = isExpandable || isProgress;

  const [selected, setSelected] = useState(defaultSelected);
  const [expanded, setExpanded] = useState(false);

  const enabled = !disabled;
  const canInteract = rootInteractive && enabled;

  const toggle = () => {
    if (!canInteract) return;
    if (isExpandable) setExpanded((v) => !v);
    if (isProgress) setSelected((v) => !v);
  };

  const onRootClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!rootInteractive || !canInteract) return;
    if (isNestedInteractiveTarget(e.target, e.currentTarget)) return;
    toggle();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    if (!canInteract) return;
    e.preventDefault();
    toggle();
  };

  const onControlClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (disabled) return;
    setSelected((v) => !v);
  };

  const titleNode =
    title == null ? null : (
      <div className="font-bold leading-7 relative shrink-0 text-lg w-full text-gray-800">
        {title}
      </div>
    );

  const bodyNode =
    body == null ? null : (
      <div
        className={twMerge(
          "font-normal leading-6 relative shrink-0 text-base w-full text-gray-600 min-w-0",
          isExpandable && !expanded && "truncate",
        )}
      >
        {body}
      </div>
    );

  const footerNode =
    footer == null || (isExpandable && !expanded) ? null : (
      <div className="text-sm leading-6 font-medium text-gray-700">
        {footer}
      </div>
    );

  const rootClasses = twMerge(
    "relative flex flex-col w-[22.5rem] bg-white text-gray-800 items-start gap-4 p-4 transition-colors rounded-2xl",
    className,
    disabled &&
      "cursor-not-allowed pointer-events-none bg-gray-200 text-gray-400 shadow-none border-none",
    enabled &&
      twMerge(
        shadow !== "none" && shadowClasses[shadow],
        stroke !== "none" && strokeClasses[stroke],
      ),
    enabled &&
      rootInteractive &&
      "focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-gray-900 focus-visible:border-solid hover:bg-gray-50 active:bg-gray-100",
    enabled && isExpandable && "cursor-pointer",
  );

  return (
    <div
      role={rootInteractive ? "button" : undefined}
      tabIndex={canInteract ? 0 : -1}
      aria-label={isControlOnly && !isExpandable ? undefined : ariaLabel}
      aria-disabled={disabled || undefined}
      aria-expanded={isExpandable ? expanded : undefined}
      aria-pressed={isProgress ? selected : undefined}
      onClick={rootInteractive ? onRootClick : undefined}
      onKeyDown={rootInteractive ? onKeyDown : undefined}
      className={rootClasses}
      {...rest}
    >
      <div className="flex justify-between items-center w-full">
        {image && (
          <div className="relative h-62.5 w-full shrink-0 rounded-md overflow-hidden">
            <div className="absolute inset-0 size-full">{image}</div>
          </div>
        )}
        {featuredIcon != null && (
          <div className="bg-primary-50 flex size-12 shrink-0 items-center justify-center rounded-full">
            <div className="flex size-6 items-center justify-center">
              {featuredIcon}
            </div>
          </div>
        )}
        {isControlOnly && (
          <button
            type="button"
            disabled={disabled}
            aria-pressed={selected}
            aria-label={
              isExpandable && ariaLabel
                ? `${ariaLabel} — ${isFavorite ? "favorite" : "selection"}`
                : ariaLabel
            }
            onClick={onControlClick}
            className={twMerge(
              "p-0 m-0 border-0 bg-transparent shrink-0 rounded-sm flex items-center justify-center",
              !disabled &&
                "cursor-pointer focus-visible:outline-none focus-visible:ring-0 focus-visible:border-2 focus-visible:border-gray-900 focus-visible:border-solid",
            )}
          >
            {isFavorite ? (
              <HeartIndicator selected={selected} disabled={disabled} />
            ) : (
              <CheckboxIndicator selected={selected} disabled={disabled} />
            )}
          </button>
        )}
        {isProgress && (
          <CheckboxIndicator selected={selected} disabled={disabled} />
        )}
      </div>

      <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
        {titleNode}
        {bodyNode}
        {separator && (!isExpandable || expanded) && (
          <div className="w-full mx-auto my-4 h-px bg-gray-100" />
        )}
        {footerNode}
      </div>

      {tags && tags.length > 0 && (
        <div className="content-stretch flex flex-wrap gap-2 items-start relative shrink-0">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-50 border border-gray-200 border-solid h-6 inline-flex items-center justify-center px-2 rounded-sm text-xs text-center whitespace-nowrap font-medium leading-5 text-gray-800 shrink-0"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {rating != null && (
        <div className="w-full flex items-start justify-start">
          <span className="text-xs leading-5 text-gray-600">
            {rating} reviews
          </span>
        </div>
      )}

      {isExpandable && (
        <div className="content-stretch flex flex-col gap-0 items-end justify-center relative shrink-0 w-full ">
          <div className="content-stretch flex items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 overflow-clip px-4 py-0 relative rounded-sm shrink-0 size-10 hover:bg-gray-100">
            <div className="relative shrink-0 size-6 flex items-center justify-center active:bg-gray-200">
              <ChevronIcon expanded={expanded} disabled={disabled} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
