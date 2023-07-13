<script>
	import { ModalCookieManagment, toggleModalCookieManagment } from '$lib'
</script>

<section class="p-6 min-h-screen">
	<button class="btn" on:click|preventDefault={() => toggleModalCookieManagment?.()}
		>open modal managment cookies</button
	>

	<ModalCookieManagment lang="en" />
</section>
