<script lang="ts">
	import { fly } from 'svelte/transition'
	import { onMount } from 'svelte'

	export let toggle: ((value?: boolean) => void) | null
	export let locales: {
		functionalCookies: {
			title: string
			description: string
		}
		analyticalCookies: {
			title: string
			description: string
		}
		buttonAllowCurrentSelection: string
		buttonAllowAll: string
	}
</script>

<div class="pb-6 px-6 max-w-4xl text-base-300 mx-auto md:space-y-8 space-y-6">
	{#each [locales.functionalCookies, locales.analyticalCookies] as element, i}
		<div>
			<div class="flex items-center space-x-4 mb-3">
				<input
					class="toggle toggle-xs md:toggle-sm toggle-success"
					type="checkbox"
					disabled={i === 0}
					checked
					name=""
					id=""
				/><span class="text-sm md:text-base">{element.title}</span>
			</div>
			<p class="text-sm md:text-base">{element.description}</p>
		</div>
	{/each}
	<div class="flex 3xs:justify-between max-3xs:flex-col">
		<button
			class="btn btn-link max-md:btn-sm link-info 3xs:-ml-4 max-3xs:mb-3"
			on:click|preventDefault={() => toggle?.(false)}>{locales.buttonAllowCurrentSelection}</button
		>
		<button class="btn btn-primary max-md:btn-sm" on:click|preventDefault={() => toggle?.(false)}
			>{locales.buttonAllowAll}</button
		>
	</div>
</div>
