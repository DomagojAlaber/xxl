<script lang="ts">
	import ContactForm from '../components/contactForm.svelte';
	import QualityCard from '../components/qualityCard.svelte';
	import cardsData from '$lib/data/cards.json';

	import home from '$lib/images/home.jpeg';
	import craft from '$lib/images/craft.jpg';
	import card1 from '$lib/images/cards/card1.jpg';
	import card2 from '$lib/images/cards/card2.jpg';
	import card3 from '$lib/images/cards/card3.jpeg';
	import card4 from '$lib/images/cards/card4.jpeg';
	import card5 from '$lib/images/cards/card5.jpeg';
	import card6 from '$lib/images/cards/card6.jpeg';

	import { onMount } from 'svelte';
	import type { CardData } from '$lib/types';

	const cards = cardsData as CardData[];

	const imageMap: Record<CardData['image'], string> = {
		'card1.jpg': card1,
		'card2.jpg': card2,
		'card3.jpg': card3,
		'card4.jpg': card4,
		'card5.jpg': card5,
		'card6.jpg': card6
	};

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://widget.trustmary.com/fiObpUIut';
		script.async = true;
		const container = document.getElementById('trustmary-container');
		if (container) {
			container.appendChild(script);
		}
	});
</script>

<section
	class="relative bg-cover bg-center px-4 py-16 sm:h-80 sm:px-6 sm:py-20 md:h-96 md:px-20 md:py-40 lg:h-[650px] lg:py-50 "
	style="background-image: url({home});"
>
	<div class="absolute inset-0 bg-black opacity-50"></div>
	<div class="relative mx-auto flex max-w-6xl flex-col items-center justify-center md:flex-row">
		<div class="mb-8 text-white md:mr-8 md:mb-0 md:w-1/2">
			<h1 class="mb-4 text-3xl font-bold md:text-5xl">
				Krojimo po vašoj mjeri, jer svaki detalj pravi razliku
			</h1>
			<p class="mb-6 text-lg">
				Kvalitetnim šivanjem i pažnjom na detalje, stavljamo pečat ručnog rada na svaki šav.
			</p>
			<a href="/contact" class="rounded bg-[#D21F1B] px-4 py-2.5 text-white hover:bg-black">
				Kontaktirajte nas
			</a>
		</div>
	</div>
</section>

<section class="bg-gray-50">
	<div id="trustmary-container" class="my-8 px-2 sm:px-4 lg:px-100"></div>
</section>

<section class="relative bg-cover bg-center px-2 py-20 sm:px-4 md:px-20 lg:px-110">
	<div class="flex flex-col items-center justify-between md:flex-row">
		<div class="flex flex-col items-start justify-center md:w-1/2 px-2">
			<div class="py-2 font-bold text-[#D21F1B] text-xl md:text-2xl">Vase krojacko rjesenje</div>
			<div class="py-2 font-bold">Vrhunsko majstorstvo u svom najboljem izdanju</div>
			<div class="py-2 text-[#424242] text-lg">
				U XXL krojačkom obrtu ponosimo se pružanjem izvanrednih usluga krojenja u Puli. Naše vješte
				krojačice kombiniraju tradicionalne tehnike s modernim stilovima kako bi stvorili odjeću po
				mjeri koja savršeno pristaje. Bilo da vam trebaju prepravke ili odjevni predmet po mjeri,
				usredotočeni smo na kvalitetu i preciznost u svakom šavu. Vjerujte nam da ćemo unaprijediti
				vaš ormar prilagođenim rješenjima koja odražavaju vašu individualnost i stil.
			</div>
			<a href="/contact" class="text-[#424242] underline hover:font-bold text-lg">Javite se</a>
		</div>
		<div class="px-2 md:w-1/2">
			<img src={craft} alt="craft_picture" class="h-70 w-dvh sm:h-80 md:h-95 lg:h-140 rounded-2xl" />
		</div>
	</div>
</section>

<section class="bg-gray-50 px-2 py-16 sm:px-4 md:px-20 lg:px-110">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-2xl font-bold md:text-3xl">
			Naše kvalitetne usluge i vrijednosti
		</h2>
		<!-- Container that is horizontally scrollable on small screens -->
		<div
			class="flex gap-8 overflow-x-auto md:grid md:grid-cols-3 md:grid-rows-2 md:overflow-x-visible"
		>
			{#each cards as card}
				<!-- Wrap each card in a container that prevents shrinking on small screens -->
				<QualityCard image={imageMap[card.image]} title={card.title} text={card.text} />
			{/each}
		</div>
	</div>
</section>

<ContactForm />
