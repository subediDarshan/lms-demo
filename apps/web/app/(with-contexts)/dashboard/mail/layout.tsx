import { Metadata, ResolvingMetadata } from "next";
import { EDIT_EMAIL } from "@ui-config/strings";

export async function generateMetadata(
    _props: unknown,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    return {
        title: `${EDIT_EMAIL} | ${(await parent)?.title?.absolute}`,
    };
}

export default function EmailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
