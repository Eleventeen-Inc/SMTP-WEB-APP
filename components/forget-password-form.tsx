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
import { Input } from "@/components/ui/input"

export function ForgetPasswordForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <form>
                <FieldGroup>
                    <FieldTitle className="text-3xl font-bold text-center w-full justify-center items-center">
                        Forget password
                    </FieldTitle>
                    <FieldDescription className="text-center">
                        Enter the email address associated with your account, and we'll send you a link to reset your password.
                    </FieldDescription>
                    <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            className="h-12 rounded-xl"
                        />
                    </Field>
                    <Field>
                        <Button className="h-12 rounded-xl" type="submit">Send email</Button>
                    </Field>
                    <FieldDescription className="justify-center items-center w-full text-center">
                        <Button asChild variant={'link'}>
                            <a href="/auth/login">Return to Sign in</a>
                        </Button>
                    </FieldDescription>
                </FieldGroup>
            </form>
        </div>
    )
}
