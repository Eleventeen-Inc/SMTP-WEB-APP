import { LogsPageHeader } from "@/components/logs-page-header"
import { LogsPageTable } from "@/components/logs-page-table"

export default async function LogsPage() {
  return (
    <div className="space-y-6">
      <LogsPageHeader />
      <LogsPageTable />
    </div>
  )
}
