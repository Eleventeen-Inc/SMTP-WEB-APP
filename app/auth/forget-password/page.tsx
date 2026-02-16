import { ForgetPasswordForm } from "@/components/forget-password-form"

export default async function ForgetPasswordPage() {
    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm z-10">
                <ForgetPasswordForm />
            </div>
        </div>
    )
}
