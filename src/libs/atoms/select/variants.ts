import { tv } from "tailwind-variants"

export const select = tv({
  base: "",
  slots: {
    trigger: [
      "rounded bg-default inline-flex items-center gap-2 justify-between w-full",
      "h-[var(--button-size)] min-h-[var(--button-size)] min-w-[var(--button-size)]",
      "data-[placeholder-shown]:text-secondary",
    ],
    valueText: "min-w-6",
    clearTrigger:
      "text-secondary text-xs absolute top-1/2 right-3 -translate-y-1/2",
    indicator: "",
    content: [
      "flex flex-col w-full rounded overflow-hidden bg-component shadow-lg p-2",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out",
    ],
    itemGroup: "flex flex-col",
    itemGroupLabel: "w-full px-2 py-1 text-xs text-secondary",
    item: "inline-flex relative gap-2 justify-between items-start cursor-pointer hover:bg-foreground/5 pl-3 py-2 pr-8 rounded data-[state=checked]:text-primary font-medium",
    itemText: "grow",
    itemIndicator:
      "h-full absolute right-2 top-0 data-[state=checked]:flex items-center text-xs text-primary",
  },
  variants: {
    size: {
      xs: {
        trigger: "[--button-size:1.25rem] px-2 text-xs",
        item: "text-xs py-1",
      },
      sm: {
        trigger: "[--button-size:1.5rem] px-2 text-sm",
        item: "text-sm py-1",
      },
      md: {
        trigger: "[--button-size:2.25rem] px-4 text-sm",
        item: "text-base",
      },
      lg: { trigger: "[--button-size:2.75rem] px-4", item: "text-lg" },
    },
    invalid: {
      true: {
        label: "text-error",
        trigger: "bg-error/10 border-error border-2 !text-error",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
