import { createAuthClient } from "better-auth/react"
import { apiKeyClient, lastLoginMethodClient, magicLinkClient, twoFactorClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
    baseURL: process.env.SERVER_API || "https://api.eleventeen.net",
    plugins: [
        twoFactorClient(),
        magicLinkClient(),
        apiKeyClient(),
        lastLoginMethodClient()
    ]
})