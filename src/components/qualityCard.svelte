<script>
	export let image;
	export let title;
	export let text;
</script>

<div class="rounded bg-white p-6 text-center shadow flex-shrink-0 w-80 md:w-auto">
	<div class="mb-4 h-50 overflow-hidden rounded">
		<img src={image} alt="{image}/xxl/krojackiobrt/pula/krojackeuslugepula" class="h-full w-full object-cover" />
	</div>
	<h3 class="mb-2 text-xl font-semibold">{title}</h3>
	<p class="text-gray-700">
		{text}
	</p>
</div>
