import { cx } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export function apply(...inputs: string[]) {
  return {
    [`@apply ${twMerge(cx(inputs))}`]: {},
  }
}

export function palette<T extends Record<500, string>>(color: T, k: keyof T = 500): T & { DEFAULT: string } {
  if (color[k]) {
    return {
      ...color,
      DEFAULT: color[k] as string,
    }
  }
  return {
    ...color,
    DEFAULT: color[Object.keys(color)[0]],
  }
}
