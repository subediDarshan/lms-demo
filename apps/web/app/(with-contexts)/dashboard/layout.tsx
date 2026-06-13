import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/auth";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const requestHeaders = await headers();
    const session = await auth.api.getSession({ headers: requestHeaders });

    if (!session) {
        const path = requestHeaders.get("x-invoke-path") ?? "/dashboard";
        redirect(`/login?redirect=${encodeURIComponent(path)}`);
    }

    return <>{children}</>;
}
