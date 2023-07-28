<script lang="ts">
	import {
		ModalCookiesManagement,
		toggleModalCookiesManagement,
		setupModalCookiesManagement
	} from '$lib/modals/ModalCookiesManagement'
	import { onMount } from 'svelte'
	onMount(() => {
		setupModalCookiesManagement()
	})
</script>

<section class="p-6 min-h-screen">
	<button class="btn" on:click|preventDefault={() => toggleModalCookiesManagement?.()}
		>open modal managment cookies</button
	>

	<ModalCookiesManagement lang="en" />
</section>
