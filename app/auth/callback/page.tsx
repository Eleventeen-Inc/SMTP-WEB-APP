"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OAuthCallbackPage() {
    const router = useRouter();

    useEffect(() => {
        const run = async () => {
            const { data, error } = await authClient.getSession({
                fetchOptions: {
                    credentials: "include",
                },
            });

            if (error || !data?.session) {
                router.replace("/auth/login?error=session_not_found");
                return;
            }

            router.replace("/app");
        };

        void run();
    }, [router]);

    return (
        <div className="bg-background flex min-h-svh items-center justify-center p-6">
            <div className="loader"></div>
        </div>
    );
}
