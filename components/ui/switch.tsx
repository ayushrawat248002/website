"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

// optional utility (same as shadcn)
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

export function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer inline-flex h-4 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors",
        "bg-gray-300 data-[state=checked]:bg-green-500",
        "focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-green-400 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow transition-transform",
          "translate-x-0 data-[state=checked]:translate-x-4"
        )}
      />
    </SwitchPrimitive.Root>
  )
}