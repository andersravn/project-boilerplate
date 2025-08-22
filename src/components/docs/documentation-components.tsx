"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Button from "@/components/ui/button";

interface CodeBlockProps {
	children: string;
	language?: string;
	filename?: string;
}

export function CodeBlock({
	children,
	language = "tsx",
	filename,
}: CodeBlockProps) {
	const [copied, setCopied] = React.useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(children);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="group relative mb-6">
			{filename && (
				<div className="border-b bg-muted px-4 py-2 font-mono text-sm">
					{filename}
				</div>
			)}
			<div className="relative">
				<SyntaxHighlighter
					language={language}
					style={oneDark}
					customStyle={{
						margin: 0,
						borderRadius: filename ? "0 0 8px 8px" : "8px",
						fontSize: "14px",
					}}
				>
					{children.trim()}
				</SyntaxHighlighter>
				<Button
					variant="ghost"
					size="sm"
					className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100"
					onClick={handleCopy}
				>
					{copied ? "Copied!" : "Copy"}
				</Button>
			</div>
		</div>
	);
}

interface ComponentPreviewProps {
	children: React.ReactNode;
	className?: string;
}

export function ComponentPreview({
	children,
	className = "",
}: ComponentPreviewProps) {
	return (
		<div className={`mb-6 rounded-lg border bg-background p-6 ${className}`}>
			<div className="flex min-h-[100px] items-center justify-center">
				{children}
			</div>
		</div>
	);
}

interface InstallCommandProps {
	command: string;
	dependencies?: string[];
}

export function InstallCommand({
	command,
	dependencies = [],
}: InstallCommandProps) {
	return (
		<div className="mb-6">
			<h3 className="mb-3 font-semibold text-lg">Installation</h3>

			{dependencies.length > 0 && (
				<>
					<p className="mb-2 text-muted-foreground text-sm">
						Install the required dependencies:
					</p>
					<CodeBlock language="bash">
						{`npm install ${dependencies.join(" ")}`}
					</CodeBlock>
				</>
			)}

			<p className="mb-2 text-muted-foreground text-sm">
				Copy and paste the following code into your project:
			</p>
			<CodeBlock language="bash">{command}</CodeBlock>
		</div>
	);
}

interface PropsTableProps {
	props: Array<{
		name: string;
		type: string;
		default?: string;
		description: string;
	}>;
}

export function PropsTable({ props }: PropsTableProps) {
	return (
		<div className="mb-6">
			<h3 className="mb-3 font-semibold text-lg">Props</h3>
			<div className="overflow-x-auto">
				<table className="w-full border-collapse border">
					<thead>
						<tr className="bg-muted">
							<th className="border p-2 text-left">Prop</th>
							<th className="border p-2 text-left">Type</th>
							<th className="border p-2 text-left">Default</th>
							<th className="border p-2 text-left">Description</th>
						</tr>
					</thead>
					<tbody>
						{props.map((prop, index) => (
							<tr key={index}>
								<td className="border p-2 font-mono text-sm">{prop.name}</td>
								<td className="border p-2 font-mono text-sm">{prop.type}</td>
								<td className="border p-2 font-mono text-sm">
									{prop.default || "-"}
								</td>
								<td className="border p-2 text-sm">{prop.description}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
