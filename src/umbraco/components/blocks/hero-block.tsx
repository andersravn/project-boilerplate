import Image from "next/image";
import { SpacingDemo } from "@/components/spacing-demo";
import type { HeroPropertiesModel } from "@/types/umbraco/types.gen";

interface HeroBlockProps {
    properties: HeroPropertiesModel;
}

export function HeroBlock({ properties }: HeroBlockProps) {
    return (
        <section className="hero-block bg-surface-default py-20 text-text-default">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Hero Image */}
                    {properties.image && properties.image.length > 0 && (
                        <div className="mb-8">
                            <Image
                                src={properties.image[0].url}
                                alt={
                                    properties.image[0].name ||
                                    properties.heading ||
                                    "Hero image"
                                }
                                width={800}
                                height={400}
                                className="mx-auto h-64 w-full rounded-lg object-cover shadow-lg"
                                priority
                            />
                        </div>
                    )}

                    {/* Hero Heading */}
                    {properties.heading && (
                        <h1 className="mb-6 font-bold text-5xl text-text-default leading-tight">
                            {properties.heading}
                        </h1>
                    )}

                    {/* Hero Subtitle */}
                    {properties.subtitle && (
                        <p className="mb-8 text-text-subtle-2 text-xl leading-relaxed">
                            {properties.subtitle}
                        </p>
                    )}

                    <button
                        className="rounded-round border px-m py-s text-[17.24px]"
                        type="button"
                    >
                        Hej
                    </button>
                </div>
                <SpacingDemo />
            </div>
        </section>
    );
}
