<script lang="ts">
	let submitting = false;
	let submitted = false;
	let error: string | null = null;

	async function handleSubmit(event: SubmitEvent) {
		submitting = true;
		submitted = false;
		error = null;

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const scriptURL = form.action; // Get URL from form's action attribute

		try {
			const response = await fetch(scriptURL, {
				method: 'POST',
				body: formData
			});

			if (response.ok || response.status === 302) {
				submitted = true;
				form.reset();
			} else {
				const responseData = await response.json().catch(() => ({})); // Attempt to parse error
				console.error('Submission failed:', response.status, response.statusText, responseData);
				error = `Slanje nije uspjelo. Status: ${response.status}. Molimo pokušajte ponovno.`;
				if (responseData.error) {
					error += ` Poruka sa servera: ${responseData.error}`;
				}
			}
		} catch (e) {
			console.error('Error submitting form:', e);
			error = 'Došlo je do pogreške prilikom slanja. Provjerite vezu i pokušajte ponovno.';
		} finally {
			submitting = false;
		}
	}
</script>

<section class="bg-white px-4 py-16 sm:px-6 md:px-20 lg:px-110">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-8 text-center text-3xl font-bold md:text-4xl">Kontaktirajte nas</h2>
		<div class="md:flex md:justify-evenly md:pt-5 md:pb-5">
			<div class="text-center md:text-left">
				<h2 class="py-2 text-2xl font-bold text-gray-700">Adresa</h2>
				<a
					href="https://www.google.com/maps/place/Xxl+Kroja%C4%8Dki+Obrt/@44.870539,13.851587,16z/data=!4m6!3m5!1s0x477cd2dfb918a7ad:0xa3abdd1712f50bf7!8m2!3d44.8705393!4d13.8515871!16s%2Fg%2F11qmmkz1wb?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
					target="_blank"
					rel="noopener noreferrer"
					class="text-xl underline"
				>
					52100 Pula, Teslina ulica 18</a
				>
				<h2 class="py-2 text-2xl font-bold text-gray-700 md:pt-6">Telefon</h2>
				<div class="text-xl underline">+385 98 201 1971</div>
			</div>
			<div class="text-center md:text-left">
				<h2 class="py-2 text-2xl font-bold text-gray-700">Radno vrijeme</h2>
				<div>Pon - Sri - Pet</div>
				<div class="text-xl">12:00 - 19:00</div>
				<div>Uto - Čet</div>
				<div class="text-xl">08:00 - 15:00</div>
				<div>Subota</div>
				<div class="text-xl">08:00 - 13:00</div>
			</div>
		</div>

		{#if submitted}
			<div
				class="thankyou_message rounded border border-green-600 bg-green-100 p-4 text-center text-green-800"
			>
				<h2 class="text-xl font-semibold">
					<em>Hvala</em> što ste nas kontaktirali! Odgovorit ćemo Vam uskoro!
				</h2>
			</div>
		{:else}
			{#if error}
				<div
					class="error_message mb-4 rounded border border-red-600 bg-red-100 p-4 text-center text-red-800"
				>
					<p>{error}</p>
				</div>
			{/if}

			<form
				id="contactform"
				class="gform"
				method="POST"
				action="https://script.google.com/macros/s/AKfycby6g7EybsNkMjqwnw07IwKX2Bw4wpbFBryBRHbDCajrpUvvCDKuzY-Txv3a-VnRUJKjMw/exec"
				on:submit|preventDefault={handleSubmit}
			>
				<fieldset disabled={submitting} class="">
					<div class="flex flex-col pt-2 md:flex-row md:space-y-0 md:space-x-4">
						<input
							name="name"
							type="text"
							placeholder="Ime"
							required
							class="flex-1 border-b border-gray-300 py-2 transition-colors duration-300 focus:border-[#D21F1B] focus:outline-none disabled:opacity-50"
						/>
						<input
							name="surname"
							type="text"
							placeholder="Prezime"
							required
							class="flex-1 border-b border-gray-300 py-2 transition-colors duration-300 focus:border-[#D21F1B] focus:outline-none disabled:opacity-50"
						/>
					</div>
					<input
						name="email"
						type="email"
						placeholder="E-mail"
						required
						class="w-full border-b border-gray-300 py-2 transition-colors duration-300 focus:border-[#D21F1B] focus:outline-none disabled:opacity-50"
					/>
					<textarea
						name="message"
						placeholder="Kako Vam možemo pomoći?"
						rows="5"
						required
						class="w-full resize-none border-b border-gray-300 py-2 transition-colors duration-300 focus:border-[#D21F1B] focus:outline-none disabled:opacity-50"
					></textarea>
				</fieldset>
				<button
					type="submit"
					disabled={submitting}
					class="mt-4 block w-full rounded bg-[#D21F1B] px-4 py-2 text-white transition-colors duration-300 hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
				>
					{submitting ? 'Slanje...' : 'Pošalji'}
				</button>
			</form>
		{/if}

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
