<script lang="ts">
	let name: string = '';
	let surname: string = '';
	let email: string = '';
	let message: string = '';

	function handleSubmit(event: Event) {
		event.preventDefault();
		console.log({
			name,
			surname,
			email,
			message
		});
	}
</script>

<section class="bg-white px-4 py-16 sm:px-6 md:px-20 lg:px-110">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-8 text-center text-3xl font-bold md:text-4xl">Kontaktirajte nas</h2>
		<div class="md:flex md:justify-evenly md:pt-5 md:pb-5">
			<div class="text-center md:text-left">
				<h2 class="py-2 text-xl font-bold text-gray-700">Adresa</h2>
				<a
					href="https://www.google.com/maps/place/Xxl+Kroja%C4%8Dki+Obrt/@44.870539,13.851587,16z/data=!4m6!3m5!1s0x477cd2dfb918a7ad:0xa3abdd1712f50bf7!8m2!3d44.8705393!4d13.8515871!16s%2Fg%2F11qmmkz1wb?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer"
					class="text-xl underline">52100 Pula, Teslina ulica 18</a
				>
				<h2 class="py-2 text-xl font-bold text-gray-700">Telefon</h2>
				<div class="text-xl underline">+385 98 201 1971</div>
			</div>
			<div class="text-center md:text-left">
				<h2 class="py-2 text-2xl font-bold text-gray-700">Radno vrijeme</h2>

				<div>Pon - Sri - Pet</div>
				<div class="text-xl">12:00 - 19:00</div>
				<div>Uto - Cet</div>
				<div class="text-xl">08:00 - 15:00</div>
				<div>Subota</div>
				<div class="text-xl">08:00 - 13:00</div>
			</div>
		</div>
		<form id="contactform" action="https://formsubmit.io/send/testic.nikola@gmail.com" method="POST">
			<input name="_redirect" type="hidden" id="name" value="/">
			<div class="flex flex-col space-y-4 pt-2 md:flex-row md:space-y-0 md:space-x-4">
				<input
					name="name"
					type="text"
					bind:value={name}
					placeholder="Ime"
					required
					class="flex-1 border-b border-gray-300 py-2 transition-colors duration-300 focus:border-[#D21F1B] focus:outline-none"
				/>
				<input
					type="text"
					bind:value={surname}
					placeholder="Prezime"
					required
					class="flex-1 border-b border-gray-300 py-2 transition-colors duration-300 focus:border-[#D21F1B] focus:outline-none"
				/>
			</div>
			<input
				name="email"
				type="email"
				bind:value={email}
				placeholder="E-mail"
				required
				class="w-full border-b border-gray-300 py-2 transition-colors duration-300 focus:border-[#D21F1B] focus:outline-none"
			/>
			<textarea
				name="comment"
				bind:value={message}
				placeholder="Kako vam mozemo pomoci?"
				rows="5"
				class="w-full resize-none border-b border-gray-300 py-2 transition-colors duration-300 focus:border-[#D21F1B] focus:outline-none"
			></textarea>
			<input name="_formsubmit_id" type="text" style="display:none">
			<button
				type="submit"
				class="mt-4 block w-full rounded bg-[#D21F1B] px-4 py-2 text-white transition-colors duration-300 hover:bg-black"
			>
				POSALJI
			</button>
		</form>

		<div class="mt-8 py-5" style="max-width: 100%; overflow: hidden;">
			<div id="my-map-display" class="h-64 w-full md:h-96">
				<iframe
					title="xxl-krojacki-obrt-pula-google-maps"
					class="h-full w-full border-0"
					frameborder="0"
					src="https://www.google.com/maps/embed/v1/place?q=xxl+krojacki+obrt&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
				></iframe>
			</div>
		</div>
	</div>
</section>
