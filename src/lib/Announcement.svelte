<script lang="ts">
	import { CrossCircle } from './icons/index.js'
	export let type: 'error'
	export let size: 'md' | 'sm' = 'md'
	export let extraclass: string = ''
</script>

<div
	class={`flex items-center rounded-md py-2 px-4 ${extraclass}`}
	class:bg-error={type === 'error'}
	class:text-error-content={type === 'error'}
	class:space-x-3={size === 'md'}
	class:min-h-12={size === 'md'}
	class:space-x-2={size === 'sm'}
	class:min-h-8={size === 'sm'}
>
	<div
		class="shrink-0"
		class:h-6={size === 'md'}
		class:w-6={size === 'md'}
		class:h-5={size === 'sm'}
		class:w-5={size === 'sm'}
	>
		<svelte:component this={type === 'error' ? CrossCircle : CrossCircle} />
	</div>
	<span class="line-clamp-2" class:text-md={size === 'md'} class:text-sm={size === 'sm'}>
		<slot />
	</span>
</div>
