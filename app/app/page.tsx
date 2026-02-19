import { redirect } from "next/navigation";

export default async function ApplicationPage() {
    return redirect('/app/emails');
}