import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools'
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), enhancedImages(), imagetools()]
});
