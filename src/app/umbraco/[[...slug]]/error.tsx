"use client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

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
            <h1>{t('ErrorPage.title')}</h1>
            <Button type="button" onClick={reset}>
                {t('ErrorPage.tryAgain')}
            </Button>
        </div>
    );
}
