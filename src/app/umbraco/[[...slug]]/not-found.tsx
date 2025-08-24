import Link from "next/link";
import { Main } from "@/components/layout/main";
import { ContentBlock } from "@/components/content-blocks/content-block";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
    const t = await getTranslations("NotFound");
    return (
        <Main>
            <ContentBlock
                background={{ label: "Dark green", value: "#02403D" }}
            >
                <div className="flex flex-col items-center justify-center gap-8 pt-16 text-center">
                    <hgroup className="text-accent">
                        <h1 className="h1">404</h1>
                        <p>{t("message")}</p>
                    </hgroup>

                    <Link
                        href={"/"}
                        className={cn(
                            buttonVariants({
                                variant: "secondary",
                                size: "lg",
                            }),
                        )}
                    >
                        {t("goToFrontPageButton")}
                    </Link>
                </div>
            </ContentBlock>
        </Main>
    );
}
