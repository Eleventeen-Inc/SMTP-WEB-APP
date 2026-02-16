import { Button } from "@/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Home09Icon, NoteIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function NotFound() {
    return (
        <Empty className="bg-muted/30 h-screen w-full">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <HugeiconsIcon icon={NoteIcon} strokeWidth={2} />
                </EmptyMedia>
                <EmptyTitle>Page not found</EmptyTitle>
                <EmptyDescription className="max-w-xs text-pretty">
                    The page you’re looking for doesn’t exist, may have been moved, or the URL might be incorrect.
                    Please check the address or return to the homepage.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Button variant="outline" asChild>
                    <a href="/">
                        <HugeiconsIcon icon={Home09Icon} strokeWidth={2} />
                        Back home
                    </a>
                </Button>
            </EmptyContent>
        </Empty>
    )
}
