import { twMerge } from "tailwind-merge";
import {
  circularInnerCaptionClasses,
  circularPercentTextClasses,
  circularSizePx,
  circularStrokeWidth,
  clampProgress,
  helperToneClasses,
  progressFillClasses,
  progressHelperTextClasses,
  progressLabelClasses,
  progressStrokeClasses,
  progressTrackHeights,
} from "./progressBar.styles";
import type {
  ProgressBarProps,
  ProgressBarSize,
  ProgressBarStyle,
} from "./progressBar.types";

function CircularProgressRing({
  size,
  barStyle,
  pct,
}: {
  size: ProgressBarSize;
  barStyle: ProgressBarStyle;
  pct: number;
}) {
  const px = circularSizePx[size];
  const sw = circularStrokeWidth[size];
  const cx = px / 2;
  const cy = px / 2;
  const r = Math.max(0, px / 2 - sw / 2);
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);
  const strokeClass = progressStrokeClasses(barStyle);

  return (
    <svg
      className="shrink-0 -rotate-90"
      width={px}
      height={px}
      viewBox={`0 0 ${px} ${px}`}
      aria-hidden
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        strokeWidth={sw}
        className="stroke-gray-100"
      />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        strokeWidth={sw}
        strokeLinecap="round"
        className={strokeClass}
        strokeDasharray={circ}
        strokeDashoffset={offset}
      />
    </svg>
  );
}

//#region Component

export default function ProgressBar({
  value,
  size = "medium",
  style = "primary",
  label,
  helperText,
  helperIcon,
  rounded = false,
  circular = false,
  className,
}: ProgressBarProps) {
  const pct = clampProgress(value);
  const fill = progressFillClasses(style);
  const trackH = progressTrackHeights[size];
  const showInlineValue = size === "large" && !circular;
  const innerCaption =
    circular &&
    (size === "medium" || size === "large") &&
    helperText != null;
  const showBottomHelperText = helperText != null && !innerCaption;

  return (
    <div
      className={twMerge("flex w-full flex-col gap-1 items-start", className)}
    >
      {label != null && (
        <div className={twMerge("w-full", progressLabelClasses[size])}>
          {label}
        </div>
      )}

      {circular ? (
        <div
          className="relative shrink-0"
          style={{
            width: circularSizePx[size],
            height: circularSizePx[size],
          }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
        >
          <CircularProgressRing size={size} barStyle={style} pct={pct} />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-0.5 px-2 text-center">
            <span className={circularPercentTextClasses[size]}>{pct}%</span>
            {innerCaption ? (
              <span
                className={twMerge(
                  "max-w-full min-w-0",
                  circularInnerCaptionClasses[size],
                  helperToneClasses(style),
                )}
              >
                {helperText}
              </span>
            ) : null}
          </div>
        </div>
      ) : (
        <div
          className={twMerge(
            "relative w-full overflow-hidden bg-gray-100",
            trackH,
            rounded && "rounded-full",
          )}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
        >
          <div
            className={twMerge(
              "absolute top-0 inset-s-0 h-full overflow-hidden",
              rounded && "rounded-full",
            )}
            style={{ width: `${pct}%` }}
          >
            <div
              className={twMerge(
                "flex h-full w-full items-center justify-end",
                fill,
                rounded && "rounded-full",
              )}
            >
              {showInlineValue && (
                <span className="pe-2 text-xs leading-4.5 font-normal text-white whitespace-nowrap">
                  {pct}%
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {helperIcon != null || showBottomHelperText ? (
        <div className="flex w-full items-center gap-2">
          {helperIcon != null ? (
            <span className="inline-flex size-4 shrink-0 items-center justify-center text-current [&>svg]:size-full">
              {helperIcon}
            </span>
          ) : null}
          {showBottomHelperText ? (
            <p
              className={twMerge(
                "min-w-0 flex-1 font-normal",
                progressHelperTextClasses[size],
                helperToneClasses(style),
              )}
            >
              {helperText}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

//#endregion
