"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Skeleton } from "./ui/skeleton";
import { Loading03Icon, Login01Icon } from "@hugeicons/core-free-icons";
import { useAuth } from "@/hooks/use-auth";

type Props = {
    image: string | null | undefined;
    name: string | undefined;
    totalCredits: number | undefined;
    remainingCredits: number | undefined;
    isPending: boolean;
};

export default function HeaderProfileDropdown({
    image,
    name,
    totalCredits,
    remainingCredits,
    isPending,
}: Props) {
    const { signoutLoading, auth } = useAuth();

    const total = Math.max(0, totalCredits ?? 0);
    const remaining = Math.min(Math.max(0, remainingCredits ?? 0), total || Number.POSITIVE_INFINITY);
    const ratio = total > 0 ? remaining / total : 0;

    const radius = 26;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference * (1 - ratio);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-lg" className="rounded-full p-0">
                    {isPending ? (
                        <Skeleton className="h-6 w-6 rounded-full" />
                    ) : (
                        <Avatar className="h-6 w-6">
                            <AvatarImage src={image || ""} alt="User avatar" />
                            <AvatarFallback className="text-xs">{name?.slice(0, 1).toUpperCase()}</AvatarFallback>
                        </Avatar>
                    )}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-52 space-y-2 bg-background/70 dark:bg-[#323235]/70 backdrop-blur-md" align="end">
                <Card className="rounded-md p-2 bg-accent/70 dark:bg-[#3d3d40]/70 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-row items-center gap-x-2">
                            <div className="relative h-4 w-4 shrink-0">
                                <svg className="h-4 w-4 -rotate-90" viewBox="0 0 64 64" aria-hidden="true">
                                    <circle cx="32" cy="32" r={radius} fill="none" stroke="currentColor" className="text-neutral-300 dark:text-neutral-700" strokeWidth="6" />
                                    <circle
                                        cx="32"
                                        cy="32"
                                        r={radius}
                                        fill="none"
                                        stroke="currentColor"
                                        className="text-foreground"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={dashOffset}
                                    />
                                </svg>
                            </div>
                            <p className="text-xs font-semibold">Balance</p>
                        </div>
                        <Button size={'xs'}>
                            Upgrade
                        </Button>
                    </div>

                    <div className="space-y-1 text-xs">
                        <p className="flex items-center justify-between">
                            <span className="text-muted-foreground">Total credits</span>
                            <span className="font-medium">{total}</span>
                        </p>
                        <p className="flex items-center justify-between">
                            <span className="text-muted-foreground">Remaining credits</span>
                            <span className="font-medium">{remaining}</span>
                        </p>
                    </div>
                </Card>

                <DropdownMenuGroup>
                    <DropdownMenuLabel>Quick actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Subscription
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Usage Analytics
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={auth.signout}
                    disabled={signoutLoading}
                    variant="destructive"
                >
                    {signoutLoading ? (
                        <HugeiconsIcon
                            icon={Loading03Icon}
                            strokeWidth={2}
                            className="animate-spin"
                        />
                    ) : (
                        <HugeiconsIcon
                            icon={Login01Icon}
                            strokeWidth={2}
                        />
                    )}
                    Sign out
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-[11px]">Eleventeen Inc.©</DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
