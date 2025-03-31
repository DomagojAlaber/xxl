<script lang="ts">
	export let src: string;
	export let title: string;
	export let text: string;
</script>

<div class="w-80 flex-shrink-0 rounded bg-white p-6 text-center shadow md:w-auto">
	<div class="mb-4 h-50 overflow-hidden rounded">
		<img {src} alt={title} class="h-full w-full object-cover" style="width:100%; height:100%; object-fit:cover"/>
	</div>
	<h3 class="mb-2 text-xl font-semibold">{title}</h3>
	<p class="text-gray-700">
		{text}
	</p>
</div>
