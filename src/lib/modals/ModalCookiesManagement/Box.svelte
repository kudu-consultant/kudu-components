<script lang="ts">
	export let locales: { title: string; description: string }
	export let disabled: boolean = false
	export let checked: boolean = false
	export let handleChange: (event: Event) => void
</script>

<div>
	<div class="flex items-center space-x-4 mb-3">
		<input
			class="toggle toggle-xs md:toggle-sm toggle-success"
			type="checkbox"
			{disabled}
			{checked}
			on:change|preventDefault|stopPropagation={handleChange}
		/>
		<span class="text-sm md:text-base">{locales.title}</span>
	</div>
	<p class="text-sm md:text-base">{locales.description}</p>
</div>
