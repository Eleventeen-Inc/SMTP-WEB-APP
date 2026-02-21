"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Delete02Icon,
  FolderLibraryIcon,
  MoreHorizontalCircle01Icon,
} from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type LogStatus = "Processed" | "Delivered" | "Bounced" | "Deferred" | "Complained"

type LogRow = {
  email: string
  status: LogStatus
  apiKeyUsed: string
  created: string
}

const logs: LogRow[] = []

export function LogsPageTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>API key used</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logs.length > 0 ? (
          logs.map((row) => (
            <TableRow key={`${row.email}-${row.created}`}>
              <TableCell className="font-medium">
                <Button variant="link">{row.email}</Button>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{row.status}</Badge>
              </TableCell>
              <TableCell>{row.apiKeyUsed}</TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Actions for ${row.email}`}
                      className="rounded-full"
                    >
                      <HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuItem variant="destructive">
                      <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
                      Delete log
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={5}>
              <Empty className="border-0 p-8">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <HugeiconsIcon icon={FolderLibraryIcon} strokeWidth={2} />
                  </EmptyMedia>
                  <EmptyTitle>No logs yet</EmptyTitle>
                  <EmptyDescription>
                    Logs will appear here when email events start coming in.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
