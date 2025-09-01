import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type MainProps = {
    background?: boolean;
    className?: string;
};

export const Main: React.FC<PropsWithChildren<MainProps>> = ({
    background = false,
    className,
    children,
}) => {
    return (
        <main
            className={cn(
                background
                    ? "bg-white py-4 md:py-6 lg:py-10"
                    : "my-4 md:my-6 lg:my-10",
                className,
            )}
        >
            {children}
        </main>
    );
};
