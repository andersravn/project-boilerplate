import { notFound } from 'next/navigation';
import Link from 'next/link';
import '../globals.css';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    if (process.env.NODE_ENV !== 'development') {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <div className="flex min-h-screen">
                {/* Sidebar Navigation */}
                <aside className="w-64 border-r bg-muted/20 p-6">
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold">CMS Docs</h2>
                        <p className="text-sm text-muted-foreground">Component library & guides</p>
                    </div>
                    
                    <nav className="space-y-6">
                        <div>
                            <h3 className="font-medium text-sm mb-2">Getting Started</h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs/getting-started" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Quick Start
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-medium text-sm mb-2">Components</h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <Link href="/docs/components" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs/components/setup" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Setup
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs/components/button" className="text-muted-foreground hover:text-foreground transition-colors">
                                        • Button
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs/components/accordion" className="text-muted-foreground hover:text-foreground transition-colors">
                                        • Accordion
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-medium text-sm mb-2">Checklists</h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <Link href="/docs/checklist" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs/checklist/accessibility" className="text-muted-foreground hover:text-foreground transition-colors">
                                        • Accessibility
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs/checklist/performance" className="text-muted-foreground hover:text-foreground transition-colors">
                                        • Performance
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs/checklist/optimization" className="text-muted-foreground hover:text-foreground transition-colors">
                                        • Optimization
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs/checklist/structured-data" className="text-muted-foreground hover:text-foreground transition-colors">
                                        • Structured Data
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-medium text-sm mb-2">Integration</h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <Link href="/docs/requirements" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Requirements
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/docs/cms" className="text-muted-foreground hover:text-foreground transition-colors">
                                        CMS Setup
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    
                    <div className="mt-8 pt-8 border-t">
                        <p className="text-xs text-muted-foreground">
                            Development mode only
                        </p>
                    </div>
                </aside>
                
                {/* Main Content */}
                <main className="flex-1">
                    <div className="container mx-auto px-8 py-8 max-w-4xl">
                        <div className="max-w-none docs-content">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}