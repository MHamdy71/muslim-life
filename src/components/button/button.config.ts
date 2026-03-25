import type {
  ButtonAppearanceSlice,
  ButtonSurface,
  ButtonTone,
  ButtonVariant,
} from "./button.types";

export const onColorFilled: ButtonAppearanceSlice = {
  shell: "border-transparent bg-white text-gray-900",
  idle: "hover:bg-white/80 active:bg-white/60",
  selected: "bg-white/60 hover:bg-white/60",
  focusOuter: "#1b8354",
};

export const destructiveVisuals: Partial<
  Record<ButtonVariant, ButtonAppearanceSlice>
> = {
  primary: {
    shell: "border-transparent bg-error-600 text-white",
    idle: "hover:bg-error-700 active:bg-error-900",
    selected: "bg-error-800 hover:bg-error-800 active:bg-error-900",
    focusOuter: "#d92d20",
  },
  secondarySolid: {
    shell: "border-transparent bg-error-50 text-error-700",
    idle: "hover:bg-error-100 active:bg-error-200",
    selected: "bg-error-200 hover:bg-error-200",
    focusOuter: "#d92d20",
  },
  secondaryOutline: {
    shell: "border-error-200 bg-transparent text-error-700",
    idle:
      "hover:border-error-200 hover:bg-error-100 active:border-error-200 active:bg-error-200",
    selected:
      "border-error-200 bg-error-200 hover:border-error-200 hover:bg-error-200",
    focusOuter: "#d92d20",
  },
  subtle: {
    shell: "border-transparent bg-transparent text-error-700",
    idle: "hover:bg-error-100 active:bg-error-200",
    selected: "bg-error-200 hover:bg-error-200",
    focusOuter: "#d92d20",
  },
  transparent: {
    shell: "border-transparent bg-transparent text-error-700",
    idle: "hover:text-error-700 active:text-error-900",
    selected: "text-error-900 hover:text-error-900",
    focusOuter: "#d92d20",
  },
};

export const fallbackAppearance: ButtonAppearanceSlice = {
  shell: "border-transparent bg-gray-100 text-gray-900",
  idle: "",
  selected: "",
  focusOuter: "#0d121c",
};

export const buttonAppearanceConfig: Record<
  ButtonTone,
  Record<ButtonSurface, Partial<Record<ButtonVariant, ButtonAppearanceSlice>>>
> = {
  default: {
    off: {
      primary: {
        shell: "border-transparent bg-primary-600 text-white",
        idle: "hover:bg-primary-700 active:bg-primary-900",
        selected:
          "bg-primary-800 hover:bg-primary-800 active:bg-primary-900",
        focusOuter: "#1b8354",
      },
      neutral: {
        shell: "border-transparent bg-gray-950 text-white",
        idle: "hover:bg-gray-800 active:bg-gray-600",
        selected: "bg-gray-700 hover:bg-gray-700 active:bg-gray-600",
        focusOuter: "#0d121c",
      },
      secondarySolid: {
        shell: "border-transparent bg-gray-100 text-gray-900",
        idle: "hover:bg-gray-200 active:bg-gray-200",
        selected: "bg-gray-200 hover:bg-gray-200 active:bg-gray-200",
        focusOuter: "#0d121c",
      },
      secondaryOutline: {
        shell: "border-gray-300 bg-transparent text-gray-900",
        idle:
          "hover:border-gray-200 hover:bg-gray-100 active:border-gray-300 active:bg-gray-200",
        selected:
          "border-gray-300 bg-gray-200 hover:border-gray-300 hover:bg-gray-200",
        focusOuter: "#0d121c",
      },
      subtle: {
        shell: "border-transparent bg-transparent text-gray-900",
        idle: "hover:bg-gray-100 active:bg-gray-200",
        selected: "bg-gray-200 hover:bg-gray-200",
        focusOuter: "#0d121c",
      },
      transparent: {
        shell: "border-transparent bg-transparent text-gray-900",
        idle: "hover:text-primary-700 active:text-primary-900",
        selected: "text-primary-800 hover:text-primary-800",
        focusOuter: "#1b8354",
      },
    },
    on: {
      primary: onColorFilled,
      neutral: onColorFilled,
      secondarySolid: {
        shell: "border-transparent bg-white/20 text-white",
        idle: "hover:bg-white/20 active:bg-white/40",
        selected: "bg-white/40 hover:bg-white/40",
        focusOuter: "#54c08a",
      },
      secondaryOutline: {
        shell: "border-white/40 bg-transparent text-white",
        idle: "hover:bg-white/20 active:bg-white/40",
        selected: "border-white/40 bg-white/40 hover:bg-white/40",
        focusOuter: "#ffffff",
      },
      subtle: {
        shell: "border-transparent bg-transparent text-white",
        idle: "hover:bg-white/20 active:bg-white/40",
        selected: "bg-white/40 hover:bg-white/40",
        focusOuter: "#ffffff",
      },
      transparent: {
        shell: "border-transparent bg-transparent text-white",
        idle: "hover:text-primary-400 active:text-primary-300",
        selected: "text-primary-400 hover:text-primary-400",
        focusOuter: "#54c08a",
      },
    },
  },
  destructive: {
    off: destructiveVisuals,
    on: destructiveVisuals,
  },
};
