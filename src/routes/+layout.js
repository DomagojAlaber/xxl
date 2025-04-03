export const prerender = true;

export const ssr = true;

export const trailingSlash = 'always';

/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
	return {
		currentPath: url.pathname
	};
}
