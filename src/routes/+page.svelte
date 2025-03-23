<script>
	import home from '$lib/images/home.jpeg';
	import craft from '$lib/images/craft.jpg';
	import ContactForm from '../components/contactForm.svelte';
</script>

<section class="px-120 relative bg-cover bg-center py-70" style="background-image: url({home});">
	<div class="absolute inset-0 bg-black opacity-50"></div>
	<div class="relative mx-auto flex max-w-6xl flex-col items-center justify-center md:flex-row">
		<div class="mb-8 text-white md:mr-8 md:mb-0 md:w-1/2">
			<h1 class="mb-4 text-3xl font-bold md:text-5xl">
				Krojimo po vašoj mjeri, jer svaki detalj pravi razliku
			</h1>
			<p class="mb-6">
				Kvalitetnim šivanjem i pažnjom na detalje, stavljamo pečat ručnog rada na svaki šav.
			</p>
			<button class="rounded bg-[#E53935] px-4 py-2 hover:bg-black">
				Kontaktirajte nas
			</button>
		</div>
	</div>
</section>

<section class="px-110 relative bg-cover bg-center py-20">
	<div class="flex flex-col md:flex-row items-center justify-between">
		<div class="flex flex-col items-start justify-center md:w-1/2">
			<div class="text-[#E53935] py-2">Vase krojacko rjesenje</div>
			<div class="font-bold py-2">Expert craftsmanship at its finest</div>
			<div class="text-[#424242] py-2">
				At xxl krojacki obrt, we take pride in delivering exceptional tailoring services in Pula. Our
				skilled tailors blend traditional techniques with modern styles to create custom garments that
				fit perfectly. Whether you need alterations or a bespoke outfit, we focus on quality and
				precision in every stitch. Trust us to enhance your wardrobe with tailored solutions that
				reflect your individuality and style.
			</div>
			<div class="text-[#424242]">Javite se</div>
		</div>
		<div class="md:w-1/2">
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img src={craft} alt="Craft picture" class="w-full h-150" />
		</div>
	</div>
</section>

<section class="bg-gray-50 px-4 py-16">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-2xl font-bold md:text-3xl">
			Naše kvalitetne usluge / vrijednosti
		</h2>

		<div class="grid gap-8 md:grid-cols-3">
			<div class="rounded bg-white p-6 text-center shadow">
				<div class="mb-4">
					<div class="ico mx-auto h-16 w-16 bg-gray-200"></div>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Personalizirani dizajn</h3>
				<p class="text-gray-700">
					Naš krojački salon nudi potpuno prilagođene usluge, stvarajući jedinstvene komade odjeće
					koji savršeno odražavaju vaš osobni stil i tjelesne proporcije.
				</p>
			</div>

			<div class="rounded bg-white p-6 text-center shadow">
				<div class="mb-4">
					<div class="ico mx-auto h-16 w-16 bg-gray-200"></div>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Vrhunska kvaliteta</h3>
				<p class="text-gray-700">
					Koristeći samo najkvalitetnije materijale i modernu tehnologiju, naši iskusni krojači
					jamče preciznu izradu i dugotrajnu eleganciju svakog komada.
				</p>
			</div>

			<div class="rounded bg-white p-6 text-center shadow">
				<div class="mb-4">
					<div class="ico mx-auto h-16 w-16 bg-gray-200"></div>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Brza i stručna usluga</h3>
				<p class="text-gray-700">
					Uz profesionalno savjetovanje i brzu izvedbu, naš salon osigurava da ćete uvijek izgledati
					besprijekorno i osjećati se samouvjereno.
				</p>
			</div>
		</div>
	</div>
</section>

<ContactForm />
