<script lang="ts">
	import CenterModal from '$lib/modals/layouts/CenterModal.svelte'
	import type { Chain } from '@wagmi/core'
	import Inner from '../Inner.svelte'

	export let isOpen: boolean
	export let toggle: ((value?: boolean) => void) | null
	export let lang: 'en' | 'es'
	export let projectId: string
	export let chain: Chain

	const locales = {
		title: 'Choose Wallet',
		disclaimer:
			'Wallets are provided by External Providers and by selecting you agree to Terms of those Providers. Your access to the wallet might be reliant on the External Provider being operational.',
		help: 'Need help? *LINK:help*Contact with Kudu team.*LINK*',
		errors: {
			unexpectedError: 'Unexpected error connecting, try again.',
			connectorNotFound: 'No Web3 Connector found.',
			connectorAlreadyConnected: 'Connector already connected. Please refresh.',
			canceledTransaction: 'Canceled transaction.'
		}
	}
</script>

<CenterModal {isOpen} {toggle} {locales}>
	<Inner {toggle} {locales} {chain} {projectId} {lang} />
</CenterModal>
