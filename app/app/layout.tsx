import ApplicationHeader from "@/components/app-header";
import ApplicationSidebar from "@/components/app-sidebar";
import { Sidebar, SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";
import React from "react"

type Props = {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Application Dashboard | Eleventeen",
    description: "Monitor your emails and create API Keys to manage email services.",
};

export default async function ApplicationLayout({ children }: Props) {
    return (
        <SidebarProvider>
            <ApplicationSidebar />
            <SidebarInset>
                <ApplicationHeader />
                <main className="p-6 w-full lg:max-w-7xl lg:mx-auto">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}