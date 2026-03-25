import { useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import type {
  ComponentRounded,
  ComponentSize,
  IconPlacement,
} from "../types/ui";

export interface AccordionProps {
  title: string;
  children: ReactNode;
  size?: ComponentSize;
  defaultExpanded?: boolean;
  iconPlacement?: IconPlacement;
  rounded?: ComponentRounded;
  disabled?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  className?: string;
}

const headerSizeClasses: Record<ComponentSize, string> = {
  small: "px-4 py-2 text-base",
  medium: "px-4 py-3 text-base",
  large: "p-4 text-base",
};

const contentSizeClasses: Record<ComponentSize, string> = {
  small: "px-4 pt-1 pb-3 text-base",
  medium: "px-4 pt-2 pb-4 text-base",
  large: "px-4 pt-2 pb-6 text-base",
};

const roundedClasses: Record<ComponentRounded, string> = {
  none: "",
  small: "rounded-sm overflow-hidden",
  medium: "rounded-md overflow-hidden",
  large: "rounded-lg overflow-hidden",
  full: "rounded-full overflow-hidden",
};

function Chevron({ open, disabled }: { open: boolean; disabled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={twMerge(
        "size-4 shrink-0 transition-transform",
        disabled ? "text-gray-400" : "text-gray-600",
        open && "rotate-180",
      )}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33337 6L8.00004 10.6667L12.6667 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Accordion({
  title,
  children,
  size = "large",
  defaultExpanded = false,
  iconPlacement = "trailing",
  rounded = "none",
  disabled = false,
  onExpandedChange,
  className,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultExpanded);

  const handleToggle = () => {
    if (disabled) return;
    const next = !isOpen;
    setIsOpen(next);
    onExpandedChange?.(next);
  };

  return (
    <section
      className={twMerge(
        "w-full border-gray-200 text-gray-900 px-0 border-t",
        roundedClasses[rounded],
        disabled && "text-gray-400",
        className,
      )}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-disabled={disabled}
        disabled={disabled}
        onClick={handleToggle}
        className={twMerge(
          "flex w-full items-center gap-4 bg-gray-25 font-semibold text-start transition-colors hover:bg-gray-100 active:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900",
          headerSizeClasses[size],
          disabled &&
            "cursor-not-allowed text-gray-400 hover:bg-transparent active:bg-transparent",
        )}
      >
        {iconPlacement === "leading" && (
          <Chevron open={isOpen} disabled={disabled} />
        )}
        <span className="flex-1 leading-6">{title}</span>
        {iconPlacement === "trailing" && (
          <Chevron open={isOpen} disabled={disabled} />
        )}
      </button>

      {isOpen && (
        <div
          className={twMerge(
            "bg-gray-25",
            contentSizeClasses[size],
            disabled ? "text-gray-400" : "text-gray-600",
          )}
        >
          <div
            className={twMerge(
              "leading-6",
              disabled ? "text-gray-400" : "text-gray-600",
            )}
          >
            {children}
          </div>
        </div>
      )}
    </section>
  );
}
