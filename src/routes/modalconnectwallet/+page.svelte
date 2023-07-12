<script>
	import { ModalConnectWallet, toggleModalConnectWallet } from '$lib'
	import { configureChains, createConfig, getAccount, watchAccount } from '@wagmi/core'
	import { publicProvider } from '@wagmi/core/providers/public'
	import { onMount } from 'svelte'
	import { polygonZkEvmTestnet } from 'viem/chains'

	const { chains, publicClient, webSocketPublicClient } = configureChains(
		[polygonZkEvmTestnet],
		[publicProvider()]
	)
	export const chain = chains[0]

	export const config = createConfig({
		autoConnect: true,
		logger: {
			warn: null
		},
		publicClient,
		webSocketPublicClient
	})

	let accounts = [getAccount()]

	onMount(() => {
		const unwatch = watchAccount(account => (accounts = [account, ...accounts]))
		return () => {
			unwatch()
		}
	})
</script>

<section class="p-6 min-h-screen">
	<button class="btn mb-8" on:click|preventDefault={() => toggleModalConnectWallet?.()}
		>open modal to connect wallet</button
	>
	<div>
		<span class="inline-block mb-4">History of account details</span>
		<ol class="grid gap-2">
			{#each accounts as account, i}
				<li>
					{accounts.length - i + '. ' + JSON.stringify(account)}
				</li>
			{/each}
		</ol>
	</div>

	<ModalConnectWallet lang="en" {chain} projectId="968f4691084c59b14219061fa588a02d" />
</section>
