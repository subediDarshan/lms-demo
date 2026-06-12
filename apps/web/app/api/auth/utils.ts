import { getBackendAddress } from "@/app/actions";

export const rewriteAuthRequestOrigin = async (req: Request) => {
    const publicOrigin = await getBackendAddress(req.headers);
    const currentUrl = new URL(req.url);

    if (currentUrl.origin === publicOrigin) {
        return req;
    }

    const rewrittenUrl = new URL(
        `${currentUrl.pathname}${currentUrl.search}`,
        publicOrigin,
    );

    return new Request(rewrittenUrl, req);
};
