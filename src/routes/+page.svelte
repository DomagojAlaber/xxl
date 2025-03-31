<script lang="ts">
	import ContactForm from '../components/contactForm.svelte';
	import QualityCard from '../components/qualityCard.svelte';
	import cardsData from '$lib/data/cards.json';
	
	import card1 from '../lib/images/cards/card1.jpg?enhanced'
	const card2 = '../lib/images/cards/card1.jpg?enhanced'
	import { onMount } from 'svelte';
	import type { CardData } from '$lib/types';

	const cards = cardsData as CardData[];

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
	class="relative px-4 py-16 sm:h-80 sm:px-6 sm:py-20 md:h-96 md:px-20 md:py-40 lg:h-[650px] lg:py-50"
>
	<div class="absolute inset-0 -z-10">
		<enhanced:img
			src="/src/lib/images/home.jpeg?enhanced"
			alt="Pozadinska slika"
			class="h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-black opacity-50"></div>
	</div>

	<div class="relative mx-auto flex max-w-6xl flex-col items-center justify-center md:flex-row">
		<div class="mb-8 text-white md:mr-8 md:mb-0 md:w-1/2">
			<h1 class="mb-4 text-3xl font-bold md:text-5xl">
				Krojimo po vašoj mjeri, jer svaki detalj pravi razliku
			</h1>
			<p class="mb-6 text-2xl">
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

<section class="relative bg-cover bg-center px-2 pb-15 sm:px-4 md:px-20 lg:px-110">
	<div class="flex flex-col items-center justify-between md:flex-row">
		<div class="flex flex-col items-start justify-center px-2 md:w-1/2">
			<div class="py-2 text-2xl font-bold text-[#D21F1B] md:text-2xl">Vaše krojačko rješenje</div>
			<div class="py-2 text-xl font-bold">Odjeća koja Vam pristaje i priča Vašu priču</div>
			<div class="py-2 text-lg text-[#424242]">
				Imate odjeću koja Vam ne pristaje savršeno? Trebate li osvježiti dragi komad ili želite
				jedinstvenu kreaciju po Vašoj zamisli? Ovdje u Puli spajamo vještinu i Vaše želje. Bilo da
				se radi o finim prepravkama koje čine čuda ili o šivanju nove haljine, suknje ili hlača baš
				po Vašoj mjeri, posvećeni smo tome da se u svojoj odjeći osjećate izvrsno i samopouzdano.
				Vaš stil i udobnost su naš prioritet. Javite nam se i pretvorimo Vaše ideje u stvarnost.
			</div>
			<a href="/contact" class="text-lg text-[#424242] underline hover:font-bold"
				>Donesite nam Vašu ideju</a
			>
		</div>
		<div class="px-2 py-2 md:w-1/2">
			<enhanced:img
				src="../lib/images/craft.jpg"
				alt="craft_picture"
				class="h-70 w-dvh rounded-2xl sm:h-80 md:h-95 lg:h-140"
			/>
		</div>
	</div>
</section>

<section class="bg-gray-50 px-2 py-16 sm:px-4 md:px-20 lg:px-110">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-2xl font-bold md:text-3xl">
			Kvaliteta i vrijednosti u službi Vašeg stila
		</h2>
		<div
			class="flex gap-8 overflow-x-auto md:grid md:grid-cols-3 md:grid-rows-2 md:overflow-x-visible"
		>
			{#each cards as card}
				<QualityCard src={card.image} title={card.title} text={card.text} />
			{/each}
		</div>
	</div>
</section>

<ContactForm />
