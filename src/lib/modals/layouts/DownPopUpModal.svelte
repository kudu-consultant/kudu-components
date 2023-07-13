<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Close } from '../../icons'

	export let isOpen: boolean
	export let toggle: ((value?: boolean) => void) | null
	export let locales: { title: string }
</script>

{#key isOpen}
	<div class="modal" class:modal-open={isOpen} transition:fly={{ duration: 300 }}>
		{#if isOpen}
			<div
				class="bg-base-100/20 fixed -z-10 h-full w-full"
				on:click|preventDefault={() => toggle?.(false)}
			/>
			<div
				class="modal-box max-h-full min-w-[100vw] bottom-0 absolute !rounded-none max-w-md bg-base-content"
			>
				<div
					class="flex justify-between sticky top-0 bg-base-content p-6 pb-3 mb-3 max-w-4xl mx-auto items-center z-20"
				>
					<h4 class="text-base font-bold text-base-300">{locales.title}</h4>
					<button
						class="btn-sm -mt-2 -mr-2 !-translate-x-1 !translate-y-1 btn-ghost btn-square btn ml-2 child:w-5 child:h-5 child:fill-base-300"
						on:click={() => toggle?.(false)}
					>
						<Close />
					</button>
				</div>
				<slot />
			</div>
		{/if}
	</div>
{/key}
