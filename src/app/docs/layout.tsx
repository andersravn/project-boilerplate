import Link from "next/link";
import { notFound } from "next/navigation";
import "../globals.css";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    if (process.env.NODE_ENV !== "development") {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <div className="flex min-h-screen">
                {/* Sidebar Navigation */}
                <aside className="w-64 border-r bg-muted/20 p-6">
                    <div className="mb-8">
                        <h2 className="font-semibold text-lg">CMS Docs</h2>
                        <p className="text-muted-foreground text-sm">
                            Component library & guides
                        </p>
                    </div>

                    <nav className="space-y-6">
                        <div>
                            <h3 className="mb-2 font-medium text-sm">
                                Getting Started
                            </h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <Link
                                        href="/docs"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/getting-started"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Quick Start
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-2 font-medium text-sm">
                                Components
                            </h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <Link
                                        href="/docs/components"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/components/setup"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Setup
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/components/button"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        • Button
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/components/accordion"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        • Accordion
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-2 font-medium text-sm">
                                Checklists
                            </h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <Link
                                        href="/docs/checklist"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/checklist/accessibility"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        • Accessibility
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/checklist/performance"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        • Performance
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/checklist/optimization"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        • Optimization
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/checklist/structured-data"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        • Structured Data
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-2 font-medium text-sm">
                                Integration
                            </h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <Link
                                        href="/docs/requirements"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        Requirements
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/integration"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        CMS Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/integration/uniform"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        • Uniform
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs/integration/umbraco"
                                        className="text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        • Umbraco
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="mt-8 border-t pt-8">
                        <p className="text-muted-foreground text-xs">
                            Development mode only
                        </p>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    <div className="container mx-auto max-w-4xl px-8 py-8">
                        <div className="docs-content max-w-none">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
