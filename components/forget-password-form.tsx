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
import { useAuth } from "@/hooks/use-auth"
import { HugeiconsIcon } from "@hugeicons/react"
import { InformationCircleIcon, Loading03Icon } from "@hugeicons/core-free-icons"
import { TextMorph } from "torph/react"

export function ForgetPasswordForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const {
        forgetPassLoading,
        auth,
        errMsg,
        error,
        email,
        setEmail
    } = useAuth();

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={forgetPassLoading}
                    />
                </Field>
                {error && (
                    <FieldDescription className="text-destructive flex flex-row items-center gap-x-2">
                        <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} size={16} />
                        {errMsg}
                    </FieldDescription>
                )}
                <Field>
                    <Button
                        className="h-12 rounded-xl"
                        disabled={!email}
                    >
                        {forgetPassLoading && (
                            <HugeiconsIcon icon={Loading03Icon} strokeWidth={2} className="animate-spin" />
                        )}
                        <TextMorph>
                            {forgetPassLoading ? 'Processing' : 'Send email'}
                        </TextMorph>
                    </Button>
                </Field>
                <FieldDescription className="justify-center items-center w-full text-center">
                    <Button asChild variant={'link'}>
                        <a href="/auth/login">Return to Sign in</a>
                    </Button>
                </FieldDescription>
            </FieldGroup>
        </div>
    )
}
