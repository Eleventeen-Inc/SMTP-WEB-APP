"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  File01Icon,
  MoreHorizontalCircle01Icon,
  SearchIcon,
} from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateRangePicker } from "./date-range-picker"

const emailStatuses = [
  "Bounced",
  "Canceled",
  "Delivered",
  "Failed",
  "Sent",
  "Queued",
]

export function EmailsPageHeader() {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Emails</h1>
        <p className="text-muted-foreground text-sm">
          View sent email activity and filter delivery status.
        </p>
      </div>

      <Tabs defaultValue="sending" className="w-full">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <TabsList variant={'line'}>
            <TabsTrigger value="sending">Sending</TabsTrigger>
            <TabsTrigger value="receiving" disabled>
              Receiving
              <Badge variant="outline" className="ml-1">
                Coming soon
              </Badge>
            </TabsTrigger>
          </TabsList>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="More options">
                <HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem asChild>
                <Link href="/docs">
                  <HugeiconsIcon icon={File01Icon} strokeWidth={2} />
                  Open docs
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Tabs>

      <div className="flex flex-col gap-2 md:flex-row">
        <div className="relative w-full">
          <HugeiconsIcon
            icon={SearchIcon}
            strokeWidth={2}
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2"
          />
          <Input placeholder="Search emails..." className="pl-8 h-10 rounded-xl" />
        </div>

        <div className="relative w-full md:w-60">
          <DateRangePicker />
        </div>

        <Select>
          <SelectTrigger className="w-full bg-background md:w-48 h-10! rounded-xl hover:bg-accent cursor-pointer">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Email Status</SelectLabel>
              {emailStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  )
}
