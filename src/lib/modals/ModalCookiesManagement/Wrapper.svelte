<script context="module" lang="ts">
	export let toggle: ((value?: boolean) => void) | null = null

	export const setupModalCookiesManagement = () => {
		const cookieSettings =
			window.localStorage.getItem('cookies-settings') !== null
				? JSON.parse(window.localStorage.getItem('cookies-settings')!)
				: { show: true, analytics: true, functional: true }

		if (!cookieSettings.show) return

		window.localStorage.setItem('cookies-settings', JSON.stringify(cookieSettings))
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte'
	import Inner from './Inner.svelte'
	import EN from './locales/en.json'
	import ES from './locales/es.json'
	import DownPopUpModal from '../layouts/DownPopUpModal.svelte'

	export let lang: 'en' | 'es'

	let prepared = false

	export let isOpen = false

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
	<DownPopUpModal {toggle} {isOpen} {locales}>
		<Inner {toggle} {locales} />
	</DownPopUpModal>
{/if}
