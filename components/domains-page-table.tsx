"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Delete02Icon,
  Globe02Icon,
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

type DomainStatus = "Verified" | "Pending" | "Temporary Failure" | "Failed"

type DomainRow = {
  domain: string
  status: DomainStatus
  region: string
  created: string
}

const domains: DomainRow[] = []

export function DomainsPageTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Domain</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {domains.length > 0 ? (
          domains.map((row) => (
            <TableRow key={row.domain}>
              <TableCell className="font-medium">
                <Button variant="link">{row.domain}</Button>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{row.status}</Badge>
              </TableCell>
              <TableCell>{row.region}</TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Actions for ${row.domain}`}
                      className="rounded-full"
                    >
                      <HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuItem variant="destructive">
                      <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
                      Delete domain
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
                    <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} />
                  </EmptyMedia>
                  <EmptyTitle>No domains yet</EmptyTitle>
                  <EmptyDescription>
                    Add a domain to start sending email from your own domain.
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
