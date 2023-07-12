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
		title: 'Conecta tu billetera',
		disclaimer:
			'Las billeteras son proporcionadas por Proveedores Externos y al seleccionarlas, aceptas los Términos de dichos Proveedores. Tu acceso a la billetera podría depender del funcionamiento del Proveedor Externo.',
		help: '¿Necesita ayuda? *LINK:help*Contacta con el equipo de Kudu.*LINK*',
		errors: {
			unexpectedError: 'Error inesperado, inténtelo de nuevo.',
			connectorNotFound: 'No se ha encontrado ningún conector de billetera instalado.',
			connectorAlreadyConnected: 'Ya está conectado, por favor refresque la página.',
			canceledTransaction: 'Ha cancelado la	transacción.'
		}
	}
</script>

<CenterModal {isOpen} {toggle} {locales}>
	<Inner {toggle} {locales} {chain} {projectId} {lang} />
</CenterModal>
