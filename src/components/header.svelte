<script>
	let menuOpen = false;

	function toggleHamburger() {
		menuOpen = !menuOpen
	}
</script>

<style>
	.underline-animation {
		position: relative;
	}
	.underline-animation::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -2px; /* Adjust spacing between text and underline */
		width: 0;
		height: 2px; /* Adjust underline thickness */
		background-color: #E53935;
		transition: width 0.3s ease;
	}
	.underline-animation:hover::after {
		width: 100%;
	}
</style>

<nav class="flex items-center justify-between px-2 sm:px-4 md:px-20 lg:px-110  py-2">
	<a href="/" class="hidden md:block text-2xl font-extrabold">XXL KROJACKI OBRT</a>
	<a href="/" class="block md:hidden text-2xl font-extrabold">XXL</a>

	<div class="hidden md:flex items-center space-x-4">
		<a href="/" class="underline-animation hover:text-[#E53935]">Pocetna</a>
		<a href="/" class="underline-animation hover:text-[#E53935]">O nama</a>
		<a href="/" class="underline-animation hover:text-[#E53935]">Cjenik</a>
		<a href="/contact" class="rounded bg-[#E53935] px-4 py-2 text-white">
			Kontakt
		</a>
	</div>

	<button 
		class="md:hidden focus:outline-none" 
		on:click={toggleHamburger} 
		aria-label="Toggle menu">
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
	</button>

</nav>

{#if menuOpen}
	<div class="md:hidden bg-gray-100 px-4 py-2 space-y-2">
		<a href="/" class="block underline-animation hover:text-[#E53935] text-sm text-center">
			Pocetna
		</a>
		<a href="/" class="block underline-animation hover:text-[#E53935] text-sm text-center">
			O nama
		</a>
		<a href="/" class="block underline-animation hover:text-[#E53935] text-sm text-center">
			Cjenik
		</a>
		<a href="/contact" class="block rounded bg-[#E53935] px-4 py-2 text-xs text-center text-white hover:bg-black">
			Kontakt
		</a>
	</div>
{/if}