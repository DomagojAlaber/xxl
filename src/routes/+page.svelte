<script>
	import home from '$lib/images/home.jpeg';
	import craft from '$lib/images/craft.jpg';
	import ContactForm from '../components/contactForm.svelte';
	import card1 from '$lib/images/cards/card1.jpg';
	import card2 from '$lib/images/cards/card2.jpg';
	import card3 from '$lib/images/cards/card3.jpeg';
	import card4 from '$lib/images/cards/card4.jpeg';
	import card5 from '$lib/images/cards/card5.jpeg';
	import card6 from '$lib/images/cards/card6.jpeg';
	import { onMount } from 'svelte';

	onMount(() => {
		// Create the script element for the Trustmary widget
		const script = document.createElement('script');
		script.src = 'https://widget.trustmary.com/fiObpUIut';
		script.async = true;
		// Append it to the container with the specified id
		const container = document.getElementById('trustmary-container');
		if (container) {
			container.appendChild(script);
		}
	});
</script>

<section class="relative bg-cover bg-center px-110 py-70" style="background-image: url({home});">
	<div class="absolute inset-0 bg-black opacity-50"></div>
	<div class="relative mx-auto flex max-w-6xl flex-col items-center justify-center md:flex-row">
		<div class="mb-8 text-white md:mr-8 md:mb-0 md:w-1/2">
			<h1 class="mb-4 text-3xl font-bold md:text-5xl">
				Krojimo po vašoj mjeri, jer svaki detalj pravi razliku
			</h1>
			<p class="mb-6">
				Kvalitetnim šivanjem i pažnjom na detalje, stavljamo pečat ručnog rada na svaki šav.
			</p>
			<button class="rounded bg-[#E53935] px-4 py-2 hover:bg-black"> Kontaktirajte nas </button>
		</div>
	</div>
</section>

<section class="relative bg-cover bg-center px-110 py-20">
	<div class="flex flex-col items-center justify-between md:flex-row">
		<div class="flex flex-col items-start justify-center md:w-1/2">
			<div class="py-2 text-[#E53935]">Vase krojacko rjesenje</div>
			<div class="py-2 font-bold">Expert craftsmanship at its finest</div>
			<div class="py-2 text-[#424242]">
				At xxl krojacki obrt, we take pride in delivering exceptional tailoring services in Pula.
				Our skilled tailors blend traditional techniques with modern styles to create custom
				garments that fit perfectly. Whether you need alterations or a bespoke outfit, we focus on
				quality and precision in every stitch. Trust us to enhance your wardrobe with tailored
				solutions that reflect your individuality and style.
			</div>
			<div class="text-[#424242]">Javite se</div>
		</div>
		<div class="md:w-1/2">
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img src={craft} alt="Craft picture" class="h-150 w-full" />
		</div>
	</div>
</section>

<section class="bg-gray-50 px-110 py-16">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-2xl font-bold md:text-3xl">
			Naše kvalitetne usluge i vrijednosti
		</h2>
		<!-- TODO: napraviti sve kartice kako treba -->
		<div class="grid gap-8 md:grid-cols-3 md:grid-rows-2">
			<div class="rounded bg-white p-6 text-center shadow">
				<div class="mb-4 h-50 overflow-hidden">
					<!-- <div class="ico mx-auto h-16 w-16 bg-gray-200"></div> -->
					<img src={card1} alt="persolanizirani dizajn" class="h-full w-full object-cover" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Personalizirani dizajn</h3>
				<p class="text-gray-700">
					Naš krojački salon nudi potpuno prilagođene usluge, stvarajući jedinstvene komade odjeće
					koji savršeno odražavaju vaš osobni stil i tjelesne proporcije.
				</p>
			</div>

			<div class="rounded bg-white p-6 text-center shadow">
				<div class="mb-4 h-50 overflow-hidden">
					<img src={card2} alt="persolanizirani dizajn" class="h-full w-full object-cover" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Vrhunska kvaliteta</h3>
				<p class="text-gray-700">
					Koristeći samo najkvalitetnije materijale i modernu tehnologiju, naši iskusni krojači
					jamče preciznu izradu i dugotrajnu eleganciju svakog komada.
				</p>
			</div>

			<div class="rounded bg-white p-6 text-center shadow">
				<div class="mb-4 h-50 overflow-hidden">
					<img src={card3} alt="persolanizirani dizajn" class="h-full w-full object-cover" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Brza i stručna usluga</h3>
				<p class="text-gray-700">
					Uz profesionalno savjetovanje i brzu izvedbu, naš salon osigurava da ćete uvijek izgledati
					besprijekorno i osjećati se samouvjereno.
				</p>
			</div>

			<div class="rounded bg-white p-6 text-center shadow">
				<div class="mb-4 h-50 overflow-hidden">
					<img src={card4} alt="persolanizirani dizajn" class="h-full w-full object-cover" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Krojenje po mjeri</h3>
				<p class="text-gray-700">
					Naš krojački salon nudi potpuno prilagođene usluge, stvarajući jedinstvene komade odjeće
					koji savršeno odražavaju vaš osobni stil i tjelesne proporcije.
				</p>
			</div>

			<div class="rounded bg-white p-6 text-center shadow">
				<div class="mb-4 h-50 overflow-hidden">
					<img src={card5} alt="persolanizirani dizajn" class="h-full w-full object-cover" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Preinake i popravci</h3>
				<p class="text-gray-700">
					Koristeći samo najkvalitetnije materijale i modernu tehnologiju, naši iskusni krojači
					jamče preciznu izradu i dugotrajnu eleganciju svakog komada.
				</p>
			</div>

			<div class="rounded bg-white p-6 text-center shadow">
				<div class="mb-4 h-50 overflow-hidden">
					<img src={card6} alt="persolanizirani dizajn" class="h-full w-full object-cover" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Efikasnost i pouzdanost</h3>
				<p class="text-gray-700">
					Uz tim iskusnih stručnjaka, vaša narudžba se obrađuje brzo i precizno, osiguravajući da
					svaki detalj bude savršen. Naša predanost kvaliteti i brzini čini nas prvim izborom za
					vaše krojačke potrebe.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="px-110"></section>
<div id="trustmary-container" class="my-8"></div>

<ContactForm />
