export function SpacingDemo() {
    return (
        <div className="space-y-8 p-8">
            <h1 className="mb-6 font-bold text-2xl">
                Design System Spacing Demo
            </h1>

            <div className="space-y-6">
                <section>
                    <h2 className="mb-4 font-semibold text-xl">
                        Design System Tokens
                    </h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="rounded bg-blue-100 p-xxs">
                            <div className="rounded bg-blue-200 p-2 text-sm">
                                p-xxs (8px)
                            </div>
                        </div>
                        <div className="rounded bg-green-100 p-xs">
                            <div className="rounded bg-green-200 p-2 text-sm">
                                p-xs (12px)
                            </div>
                        </div>
                        <div className="rounded bg-yellow-100 p-sm">
                            <div className="rounded bg-yellow-200 p-2 text-sm">
                                p-sm (16px)
                            </div>
                        </div>
                        <div className="rounded bg-purple-100 p-m">
                            <div className="rounded bg-purple-200 p-2 text-sm">
                                p-m (20px)
                            </div>
                        </div>
                        <div className="rounded bg-red-100 p-md">
                            <div className="rounded bg-red-200 p-2 text-sm">
                                p-md (24px)
                            </div>
                        </div>
                        <div className="rounded bg-indigo-100 p-lg">
                            <div className="rounded bg-indigo-200 p-2 text-sm">
                                p-lg (32px)
                            </div>
                        </div>
                        <div className="rounded bg-pink-100 p-xl">
                            <div className="rounded bg-pink-200 p-2 text-sm">
                                p-xl (40px)
                            </div>
                        </div>
                        <div className="rounded bg-gray-100 p-xxl">
                            <div className="rounded bg-gray-200 p-2 text-sm">
                                p-xxl (48px)
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 font-semibold text-xl">
                        Tailwind Default Spacing (for comparison)
                    </h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="rounded bg-blue-100 p-2">
                            <div className="rounded bg-blue-200 p-2 text-sm">
                                p-2 (8px)
                            </div>
                        </div>
                        <div className="rounded bg-green-100 p-3">
                            <div className="rounded bg-green-200 p-2 text-sm">
                                p-3 (12px)
                            </div>
                        </div>
                        <div className="rounded bg-yellow-100 p-4">
                            <div className="rounded bg-yellow-200 p-2 text-sm">
                                p-4 (16px)
                            </div>
                        </div>
                        <div className="rounded bg-purple-100 p-5">
                            <div className="rounded bg-purple-200 p-2 text-sm">
                                p-5 (20px)
                            </div>
                        </div>
                        <div className="rounded bg-red-100 p-6">
                            <div className="rounded bg-red-200 p-2 text-sm">
                                p-6 (24px)
                            </div>
                        </div>
                        <div className="rounded bg-indigo-100 p-8">
                            <div className="rounded bg-indigo-200 p-2 text-sm">
                                p-8 (32px)
                            </div>
                        </div>
                        <div className="rounded bg-pink-100 p-10">
                            <div className="rounded bg-pink-200 p-2 text-sm">
                                p-10 (40px)
                            </div>
                        </div>
                        <div className="rounded bg-gray-100 p-12">
                            <div className="rounded bg-gray-200 p-2 text-sm">
                                p-12 (48px)
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 font-semibold text-xl">
                        Mixed Usage Example
                    </h2>
                    <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-lg">
                        <div className="rounded bg-white p-md shadow-sm">
                            <h3 className="mb-sm font-medium text-lg">
                                Card Title
                            </h3>
                            <p className="mb-m text-gray-600">
                                This card uses design system tokens (p-lg, p-md,
                                mb-sm, mb-m) while maintaining Tailwind's
                                default spacing for other elements.
                            </p>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                                >
                                    Button with Tailwind spacing
                                </button>
                                <button
                                    type="button"
                                    className="rounded bg-purple-500 px-md py-sm text-white hover:bg-purple-600"
                                >
                                    Button with design system spacing
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 font-semibold text-xl">
                        All Spacing Variants
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="w-16 text-sm">px-xxs:</span>
                            <div className="rounded bg-blue-100 px-xxs py-2">
                                8px horizontal padding
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-16 text-sm">py-xs:</span>
                            <div className="rounded bg-green-100 px-4 py-xs">
                                12px vertical padding
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-16 text-sm">pt-sm:</span>
                            <div className="rounded bg-yellow-100 px-4 py-2 pt-sm">
                                16px top padding
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-16 text-sm">pb-m:</span>
                            <div className="rounded bg-purple-100 px-4 py-2 pb-m">
                                20px bottom padding
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-16 text-sm">pl-md:</span>
                            <div className="rounded bg-red-100 px-4 py-2 pl-md">
                                24px left padding
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-16 text-sm">pr-lg:</span>
                            <div className="rounded bg-indigo-100 px-4 py-2 pr-lg">
                                32px right padding
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
