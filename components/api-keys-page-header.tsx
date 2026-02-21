"use client"

import Link from "next/link"
import { type FormEvent, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  File01Icon,
  MoreHorizontalCircle01Icon,
  PlusSignIcon,
  SearchIcon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const keyLastUsed = ["Today", "Last 7 days", "Last 30 days", "Never used"]

export function ApiKeysPageHeader() {
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [keyName, setKeyName] = useState("")

  const handleCreateKey = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!keyName.trim()) return

    setOpenCreateDialog(false)
    setKeyName("")
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">API Keys</h1>
          <p className="text-muted-foreground text-sm">
            Create and manage keys used to authenticate your email API requests.
          </p>
        </div>

        <div className="flex w-full items-center justify-between gap-2 lg:w-auto lg:justify-center">
          <Dialog open={openCreateDialog} onOpenChange={setOpenCreateDialog}>
            <DialogTrigger asChild>
              <Button className="h-9" variant="ghost">
                <HugeiconsIcon icon={PlusSignIcon} strokeWidth={2} data-icon="inline-start" />
                Create key
              </Button>
            </DialogTrigger>
            <DialogContent className="w-full lg:max-w-md! p-6 rounded-2xl ring-0 bg-sidebar/80 backdrop-blur-xl">
              <DialogHeader>
                <DialogTitle>Create API key</DialogTitle>
                <DialogDescription>
                  Add a new key to authenticate API requests.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleCreateKey}>
                <div className="space-y-1.5">
                  <Label htmlFor="api-key-name">Key name</Label>
                  <Input
                    id="api-key-name"
                    placeholder="Your API Key name"
                    value={keyName}
                    onChange={(event) => setKeyName(event.target.value)}
                    className="bg-background"
                  />
                </div>

                <DialogFooter className="mt-4 bg-transparent border-t-0">
                  <Button type="button" variant="outline" onClick={() => setOpenCreateDialog(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={!keyName.trim()}>
                    Create key
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

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
          <Input placeholder="Search API keys..." className="h-9 pl-8" />
        </div>

        <Select>
          <SelectTrigger className="h-9! w-full cursor-pointer bg-background md:w-56 hover:bg-accent">
            <SelectValue placeholder="Last used" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Last used</SelectLabel>
              {keyLastUsed.map((period) => (
                <SelectItem key={period} value={period}>
                  {period}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  )
}
