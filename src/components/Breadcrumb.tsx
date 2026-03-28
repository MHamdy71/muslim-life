import { CaretRightIcon } from "@phosphor-icons/react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

//#region Types

export type BreadcrumbLink = { label: string; href: string };

export type BreadcrumbCrumb =
  | BreadcrumbLink
  | { label: string; current: true }
  | { ellipsis: true; items?: BreadcrumbLink[] };

export interface BreadcrumbProps {
  items: BreadcrumbCrumb[];
  className?: string;
}

//#endregion

//#region Type guards

function isEllipsis(
  item: BreadcrumbCrumb,
): item is { ellipsis: true; items?: BreadcrumbLink[] } {
  return "ellipsis" in item && item.ellipsis === true;
}

function isCurrent(
  item: BreadcrumbCrumb,
): item is { label: string; current: true } {
  return "current" in item && item.current === true;
}

//#endregion

//#region Separator and crumb shell

function Separator({ muted }: { muted?: boolean }) {
  return (
    <CaretRightIcon
      size={16}
      weight="regular"
      className={twMerge(
        "shrink-0 rtl:scale-x-[-1]",
        muted ? "text-gray-400" : "text-gray-700",
      )}
      aria-hidden
    />
  );
}

function CrumbBody({ children }: { children: ReactNode }) {
  return (
    <span className="flex min-w-0 items-center gap-1 p-0">{children}</span>
  );
}

//#endregion

//#region Ellipsis menu

function BreadcrumbEllipsisMenu({
  overflowItems,
  showSep,
  menuId,
}: {
  overflowItems: BreadcrumbLink[];
  showSep: boolean;
  menuId: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocMouseDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const id = window.requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    });
    return () => window.cancelAnimationFrame(id);
  }, [open]);

  const triggerId = `${menuId}-trigger`;
  const listId = `${menuId}-list`;

  return (
    <li ref={containerRef} className="relative flex min-w-0 items-center gap-1">
      {showSep && <Separator />}
      <CrumbBody>
        <button
          ref={buttonRef}
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={listId}
          aria-haspopup="menu"
          onClick={() => setOpen((v) => !v)}
          className={twMerge(
            "cursor-pointer border-0 bg-transparent p-0 font-inherit",
            "text-sm whitespace-nowrap text-gray-700",
            "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900",
            "hover:underline",
          )}
        >
          ...
        </button>
      </CrumbBody>
      {open && (
        <div
          ref={panelRef}
          id={listId}
          role="menu"
          aria-labelledby={triggerId}
          className={twMerge(
            "absolute inset-s-0 top-full z-50 mt-1 min-w-40",
            "rounded-md border border-gray-200 bg-white py-1 shadow-md",
          )}
        >
          <ul className="m-0 list-none p-0" role="none">
            {overflowItems.map((link, i) => (
              <li key={`${link.href}-${i}`} role="none">
                <a
                  role="menuitem"
                  href={link.href}
                  className={twMerge(
                    "block px-3 py-2 text-sm text-gray-700 no-underline",
                    "hover:bg-gray-100 focus-visible:bg-gray-100",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gray-900",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

//#endregion

//#region Breadcrumb

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  const navId = useId();

  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={twMerge("min-w-0", className)}>
      <ol className="m-0 flex list-none flex-wrap items-center gap-1 p-0">
        {items.map((item, index) => {
          const showSep = index > 0;

          if (isEllipsis(item)) {
            const list = item.items?.filter((l) => l.label && l.href) ?? [];

            if (list.length > 0) {
              return (
                <BreadcrumbEllipsisMenu
                  key={`ellipsis-${index}`}
                  overflowItems={list}
                  showSep={showSep}
                  menuId={`${navId}-${index}`}
                />
              );
            }

            return (
              <li
                key={`ellipsis-${index}`}
                className="flex min-w-0 items-center gap-1"
                aria-hidden
              >
                {showSep && <Separator />}
                <CrumbBody>
                  <span className="text-sm whitespace-nowrap text-gray-700">
                    …
                  </span>
                </CrumbBody>
              </li>
            );
          }

          if (isCurrent(item)) {
            return (
              <li
                key={`current-${index}`}
                className="flex min-w-0 items-center gap-1"
              >
                {showSep && <Separator muted />}
                <CrumbBody>
                  <span
                    className="text-sm whitespace-nowrap text-gray-400"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                </CrumbBody>
              </li>
            );
          }

          const link = item as BreadcrumbLink;
          return (
            <li
              key={`${link.href}-${index}`}
              className="flex min-w-0 items-center gap-1"
            >
              {showSep && <Separator />}
              <CrumbBody>
                <a
                  href={link.href}
                  className={twMerge(
                    "text-sm whitespace-nowrap text-gray-700",
                    "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900",
                    "hover:underline",
                  )}
                >
                  {link.label}
                </a>
              </CrumbBody>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

//#endregion
