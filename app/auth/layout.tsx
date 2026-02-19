import { Metadata } from "next";
import React from "react"

type Props = {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Login and signup | Eleventeen",
    description: "Start using the platform by creating account or login to your account.",
};

export default async function AuthenticationLayout({ children }: Props) {
    return children;
}