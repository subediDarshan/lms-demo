import { FetchBuilder } from "@courselit/utils";
import { ProductWithAdminProps } from "@/hooks/use-product";

export const getProduct = async (
    backend: string,
    id: string,
): Promise<ProductWithAdminProps | undefined> => {
    const query = `
        query ($id: String!) {
            course: getCourse(id: $id) {
                title
                description
                type
                slug
                courseId
                featuredImage {
                    file
                    thumbnail
                    caption
                },
                updatedAt
                user {
                    name
                    avatar {
                        file
                        thumbnail
                        caption
                    }
                }
            }
        }
    `;
    const fetch = new FetchBuilder()
        .setUrl(`${backend}/api/graph`)
        .setPayload({ query, variables: { id } })
        .setIsGraphQLEndpoint(true)
        .build();

    try {
        const response = await fetch.exec();
        return response.course;
    } catch (e: any) {
        console.log("Error fetching product", e.message); // eslint-disable-line no-console
    }
};
