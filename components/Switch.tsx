

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import * as SwitchPrimitive from "@radix-ui/react-switch"
export function SwitchSizes() {
  return (
    <FieldGroup className="w-full max-w-[10rem]">
      <Field orientation="horizontal">
        <SwitchPrimitive.Root id="switch-size-sm" />
        <FieldLabel htmlFor="switch-size-sm">Small</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <SwitchPrimitive.Root id="switch-size-default" />
        <FieldLabel htmlFor="switch-size-default">Default</FieldLabel>
      </Field>
    </FieldGroup>
  )
}
