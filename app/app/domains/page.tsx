import { DomainsPageHeader } from "@/components/domains-page-header"
import { DomainsPageTable } from "@/components/domains-page-table"

export default async function DomainsPage() {
  return (
    <div className="space-y-6">
      <DomainsPageHeader />
      <DomainsPageTable />
    </div>
  )
}
