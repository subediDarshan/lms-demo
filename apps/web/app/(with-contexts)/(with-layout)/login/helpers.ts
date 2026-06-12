import { FetchBuilder } from "@courselit/utils";
import { error } from "@/services/logger";
import type { RuntimeLoginProvider } from "@/lib/login-providers";

export const getExternalLoginProviders = async (
    backend: string,
): Promise<RuntimeLoginProvider[]> => {
    const query = `
        query {
            loginProviders: getExternalLoginProviders {
                key
                providerId
                label
                buttonText
                authType
            }
        }
        `;
    const fetch = new FetchBuilder()
        .setUrl(`${backend}/api/graph`)
        .setPayload({ query })
        .setIsGraphQLEndpoint(true)
        .build();

    try {
        const response = await fetch.exec();
        return response.loginProviders || [];
    } catch (e: any) {
        error(`Error in fetching login providers`, {
            stack: e.stack,
        });
        return [];
    }
};
