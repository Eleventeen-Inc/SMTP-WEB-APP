import { ResetPasswordForm } from "@/components/reset-password-form"
import { notFound } from "next/navigation";

interface Props {
    searchParams: Promise<{
        token?: string | undefined;
    }>
}

export default async function ResetPasswordPage({ searchParams }: Props) {
    const { token } = await searchParams;

    if (!token) {
        return notFound();
    }

    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm z-10">
                <ResetPasswordForm />
            </div>
        </div>
    )
}
