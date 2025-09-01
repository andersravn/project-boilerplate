"use client";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/button";

// Error boundaries must be Client Components

export default function PageError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const t = useTranslations();

    return (
        <div className="container flex flex-col items-center gap-8 p-10">
            <h1>{t("ErrorPage.title")}</h1>
            <Button type="button" onClick={reset}>
                {t("ErrorPage.tryAgain")}
            </Button>
        </div>
    );
}
