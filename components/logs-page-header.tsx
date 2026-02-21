"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  File01Icon,
  MoreHorizontalCircle01Icon,
  SearchIcon,
} from "@hugeicons/core-free-icons"

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
import { DateRangePicker } from "./date-range-picker"

const logStatuses = [
  "Processed",
  "Delivered",
  "Bounced",
  "Deferred",
  "Complained",
]

const apiKeysUsed = ["pk_live_acme_app", "pk_live_acme_billing", "pk_test_contoso_dev"]

export function LogsPageHeader() {
  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Logs</h1>
          <p className="text-muted-foreground text-sm">
            Inspect delivery events across regions and statuses.
          </p>
        </div>
        <div className="gap-x-2 flex flex-row items-center lg:justify-center justify-between lg:w-auto w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="More options"
                className="rounded-full"
              >
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
      </div>

      <div className="flex flex-col gap-2 md:flex-row">
        <div className="relative w-full">
          <HugeiconsIcon
            icon={SearchIcon}
            strokeWidth={2}
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2"
          />
          <Input placeholder="Search logs..." className="h-9 pl-8" />
        </div>

        <div className="relative w-full md:w-60">
          <DateRangePicker />
        </div>

        <Select>
          <SelectTrigger className="h-9! w-full cursor-pointer bg-background md:w-56 hover:bg-accent">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Log Status</SelectLabel>
              {logStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="h-9! w-full cursor-pointer bg-background md:w-56 hover:bg-accent">
            <SelectValue placeholder="API key used" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>API key used</SelectLabel>
              {apiKeysUsed.map((apiKey) => (
                <SelectItem key={apiKey} value={apiKey}>
                  {apiKey}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  )
}
