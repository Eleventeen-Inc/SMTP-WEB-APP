"use client";

import { InboxIcon, Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useTheme } from "next-themes";
import { authClient } from "@/lib/auth-client";
import HeaderProfileDropdown from "./header-profile-dropdown";

export default function ApplicationHeader() {
    const { setTheme, theme } = useTheme();
    const { data: session, error, isPending } = authClient.useSession();

    const handleToggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <header className="flex h-14 shrink-0 items-center justify-between px-3">
            <div className="flex items-center gap-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <SidebarTrigger className="rounded-full" size={"icon-lg"} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Toggle Sidebar</p>
                    </TooltipContent>
                </Tooltip>
            </div>
            <div className="flex items-center gap-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button onClick={handleToggleTheme} variant="ghost" size="icon-lg" className="rounded-full">
                            <HugeiconsIcon icon={theme === 'light' ? Sun01Icon : Moon02Icon} strokeWidth={2} className="size-4.5" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Toggle Theme</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon-lg" className="rounded-full">
                            <HugeiconsIcon icon={InboxIcon} strokeWidth={2} className="size-4.5" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Notifications</p>
                    </TooltipContent>
                </Tooltip>
                <HeaderProfileDropdown
                    image={session?.user.image}
                    name={session?.user.name}
                    totalCredits={3000}
                    remainingCredits={1834}
                    isPending={isPending}
                />
            </div>
        </header>
    );
}
