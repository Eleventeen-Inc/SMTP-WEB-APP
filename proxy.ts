import { NextRequest, NextResponse } from "next/server";

const authApiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.SERVER_API ||
    "http://localhost:4000";

async function hasValidSession(request: NextRequest): Promise<boolean> {
    const cookie = request.headers.get("cookie") || "";

    if (!cookie) {
        return false;
    }

    try {
        const response = await fetch(`${authApiUrl}/api/auth/get-session`, {
            method: "GET",
            headers: {
                cookie,
                accept: "application/json",
            },
            cache: "no-store",
        });

        if (!response.ok) {
            return false;
        }

        const data = await response.json();

        return Boolean(data?.session || data?.data?.session);
    } catch {
        return false;
    }
}

export async function proxy(request: NextRequest) {
    const { pathname, search } = request.nextUrl;
    const isAuthed = await hasValidSession(request);

    if (pathname.startsWith("/app") && !isAuthed) {
        const loginUrl = new URL("/auth/login", request.url);
        const redirectTo = `${pathname}${search}`;

        loginUrl.searchParams.set("redirectTo", redirectTo);

        return NextResponse.redirect(loginUrl);
    }

    if (pathname.startsWith("/auth") && isAuthed) {
        return NextResponse.redirect(new URL("/app", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/app/:path*", "/auth/:path*"],
};
