<script>
	import * as Icons from '$lib/icons'
</script>

<section class="p-6 min-h-screen">
	<div
		class="grid grid-flow-dense grid-cols-[repeat(auto-fill,48px)] grid-rows-[repeat(auto-fill,48px)] gap-6"
	>
		{#each Object.values(Icons) as Icon}
			<div class="btn btn-ghost btn-square child:w-7 child:h-7 child:fill-base-content">
				<Icon />
			</div>
		{/each}
	</div>
</section>
