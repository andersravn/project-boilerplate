/**
 * Determines if a given link is an external URL.
 *
 * @param {string} href - The URL or link to evaluate.
 * @returns {boolean} - True if the link starts with "http", indicating it is an external link; otherwise, false.
 */
export const isExternalLink = (href?: string): boolean =>
	href?.startsWith("http") ?? false;
