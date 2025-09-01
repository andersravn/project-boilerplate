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
