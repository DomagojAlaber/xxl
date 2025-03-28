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

<section class="bg-white px-2 py-16 sm:px-4 md:px-20 lg:px-110">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-8 text-2xl font-bold md:text-3xl">KONTAKTIRAJTE NAS</h2>
		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
				<input type="text" bind:value={name} placeholder="Ime" required class="flex-1 border p-2" />
				<input
					type="text"
					bind:value={surname}
					placeholder="Prezime"
					required
					class="flex-1 border p-2"
				/>
			</div>

			<input
				type="email"
				bind:value={email}
				placeholder="E-mail"
				required
				class="w-full border p-2"
			/>

			<textarea bind:value={message} placeholder="Tekst" rows="5" class="w- border p-2 md:w-full">
			</textarea>

			<button type="submit" class="rounded bg-[#E53935] px-4 py-2 text-white hover:bg-black">
				SEND
			</button>
		</form>

		<div
			style="max-width:100%;list-style:none; transition: none;overflow:hidden;width:500px;height:500px;"
			class="py-5 w-max list-none transition-none overflow-hidden"
		>
			<div id="my-map-display" style="height:100%; width:100%;max-width:100%;">
				<iframe
					title="xxl-krojacki-obrt-pula-google-maps"
					style="height:100%;width:100%;border:0;"
					frameborder="0"
					src="https://www.google.com/maps/embed/v1/place?q=xxl+krojacki+obrt&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
				></iframe>
			</div>
		</div>
	</div>
</section>
