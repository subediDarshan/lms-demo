import type { Metadata, ResolvingMetadata } from "next";
import { ReactNode } from "react";
import { MANAGE_COURSES_PAGE_HEADING } from "@ui-config/strings";

export async function generateMetadata(
    _props: unknown,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    return {
        title: `${MANAGE_COURSES_PAGE_HEADING} | ${(await parent)?.title?.absolute}`,
    };
}

export default function Layout({ children }: { children: ReactNode }) {
    return children;
}
