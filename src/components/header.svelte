<script>
	// Svelte code if needed
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

<nav class="flex items-center justify-between bg-gray-100 px-120 py-7">
	<a href="/" class="text-2xl font-extrabold">XXL KROJACKI OBRT</a>

	<div class="space-x-4">
		<a href="/" class="underline-animation hover:text-[#E53935]">Pocetna</a>
		<a href="/gas" class="underline-animation hover:text-[#E53935]">O nama</a>
		<a href="/gas" class="underline-animation hover:text-[#E53935]">Cjenik</a>
		<a href="/contact" class="rounded bg-[#E53935] px-4 py-2 text-white">
			Kontakt
		</a>
	</div>
</nav>
