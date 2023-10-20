"use client"

import { VariantProps, cva } from "class-variance-authority"
import React from "react"

const container = cva("mx-auto w-full p-6", {
  variants: {
    size: {
      default: "max-w-screen-default",
      mobile: "max-w-screen-mobile",
      tablet: "max-w-screen-tablet",
      retina: "max-w-screen-retina",
      fhd: "max-w-screen-fhd",
      qhd: "max-w-screen-qhd",
      uhd: "max-w-screen-uhd",
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

type ContainerVariantProps = VariantProps<typeof container>

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, ContainerVariantProps {
  className?: string
  size?: "mobile" | "tablet" | "retina" | "fhd" | "qhd" | "uhd" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(function (
  { children, className, size, ...props },
  ref,
) {
  return (
    <div ref={ref} className={container({ size, className })} {...props}>
      {children}
    </div>
  )
})

Container.displayName = "Container"
