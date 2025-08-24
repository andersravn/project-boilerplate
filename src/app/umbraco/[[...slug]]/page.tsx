import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getContentFromSlug } from "@/services/content-api";
import type {
    ContentPagePropertiesModel,
    IApiContentRouteModel,
} from "@/types/umbraco/types.gen";
import componentResolver from "@/umbraco/lib/component-resolver";

type PageParams = {
    params: Promise<{ locale: string; slug?: string[] }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

async function fetchData(slug: string[], locale: string) {
    return await getContentFromSlug(slug, locale);
}
// Generate Metadata dynamically based on page content and type
export async function generateMetadata(
    pageParams: PageParams,
    _parent: ResolvingMetadata,
): Promise<Metadata> {
    const { slug = [], locale } = await pageParams.params;
    const data = await fetchData(slug, locale);

    if (!data) {
        return { title: "Page not found" };
    }

    // Type assertion to work around the intersection type issue
    const contentData = data as {
        contentType: string;
        properties: Record<string, unknown>;
    };

    const properties = contentData.properties as ContentPagePropertiesModel;
    return {
        title: properties.title || "Untitled Page",
        description: properties.description || "No description available",
    };
}

export default async function SlugPage(pageParams: PageParams) {
    const { slug = [], locale } = await pageParams.params;

    const data = await getContentFromSlug(slug, locale);

    if (!data) {
        notFound();
    }

    // Type assertion to work around the intersection type issue
    const contentData = data as {
        contentType: string;
        properties: Record<string, unknown>;
        route?: IApiContentRouteModel;
    };
    return componentResolver(
        contentData.contentType,
        contentData.properties,
        contentData.route,
    );
}
