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

<section class="bg-white px-4 py-16 sm:px-6 md:px-20 lg:px-[110px]">
	<div class="mx-auto max-w-6xl">
	  <h2 class="mb-8 text-center text-3xl font-bold md:text-4xl">KONTAKTIRAJTE NAS</h2>
	  <div class="md:flex md:justify-evenly md:pt-5 md:pb-5">
		<div class="text-center md:text-left">
			<h2 class="py-2 text-xl font-bold text-gray-700">Adresa</h2>
			<div class="text-xl">52100 Pula, Teslina ulica 18</div>
			<h2 class="py-2 text-xl font-bold text-gray-700">Telefon</h2>
			<div class="underline text-xl">+385 98 201 1971</div>
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
	  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
		<div class="pt-2 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
		  <input 
			type="text" 
			bind:value={name} 
			placeholder="Ime" 
			required 
			class="flex-1 border-b border-gray-300 py-2 focus:outline-none focus:border-[#D21F1B] transition-colors duration-300" 
		  />
		  <input 
			type="text" 
			bind:value={surname} 
			placeholder="Prezime" 
			required 
			class="flex-1 border-b border-gray-300 py-2 focus:outline-none focus:border-[#D21F1B] transition-colors duration-300" 
		  />
		</div>
		<input 
		  type="email" 
		  bind:value={email} 
		  placeholder="E-mail" 
		  required 
		  class="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#D21F1B] transition-colors duration-300" 
		/>
		<textarea 
		  bind:value={message} 
		  placeholder="Tekst" 
		  rows="5" 
		  class="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#D21F1B] transition-colors duration-300 resize-none"
		></textarea>
		<button 
		  type="submit" 
		  class="mt-4 block w-full rounded bg-[#D21F1B] px-4 py-2 text-white hover:bg-black transition-colors duration-300"
		>
		  SEND
		</button>
	  </form>
  
	  <div class="mt-8 py-5" style="max-width: 100%; overflow: hidden;">
		<div id="my-map-display" class="w-full h-64 md:h-96">
		  <iframe
			title="xxl-krojacki-obrt-pula-google-maps"
			class="w-full h-full border-0"
			frameborder="0"
			src="https://www.google.com/maps/embed/v1/place?q=xxl+krojacki+obrt&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
		  ></iframe>
		</div>
	  </div>
	</div>
  </section>
  