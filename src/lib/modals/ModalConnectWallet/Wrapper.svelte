<script context="module" lang="ts">
	export let toggle: ((value?: boolean) => void) | null = null
</script>

<script lang="ts">
	import { onMount } from 'svelte'
	import type { Chain } from '@wagmi/core'

	export let lang: 'en' | 'es'
	export let projectId: string
	export let chain: Chain

	let isOpen = false

	onMount(() => {
		toggle = (value?: boolean) => {
			isOpen = value ?? !isOpen
		}
		return () => {
			toggle = null
		}
	})
	const local = 'Module' + lang.toUpperCase()
</script>

{#key isOpen}
	{#await import(`./locales/${local}.svelte`) then Module}
		<Module.default {isOpen} {chain} {toggle} {lang} {projectId} />
	{/await}
{/key}
