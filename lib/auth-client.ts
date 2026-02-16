import { createAuthClient } from "better-auth/react"
import { apiKeyClient, lastLoginMethodClient, magicLinkClient, twoFactorClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
    baseURL: process.env.CLIENT_API,
    plugins: [
        twoFactorClient(),
        magicLinkClient(),
        apiKeyClient(),
        lastLoginMethodClient()
    ]
})