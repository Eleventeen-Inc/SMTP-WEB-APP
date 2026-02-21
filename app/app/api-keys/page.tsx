import { ApiKeysPageHeader } from "@/components/api-keys-page-header"
import { ApiKeysPageTable } from "@/components/api-keys-page-table"

export default async function ApiKeysPage() {
  return (
    <div className="space-y-6">
      <ApiKeysPageHeader />
      <ApiKeysPageTable />
    </div>
  )
}
