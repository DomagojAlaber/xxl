<script>
    import { page } from '$app/state';
    import logo from '$lib/images/sewing-machine.png?url';

    export let title = '';
    export let description = '';
    export let image = logo;
</script>

<svelte:head>
	<title>{title} | XXL krojački obrt</title>
	<meta name="description" content={description} />
	<meta property="og_site_name" content="xxlkrojackiobrt.com”" />
	<meta property="og:url" content="https://www.xxlkrojackiobrt.com{page.url.pathname.toString()}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="“xxlkrojackiobrt.com" />
	<meta property="twitter:url" content="https://www.xxlkrojackiobrt.com{page.url.pathname.toString()}" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image}>
	{@html `  <script type="application/ld+json">{
     "@context": "https://schema.org",
     "@type": "Website",
     "name": "${title} | xxlkrojackiobrt.com",
     "url": "https//www.xxlkrojackiobrt.com${page.url.pathname}"",
     "logo": ${image}  }</script>`}
</svelte:head>
