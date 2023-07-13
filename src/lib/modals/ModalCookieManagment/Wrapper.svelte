<script context="module" lang="ts">
	export let toggle: ((value?: boolean) => void) | null = null
</script>

<script lang="ts">
	import { onMount } from 'svelte'
	import Inner from './Inner.svelte'
	import EN from './locales/en.json'
	import ES from './locales/es.json'
	import DownPopUpModal from '../layouts/DownPopUpModal.svelte'

	export let lang: 'en' | 'es'

	let isOpen = false

	const locales = lang === 'es' ? ES : EN

	onMount(() => {
		toggle = (value?: boolean) => {
			isOpen = value ?? !isOpen
		}
		return () => {
			toggle = null
		}
	})
</script>

{#if toggle}
	<DownPopUpModal {toggle} {isOpen} {locales}>
		<Inner {toggle} {locales} />
	</DownPopUpModal>
{/if}
