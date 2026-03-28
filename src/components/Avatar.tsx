import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import type { AvatarSizeRem } from "../types/ui";

//#region Types

type AvatarBase = {
  size?: AvatarSizeRem;
  square?: boolean;
  border?: boolean;
  ring?: boolean;
  className?: string;
};

export type AvatarProps =
  | (AvatarBase & { variant: "letters"; letters: string })
  | (AvatarBase & { variant: "icon"; icon: ReactNode })
  | (AvatarBase & { variant: "image"; src: string; alt: string });

//#endregion

//#region Tokens

const letterClasses: Record<AvatarSizeRem, string> = {
  "1.5rem": "text-xs font-bold",
  "2rem": "text-xs font-semibold",
  "2.5rem": "text-sm font-semibold",
  "3rem": "text-base font-medium",
  "4rem": "text-xl font-medium",
  "5rem": "text-3xl font-normal",
  "7.5rem": "text-4xl font-normal tracking-tight",
};

function shapeRadiusClasses(square: boolean, size: AvatarSizeRem): string {
  if (!square) return "rounded-full";
  return size === "7.5rem" ? "rounded-lg" : "rounded";
}

//#endregion

//#region Component

export default function Avatar(props: AvatarProps) {
  const {
    size = "1.5rem",
    square = false,
    border = false,
    ring = false,
    className,
  } = props;

  const shape = shapeRadiusClasses(square, size);
  const isImage = props.variant === "image";
  const fillBg = isImage ? "bg-gray-25" : "bg-gray-100";

  return (
    <span
      className={twMerge(
        "relative inline-flex shrink-0 items-center justify-center text-gray-900",
        shape,
        fillBg,
        border && "border-2 border-gray-900/20",
        ring && "ring-4 ring-gray-25",
        isImage && "overflow-hidden",
        props.variant === "letters" && letterClasses[size],
        className,
      )}
      style={{ width: size, height: size }}
    >
      {props.variant === "letters" && props.letters.slice(0, 2).toUpperCase()}
      {props.variant === "icon" && props.icon}
      {props.variant === "image" && (
        <img
          src={props.src}
          alt={props.alt}
          className="absolute inset-0 size-full object-cover"
        />
      )}
    </span>
  );
}

//#endregion
