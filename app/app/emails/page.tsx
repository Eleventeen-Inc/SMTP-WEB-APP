import { EmailsPageHeader } from "@/components/emails-page-header";
import { EmailsPageTable } from "@/components/emails-page-table";


export default async function EmailsPage() {
  return (
    <div className="space-y-6">
      <EmailsPageHeader />
      <EmailsPageTable />
    </div>
  )
}
