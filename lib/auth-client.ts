import { createAuthClient } from "better-auth/react";
import {
    apiKeyClient,
    lastLoginMethodClient,
    magicLinkClient,
    twoFactorClient,
} from "better-auth/client/plugins";

export const authApiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.SERVER_API ||
    "http://localhost:4000";

export const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.CLIENT_API ||
    "http://localhost:3000";

export const authClient = createAuthClient({
    baseURL: authApiUrl,
    plugins: [twoFactorClient(), magicLinkClient(), apiKeyClient(), lastLoginMethodClient()],
});
