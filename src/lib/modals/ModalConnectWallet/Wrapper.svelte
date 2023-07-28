<script context="module" lang="ts">
	export let toggle: ((value?: boolean) => void) | null = null
</script>

<script lang="ts">
	import { onMount } from 'svelte'
	import type { Chain } from '@wagmi/core'
	import { CenterModal } from '../layouts'
	import Inner from './Inner.svelte'
	import EN from './locales/en.json'
	import ES from './locales/es.json'

	export let lang: 'en' | 'es'
	export let projectId: string
	export let chain: Chain

	let prepared = false

	let isOpen = false

	const locales = lang === 'es' ? ES : EN

	onMount(() => {
		toggle = (value?: boolean) => {
			isOpen = value ?? !isOpen
		}
		prepared = true
		return () => {
			toggle = null
			prepared = false
		}
	})
</script>

{#if prepared}
	<CenterModal {toggle} {isOpen} {locales}>
		<Inner {toggle} {locales} {chain} {projectId} {lang} />
	</CenterModal>
{/if}
