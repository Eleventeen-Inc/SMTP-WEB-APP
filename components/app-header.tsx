"use client";

import { InboxIcon, LayoutAlignLeftIcon, Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useTheme } from "next-themes";

export default function ApplicationHeader() {
    const { setTheme, theme } = useTheme();

    const handleToggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <header className="flex h-12 shrink-0 items-center justify-between px-3 border-b border-border">
            <div className="flex items-center gap-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <SidebarTrigger />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Toggle Sidebar</p>
                    </TooltipContent>
                </Tooltip>
            </div>
            <div className="flex items-center gap-2">
                <Button onClick={handleToggleTheme} variant="outline" size="icon">
                    <HugeiconsIcon icon={theme === 'light' ? Sun01Icon : Moon02Icon} strokeWidth={2} />
                </Button>
                <Button variant="outline" size="icon">
                    <HugeiconsIcon icon={InboxIcon} strokeWidth={2} />
                </Button>
                <Button variant="ghost" size="icon" className="p-0">
                    <Avatar className="h-6 w-6">
                        <AvatarImage
                            src={undefined}
                            alt="User avatar"
                            className="grayscale"
                        />
                        <AvatarFallback className="text-xs">N</AvatarFallback>
                    </Avatar>
                </Button>
            </div>
        </header>
    );
}
