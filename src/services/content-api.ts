import { createClient } from "@/types/umbraco/client";
import { getContentItemByPath20 } from "@/types/umbraco/sdk.gen";
import type { IApiContentResponseModel } from "@/types/umbraco/types.gen";

// Create a client instance
const client = createClient({
    baseUrl: process.env.UMBRACO_API,
});

export async function getContentFromSlug(
    slug: string[],
    locale: string = "en-US",
): Promise<IApiContentResponseModel | null> {
    try {
        // Join the slug array to create the path
        const path = slug.length > 0 ? `/${slug.join("/")}` : "/";

        // Make the API call to get content by path
        const response = await getContentItemByPath20({
            client,
            path: {
                path: path,
            },
            headers: {
                "Accept-Language": locale,
            },
            query: {
                expand: "all",
                fields: "properties[$all]",
            },
        });

        if (response.data) {
            return response.data as IApiContentResponseModel;
        }

        return null;
    } catch (error) {
        console.error("Error fetching content:", error);
        return null;
    }
}
