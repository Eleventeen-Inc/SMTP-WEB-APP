import { HugeiconsIcon } from "@hugeicons/react"
import { MailIcon } from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

type SentEmail = {
  id: string
  to: string
  subject: string
  status: "bounced" | "canceled" | "delivered" | "failed" | "sent" | "queued"
  sentAt: string
}

const sentEmails: SentEmail[] = []

export function EmailsPageTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Email ID</TableHead>
          <TableHead>To</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Sent at</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sentEmails.length > 0 ? (
          sentEmails.map((email) => (
            <TableRow key={email.id}>
              <TableCell>{email.id}</TableCell>
              <TableCell>{email.to}</TableCell>
              <TableCell>{email.subject}</TableCell>
              <TableCell>
                <Badge variant="outline" className="capitalize">
                  {email.status}
                </Badge>
              </TableCell>
              <TableCell>{email.sentAt}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={5}>
              <Empty className="border-0 p-8">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <HugeiconsIcon icon={MailIcon} strokeWidth={2} />
                  </EmptyMedia>
                  <EmptyTitle>No sent emails yet</EmptyTitle>
                  <EmptyDescription>
                    Sent emails will appear here once you start sending.
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
