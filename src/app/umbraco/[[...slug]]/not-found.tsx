import { Main } from "@/components/layout/main";

export default async function NotFound() {
    return (
        <Main>
            <div className="flex flex-col items-center justify-center gap-8 pt-16 text-center">
                <hgroup className="text-accent">
                    <h1 className="h1">404</h1>
                </hgroup>
            </div>
        </Main>
    );
}
