import type { Sizes } from "@/types/ui";
import { borderClasses, shadowClasses } from "@/ui/uiTokens";
import { twMerge } from "tailwind-merge";

export type CardRootProps = React.HTMLAttributes<HTMLDivElement> & {
  shadow?: Sizes;
  border?: Sizes;
};
const baseClasses =
  "relative flex h-full min-h-0 flex-col bg-white text-gray-800 items-start gap-4 p-4 transition-colors rounded-2xl overflow-hidden";

export default function CardRoot({
  shadow = "medium",
  border = "none",
  children,
  className,
  ...rest
}: CardRootProps) {
  const rootClasses = twMerge(
    baseClasses,
    className,
    shadowClasses[shadow],
    borderClasses[border],
  );

  return (
    <div className={rootClasses} {...rest}>
      {children}
    </div>
  );
}
