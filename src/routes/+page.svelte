<script lang="ts">
	import ContactForm from '../components/contactForm.svelte';
	import QualityCard from '../components/qualityCard.svelte';
	import Seo from '../components/seo.svelte';
	import cardsData from '$lib/data/cards.json';
	import { scrollAnimation } from '$lib/actions/scrollAnimation';

	import card1 from '$lib/images/cards/card1.jpg?enhanced';
	import card2 from '$lib/images/cards/card2.jpg?enhanced';
	import card3 from '$lib/images/cards/card3.jpeg?enhanced';
	import card4 from '$lib/images/cards/card4.jpeg?enhanced';
	import card5 from '$lib/images/cards/card5.jpeg?enhanced';
	import card6 from '$lib/images/cards/card6.jpeg?enhanced';

	import { onMount } from 'svelte';
	import type { CardData } from '$lib/types';

	const cards = cardsData as CardData[];

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://widget.trustmary.com/fiObpUIut';
		script.async = true;
		const container = document.getElementById('trustmary-container');
		container?.appendChild(script);
	});

	const imageMap: Record<CardData['image'], any> = {
		'card1.jpg': card1,
		'card2.jpg': card2,
		'card3.jpeg': card3,
		'card4.jpeg': card4,
		'card5.jpeg': card5,
		'card6.jpeg': card6
	};
</script>

<!-- Hero -->
<section use:scrollAnimation class="relative py-16 sm:py-20 md:py-40 lg:py-52">
	<div class="absolute inset-0 -z-10">
		<enhanced:img
			src="/src/lib/images/home.jpeg?enhanced"
			alt="Pozadinska slika"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-black opacity-50"></div>
	</div>

	<div class="mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 md:flex-row lg:px-8">
		<div class="mb-8 text-center text-white md:mr-8 md:mb-0 md:text-left">
			<h1 class="mb-4 text-3xl font-bold md:text-5xl">
				Krojimo po vašoj mjeri, jer svaki detalj pravi razliku
			</h1>
			<p class="mb-6 text-2xl">
				U središtu Pule, naš krojački obrt njeguje tradiciju preciznosti, kvalitete i osobnog
				pristupa. Svaki šav govori priču o pažnji, posvećenosti i vještini.
			</p>
			<a
				href="/contact"
				class="inline-block rounded bg-[#D21F1B] px-6 py-3 text-white hover:bg-black"
			>
				Javite nam se
			</a>
		</div>
	</div>
</section>

<!-- Shapo Widget -->
<section use:scrollAnimation class="bg-gray-50">
	<div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
		<div id="shapo-widget-2de7e86a7a807cb78214"></div>
		<script
			id="shapo-embed-js"
			type="text/javascript"
			src="https://cdn.shapo.io/js/embed.js"
			defer
		></script>
	</div>
</section>

<!-- Vision Section -->
<section use:scrollAnimation class="relative bg-cover bg-center py-16 sm:py-20 md:py-24">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 sm:px-4 md:flex-row md:px-20"
	>
		<div class="space-y-4 md:w-1/2">
			<h2 class="text-2xl font-bold text-[#D21F1B]">Vaša vizija. Naša izrada.</h2>
			<h3 class="text-xl font-bold">Krojenje koje se prilagođava Vama</h3>
			<p class="text-lg text-[#424242]">
				Tražite savršeno pristajanje? Od prepravki koje vraćaju život Vašoj omiljenoj odjeći, do
				dizajna koji reflektira Vaš jedinstveni stil — ovdje smo da stvorimo komade koji vas
				predstavljaju. U našem ateljeu spajamo tradicionalne tehnike s modernim željama, kako bismo
				svakom klijentu pružili osjećaj posebnosti i elegancije.
			</p>
			<a href="/contact" class="text-lg text-[#424242] underline hover:font-bold">
				Podijelite svoju ideju s nama
			</a>
		</div>
		<div class="mt-8 md:mt-0 md:w-1/2">
			<enhanced:img
				src="../lib/images/craft.jpg"
				alt="krojačka radionica"
				class="w-full rounded-2xl object-cover"
			/>
		</div>
	</div>
</section>

<section use:scrollAnimation class="bg-gray-50 px-2 py-16 sm:px-4 md:px-20 lg:px-30">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-2xl font-bold md:text-3xl">Detalji koji čine razliku</h2>
		<div
			class="flex gap-8 overflow-x-auto md:grid md:grid-cols-2 md:grid-rows-3 md:overflow-x-visible lg:grid-cols-3 lg:grid-rows-2"
		>
			{#each cards as card}
				<QualityCard src={imageMap[card.image]} title={card.title} text={card.text} />
			{/each}
		</div>
	</div>
</section>

<ContactForm />

<Seo
	title="Početna"
	description="Otkrijte krojački obrt u Puli koji njeguje vrhunsku izradu, osobni pristup i savršeno pristajanje. Od šivanja po mjeri do prepravki, svaki komad nosi Vaš potpis · Teslina ulica 18, 52100 Pula · xxlkrojackiobrt@gmail.hr · +385 99 201 1971."
/>
