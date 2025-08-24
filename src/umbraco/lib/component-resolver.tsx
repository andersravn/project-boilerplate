import type {
    ContentPagePropertiesModel,
    HeroPropertiesModel,
    IApiContentRouteModel,
} from "@/types/umbraco";
import { HeroBlock } from "@/umbraco/components/blocks/hero-block";
import { ContentPage } from "@/umbraco/components/pages/content-page";

export default function componentResolver(
    contentType: string,
    properties: Record<string, unknown>,
    route?: IApiContentRouteModel,
) {
    switch (contentType) {
        case "contentPage":
            return (
                <ContentPage
                    data={properties as ContentPagePropertiesModel}
                    route={route}
                />
            );

        //Components
        case "hero":
            return <HeroBlock properties={properties as HeroPropertiesModel} />;

        default:
            return (
                <div className="container mx-auto p-4">
                    <div className="my-4 rounded-md bg-red-100 p-4 shadow-md">
                        <h2 className="font-bold text-red-800">
                            Component not found: {contentType}
                        </h2>
                        <pre className="mt-2 text-red-600 text-sm">
                            {JSON.stringify(properties, null, 2)}
                        </pre>
                    </div>
                </div>
            );
    }
}
