<script lang="ts">
	import { CrossCircle } from './icons/index.js'
	export let type: 'error'
	export let extraclass: string = ''
</script>

<div
	class={`flex items-center rounded-md py-2 px-3 ${extraclass}`}
	class:bg-error={type === 'error'}
	class:text-error-content={type === 'error'}
>
	<div class="mr-3 h-6 w-6 shrink-0">
		<svelte:component this={type === 'error' ? CrossCircle : CrossCircle} />
	</div>
	<span class="text-sm line-clamp-2">
		<slot />
	</span>
</div>
