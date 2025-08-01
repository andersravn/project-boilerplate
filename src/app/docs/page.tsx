import { notFound } from 'next/navigation';

export default function DocsPage() {
    if (process.env.NODE_ENV !== 'development') {
        notFound();
    }

    return (
        <main>
            <h1>Docs Page</h1>
            <p>This page is only available in development mode.</p>
        </main>
    );
}