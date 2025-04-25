<script lang="ts">
	import { page } from '$app/stores';
	import { base, assets } from '$app/paths';
	import { dev } from '$app/environment';
  
	// Props you can override in each page's <Seo …/>
	export let title: string = 'XXL krojački obrt Pula';
	export let description: string = 'Vaš pouzdani krojački obrt u Hrvatskoj.';
	export let image: string = `${assets}/sewing-machine.png`;
	export let type: 'website' | 'article' = 'website';
	export let locale: string = 'hr_HR';
	export let alternates: { hrefLang: string; href: string }[] = [];
  
	// Derive canonical URL
	const siteOrigin = dev
	  ? 'http://localhost:5173'
	  : 'https://www.xxlkrojackiobrt.com';
	$: path = $page.url.pathname;
	$: canonical = siteOrigin + path;
  
	// Ensure full‑URL for image
	$: imageUrl = image.startsWith('http') ? image : siteOrigin + image;
  
	// Build JSON‑LD
	const jsonLd = {
	  '@context': 'https://schema.org',
	  '@type': type === 'article' ? 'Article' : 'WebSite',
	  url: canonical,
	  name: title,
	  description,
	  ...(type === 'website'
		? {
			publisher: {
			  '@type': 'Organization',
			  name: 'XXL krojački obrt',
			  logo: {
				'@type': 'ImageObject',
				url: imageUrl
			  }
			}
		  }
		: {
			image: imageUrl,
			author: {
			  '@type': 'Organization',
			  name: 'XXL krojački obrt'
			}
		  })
	};
  </script>
  
  <svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title} | XXL krojački obrt</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
  
	<!-- Open Graph / Facebook -->
	<meta property="og:site_name" content="XXL krojački obrt" />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:locale" content={locale} />
	{#each alternates as { hrefLang }}
	  <meta property="og:locale:alternate" content={hrefLang} />
	{/each}
  
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@YourTwitterHandle" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
  
	<!-- hreflang for International SEO -->
	{#each alternates as { hrefLang, href }}
	  <link rel="alternate" hreflang={hrefLang} href={href} />
	{/each}
  
	<!-- JSON-LD structured data -->
	<script type="application/ld+json">
	  {JSON.stringify(jsonLd)}
	</script>
  </svelte:head>
  
