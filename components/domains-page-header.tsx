"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  File01Icon,
  MoreHorizontalCircle01Icon,
  PlusSignIcon,
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
import Flag from 'react-flagkit';

const domainRegions = [
  {
    title: "US East (N. Virginia)",
    flagCode: "US"
  },
  {
    title: "EU (Frankfurt)",
    flagCode: "EU"
  },
  {
    title: "Asia (Singapore)",
    flagCode: "SG"
  }
]

const domainStatuses = ["Verified", "Pending", "Temporary Failure", "Failed"]

export function DomainsPageHeader() {
  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Domains</h1>
          <p className="text-muted-foreground text-sm">
            Manage sending domains, regions, and verification status.
          </p>
        </div>
        <div className="gap-x-2 flex flex-row items-center lg:justify-center justify-between lg:w-auto w-full">
          <Button className="h-9" variant={'ghost'}>
            <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} data-icon="inline-start" />
            Add domain
          </Button>
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
          <Input placeholder="Search domains..." className="h-9 pl-8" />
        </div>

        <Select>
          <SelectTrigger className="h-9! w-full cursor-pointer bg-background md:w-56 hover:bg-accent">
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Region</SelectLabel>
              {domainRegions.map((region) => (
                <SelectItem key={region.title} value={region.title}>
                  <Flag country={region.flagCode} size={20} className="rounded-[2px] outline outline-[#d7d7d7] dark:outline-[#5a5a5a]" />
                  {region.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="h-9! w-full cursor-pointer bg-background md:w-56 hover:bg-accent">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Domain Status</SelectLabel>
              {domainStatuses.map((status) => (
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
