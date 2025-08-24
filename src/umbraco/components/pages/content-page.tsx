import type {
    ContentPagePropertiesModel,
    IApiContentRouteModel,
} from "@/types/umbraco/types.gen";
import componentResolver from "@/umbraco/lib/component-resolver";

interface ContentPageProps {
    data: ContentPagePropertiesModel;
    route?: IApiContentRouteModel;
}

export function ContentPage({ data, route }: ContentPageProps) {
    return (
        <div className="content-page">
            {/* Page Title */}
            {data.title && (
                <header className="mb-8">
                    <h1 className="font-bold text-4xl text-gray-900">
                        {data.title}
                    </h1>
                    {data.description && (
                        <p className="mt-4 text-gray-600 text-xl">
                            {data.description}
                        </p>
                    )}
                </header>
            )}

            {/* Render blocks */}
            {data.blocks?.items && data.blocks.items.length > 0 && (
                <div className="blocks-container">
                    {data.blocks.items.map((block, index) => (
                        <div
                            key={`${block.content.contentType}-${index}`}
                            className="mb-8 block"
                        >
                            {componentResolver(
                                block.content.contentType,
                                block.content.properties,
                                route,
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
