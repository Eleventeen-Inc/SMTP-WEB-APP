"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldTitle,
} from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group"
import { HugeiconsIcon } from "@hugeicons/react"
import { ViewIcon } from "@hugeicons/core-free-icons"

export function ResetPasswordForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <form>
                <FieldGroup>
                    <FieldTitle className="text-3xl font-bold text-center w-full justify-center items-center">
                        Reset password
                    </FieldTitle>
                    <FieldDescription className="text-center">
                        Please enter your new password below. Make sure it is strong and secure.
                    </FieldDescription>
                    <Field>
                        <FieldLabel htmlFor="new-password" >New Password</FieldLabel>
                        <InputGroup className="h-12 rounded-xl">
                            <InputGroupInput
                                id="new-password"
                                type="password"
                                required
                            />
                            <InputGroupAddon align="inline-end">
                                <Button variant={'ghost'}>
                                    <HugeiconsIcon icon={ViewIcon} strokeWidth={2} data-icon="inline-start" />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="confirm-password" >Confirm Password</FieldLabel>
                        <InputGroup className="h-12 rounded-xl">
                            <InputGroupInput
                                id="confirm-password"
                                type="password"
                                required
                            />
                            <InputGroupAddon align="inline-end">
                                <Button variant={'ghost'}>
                                    <HugeiconsIcon icon={ViewIcon} strokeWidth={2} data-icon="inline-start" />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <Field>
                        <Button className="h-12 rounded-xl" type="submit">Reset password</Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}
