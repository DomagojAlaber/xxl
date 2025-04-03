<script lang="ts">
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import { fly } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	// Define props using Svelte 5's $props rune
	// 'data' comes from the load function
	// 'children' represents the page content (<slot /> equivalent)
	let { data, children } = $props<{
		data: { currentPath: string };
		children: Snippet;
	}>();
</script>

<Header />

{#key data.currentPath}
	<div in:fly={{ y: -30, duration: 200, delay: 150 }} out:fly={{ y: -30, duration: 150 }}>
		{@render children()}
	</div>
{/key}

<Footer />
