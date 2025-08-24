/**
 * Example component showing how to render Umbraco content with type safety
 * This demonstrates the patterns for creating CMS-agnostic components
 */

// This would be available after running npm run generate-types
// import type { ContentResponseModel } from '@/types/umbraco';
import { getContentType, getPropertyValue } from "@/lib/umbraco";

// For now, using a generic type until types are generated
type UmbracoContent = {
    id: string;
    name: string;
    contentType: string;
    properties: Record<string, { value: any }>;
};

interface ContentRendererProps {
    content: UmbracoContent;
}

export function ContentRenderer({ content }: ContentRendererProps) {
    const contentType = getContentType(content);

    switch (contentType) {
        case "homePage":
            return <HomePage content={content} />;
        case "contentPage":
            return <ContentPage content={content} />;
        case "blogPost":
            return <BlogPost content={content} />;
        default:
            return (
                <div className="rounded border bg-yellow-50 p-4">
                    <p>Unknown content type: {contentType}</p>
                    <p>Content: {content.name}</p>
                </div>
            );
    }
}

function HomePage({ content }: { content: UmbracoContent }) {
    const title = getPropertyValue<string>(content, "title");
    const subtitle = getPropertyValue<string>(content, "subtitle");
    const heroImage = getPropertyValue<string>(content, "heroImage");

    return (
        <div className="min-h-screen">
            {heroImage && (
                <div
                    className="h-96 bg-center bg-cover"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
            )}
            <div className="container mx-auto px-4 py-16">
                <h1 className="mb-4 font-bold text-4xl">
                    {title || content.name}
                </h1>
                {subtitle && (
                    <p className="text-muted-foreground text-xl">{subtitle}</p>
                )}
            </div>
        </div>
    );
}

function ContentPage({ content }: { content: UmbracoContent }) {
    const title = getPropertyValue<string>(content, "title");
    const bodyText = getPropertyValue<string>(content, "bodyText");

    return (
        <div className="container mx-auto max-w-4xl px-4 py-16">
            <h1 className="mb-8 font-bold text-4xl">{title || content.name}</h1>
            {bodyText && (
                <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: bodyText }}
                />
            )}
        </div>
    );
}

function BlogPost({ content }: { content: UmbracoContent }) {
    const title = getPropertyValue<string>(content, "title");
    const excerpt = getPropertyValue<string>(content, "excerpt");
    const content_body = getPropertyValue<string>(content, "content");
    const publishDate = getPropertyValue<string>(content, "publishDate");

    return (
        <article className="container mx-auto max-w-4xl px-4 py-16">
            <header className="mb-8">
                <h1 className="mb-4 font-bold text-4xl">
                    {title || content.name}
                </h1>
                {publishDate && (
                    <time className="text-muted-foreground">
                        {new Date(publishDate).toLocaleDateString()}
                    </time>
                )}
                {excerpt && (
                    <p className="mt-4 text-muted-foreground text-xl">
                        {excerpt}
                    </p>
                )}
            </header>
            {content_body && (
                <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: content_body }}
                />
            )}
        </article>
    );
}
