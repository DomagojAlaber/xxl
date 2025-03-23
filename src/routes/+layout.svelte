<script lang="ts">
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	let { children } = $props();
</script>

<Header/>

{@render children()}

<Footer/>