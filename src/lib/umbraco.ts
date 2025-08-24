/**
 * Utility functions for working with Umbraco content
 * This file demonstrates how to use the auto-generated types
 */

import { client } from "@/types/umbraco";

// Configure the client with environment variables
export function configureUmbracoClient() {
    client.setConfig({
        baseUrl: process.env.UMBRACO_API || process.env.NEXT_PUBLIC_UMBRACO_API,
    });
}

/**
 * Fetch content by ID
 */
export async function getContentById(id: string) {
    configureUmbracoClient();

    const { data, error } = await client.GET(
        "/umbraco/delivery/api/v1/content/item/{id}",
        {
            params: {
                path: { id },
            },
        },
    );

    if (error) {
        console.error("Failed to fetch content:", error);
        return null;
    }

    return data;
}

/**
 * Fetch content by path
 */
export async function getContentByPath(path: string) {
    configureUmbracoClient();

    const { data, error } = await client.GET(
        "/umbraco/delivery/api/v1/content",
        {
            params: {
                query: { fetch: path },
            },
        },
    );

    if (error) {
        console.error("Failed to fetch content:", error);
        return null;
    }

    return data;
}

/**
 * Fetch children of a content item
 */
export async function getContentChildren(id: string) {
    configureUmbracoClient();

    const { data, error } = await client.GET(
        "/umbraco/delivery/api/v1/content/item/{id}/children",
        {
            params: {
                path: { id },
            },
        },
    );

    if (error) {
        console.error("Failed to fetch children:", error);
        return null;
    }

    return data;
}

/**
 * Fetch media by ID
 */
export async function getMediaById(id: string) {
    configureUmbracoClient();

    const { data, error } = await client.GET(
        "/umbraco/delivery/api/v1/media/item/{id}",
        {
            params: {
                path: { id },
            },
        },
    );

    if (error) {
        console.error("Failed to fetch media:", error);
        return null;
    }

    return data;
}

/**
 * Helper function to extract property value from Umbraco content
 */
export function getPropertyValue<T = any>(
    content: any,
    propertyAlias: string,
): T | null {
    const property = content?.properties?.[propertyAlias];
    return property?.value || null;
}

/**
 * Helper function to check if content has a specific property
 */
export function hasProperty(content: any, propertyAlias: string): boolean {
    return Boolean(content?.properties?.[propertyAlias]);
}

/**
 * Get the content type alias
 */
export function getContentType(content: any): string | null {
    return content?.contentType || null;
}
