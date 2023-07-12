<script context="module" lang="ts">
	let connectors: null | (MetaMaskConnector | CoinbaseWalletConnector | WalletConnectConnector)[] =
		null
	const setConnectors = (chain: Chain, projectId: string) => {
		const conectors = [
			new MetaMaskConnector({
				chains: [chain],
				options: {}
			}),
			new CoinbaseWalletConnector({
				chains: [chain],
				options: {
					appName: 'KuduPay'
				}
			}),
			new WalletConnectConnector({
				chains: [chain],
				options: {
					projectId
				}
			})
		]
		const node = document.createElement('style')
		node.innerHTML = 'wcm-modal{position: absolute;z-index: 100000000000;}'
		document.head.appendChild(node)
		return conectors
	}
</script>

<script lang="ts">
	import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
	import { CoinbaseWalletConnector } from '@wagmi/core/connectors/coinbaseWallet'
	import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
	import { imageWalletSelector } from 'kudu-utils'
	import { connect, type Chain, type Connector } from '@wagmi/core'
	import { Announcement } from '../..'
	import { fly } from 'svelte/transition'
	import { onMount } from 'svelte'

	export let toggle: ((value?: boolean) => void) | null
	export let locales: {
		disclaimer: string
		help: string
		errors: {
			unexpectedError: string
			connectorNotFound: string
			connectorAlreadyConnected: string
			canceledTransaction: string
		}
	}
	export let lang: 'en' | 'es'
	export let projectId: string
	export let chain: Chain

	let errorMessage: string | null = null
	const handleConnect = async (connector: Connector) => {
		errorMessage = null
		try {
			await connect({
				chainId: chain.id,
				connector
			})
			toggle?.(false)
		} catch (error: any) {
			if (
				error?.code === 4001 ||
				error?.message === 'Connection request reset. Please try again.'
			) {
				errorMessage = locales.errors.canceledTransaction
			} else if (error?.name === 'ConnectorAlreadyConnectedError') {
				errorMessage = locales.errors.connectorAlreadyConnected
			} else if (error?.name === 'ConnectorNotFoundError') {
				errorMessage = locales.errors.connectorNotFound
			} else {
				errorMessage = locales.errors.unexpectedError
			}
		}
	}

	let innerWidth = 0
	onMount(() => (connectors = connectors ?? setConnectors(chain, projectId)))
</script>

<svelte:window bind:innerWidth />

<div class="pb-6 px-6">
	<div class="mb-6 grid gap-4">
		{#if connectors}
			{#each connectors as connector}
				<button
					class="btn btn-block text-lg text-left btn-outline justify-between hover:!bg-neutral !bg-neutral/10 !border-neutral/20"
					on:click|preventDefault={() => handleConnect(connector)}
				>
					{connector.name === 'WalletConnectLegacy'
						? 'WalletConnect'
						: connector.name.split(' ')[0]}
					<img src={imageWalletSelector(connector.id)} alt="" class="aspect-1/1 w-6 h-6" />
				</button>
			{/each}
		{/if}
	</div>
	{#if errorMessage}
		{#key errorMessage}
			<div transition:fly>
				<Announcement type="error" extraclass="mb-6" size={innerWidth < 475 ? 'sm' : 'md'}
					>{errorMessage}</Announcement
				>
			</div>
		{/key}
	{/if}
	<span class="text-base block mb-6 text-center max-xs:text-sm child:whitespace-nowrap"
		>{@html locales.help
			.replace(
				'*LINK:help*',
				`<a
			href="https://kudu.design/${lang}/contact"
			class="link"
			rel="external"
			target="_blank">`
			)
			.replace('*LINK*', `</a>`)}</span
	>
	<span class="text-xs block">{@html locales.disclaimer}</span>
</div>
