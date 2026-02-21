"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Delete02Icon,
  LockKeyIcon,
  MoreHorizontalCircle01Icon,
} from "@hugeicons/core-free-icons"

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

type ApiKeyRow = {
  name: string
  prefix: string
  lastUsed: string
  createdAt: string
}

const apiKeys: ApiKeyRow[] = []

export function ApiKeysPageTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>API name</TableHead>
          <TableHead className="whitespace-nowrap">Prefix</TableHead>
          <TableHead className="whitespace-nowrap">Last used</TableHead>
          <TableHead className="whitespace-nowrap">Created at</TableHead>
          <TableHead className="w-10 whitespace-nowrap text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {apiKeys.length > 0 ? (
          apiKeys.map((row) => (
            <TableRow key={row.prefix}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="font-mono text-xs">{row.prefix}</TableCell>
              <TableCell>{row.lastUsed}</TableCell>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell className="w-10 text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Actions for ${row.name}`}
                      className="rounded-full"
                    >
                      <HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuItem variant="destructive">
                      <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
                      Revoke key
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
                    <HugeiconsIcon icon={LockKeyIcon} strokeWidth={2} />
                  </EmptyMedia>
                  <EmptyTitle>No API keys yet</EmptyTitle>
                  <EmptyDescription>
                    Create your first key to start authenticating API requests.
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
