import { NextResponse } from "next/server";

export async function GET() {
	try {
		// const xml = await getSitemapByLang();

		const response = await fetch(
			`${process.env.UMBRACO_API}/umbraco/delivery/api/v1/sitemap`,
			{
				next: {
					revalidate: 60 * 60 * 24, // 24 hours
				},
			},
		);
		const xml = await response.text();

		return new NextResponse(xml, {
			status: 200,
			headers: {
				"Content-Type": "application/xml",
			},
		});
	} catch (err) {
		console.error("Error generating sitemap:", err);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
