<script>
	import logo from '$lib/images/sewing-machine.png?enhanced';
	import { slide } from 'svelte/transition';

	let menuOpen = false;

	function toggleHamburger() {
		menuOpen = !menuOpen;
	}

	function closeHamburger() {
		menuOpen = false;
	}
</script>

<nav class="sticky top-0 z-50 bg-white">
  <!-- Inner container to match page padding -->
  <div class="mx-auto max-w-6xl flex items-center justify-between py-2 px-2">
    <div class="flex items-center space-x-4">
      <a href="/" aria-label="XXL KROJAČKI OBRT">
        <enhanced:img src={logo} alt="XXL KROJACKI OBRT Logo" class="w-12 h-auto" />
      </a>
      <a href="/" class="hidden text-3xl font-extrabold md:block">XXL KROJAČKI OBRT</a>
      <a href="/" class="block text-3xl font-extrabold md:hidden">XXL</a>
    </div>

    <div class="hidden items-center space-x-4 md:flex">
      <a href="/" class="underline-animation hover:text-[#D21F1B]">Početna</a>
      <a href="/catalog" class="underline-animation hover:text-[#D21F1B]">Cjenik</a>
      <a href="/contact" class="rounded bg-[#D21F1B] px-4 py-2 text-white">Kontakt</a>
    </div>

    <button
      class="focus:outline-none md:hidden"
      on:click={toggleHamburger}
      aria-label="Toggle menu"
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>

  {#if menuOpen}
    <div
      class="absolute top-full left-0 w-full bg-gray-100 px-2 py-2 sm:px-4 md:hidden space-y-2"
      transition:slide={{ duration: 400 }}
    >
      <a
        href="/"
        class="underline-animation block text-center text-md hover:text-[#D21F1B]"
        on:click={closeHamburger}
      >Početna</a>
      <a
        href="/catalog"
        class="underline-animation block text-center text-md hover:text-[#D21F1B]"
        on:click={closeHamburger}
      >Cjenik</a>
      <a
        href="/contact"
        class="block text-center text-md rounded bg-[#D21F1B] px-4 py-2 text-white hover:bg-black"
        on:click={closeHamburger}
      >Kontakt</a>
    </div>
  {/if}
</nav>

<style>
  .underline-animation {
    position: relative;
  }
  .underline-animation::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #d21f1b;
    transition: width 0.3s ease;
  }
  .underline-animation:hover::after {
    width: 100%;
  }
</style>
