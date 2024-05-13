import { cn } from "@/libs/className"
import React from "react"

export const TableCellHead = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  function ({ children, className, ...props }, ref) {
    return (
      <th ref={ref} className={cn("text-muted px-base py-small border-line border-b !text-sm", className)} {...props}>
        {children}
      </th>
    )
  },
)

TableCellHead.displayName = "TableCellHead"
