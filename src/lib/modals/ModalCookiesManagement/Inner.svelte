<script lang="ts">
	import Box from './Box.svelte'

	export let toggle: ((value?: boolean) => void) | null
	export let locales: {
		functionalCookies: {
			title: string
			description: string
		}
		analyticalCookies: {
			title: string
			description: string
		}
		buttonAllowCurrentSelection: string
		buttonAllowAll: string
	}

	const handleButtonAllowCurrentSelection = () => {
		let cookiesSettings = JSON.parse(window.localStorage.getItem('cookies-settings')!)
		window.localStorage.setItem(
			'cookies-settings',
			JSON.stringify({ ...cookiesSettings, show: false })
		)
		toggle?.(false)
	}

	const handleButtonAllowAll = () => {
		window.localStorage.setItem(
			'cookies-settings',
			JSON.stringify({ show: false, analytics: true, functional: true })
		)
		toggle?.(false)
	}

	const handleChangeFunctional = (event: Event) => {
		let cookiesSettings = JSON.parse(window.localStorage.getItem('cookies-settings')!)
		window.localStorage.setItem(
			'cookies-settings',
			JSON.stringify({
				show: false,
				analytics: cookiesSettings.analytics,
				functional: (event.target as any).checked
			})
		)
	}

	const handleChangeAnalytics = (event: Event) => {
		let cookiesSettings = JSON.parse(window.localStorage.getItem('cookies-settings')!)
		window.localStorage.setItem(
			'cookies-settings',
			JSON.stringify({
				show: false,
				analytics: (event.target as any).checked,
				functional: cookiesSettings.functional
			})
		)
	}
</script>

<div class="pb-6 px-6 max-w-4xl text-base-300 mx-auto md:space-y-8 space-y-6">
	<Box
		locales={locales.functionalCookies}
		disabled={true}
		handleChange={handleChangeFunctional}
		checked={JSON.parse(window.localStorage.getItem('cookies-settings') ?? '').functional}
	/>
	<Box
		locales={locales.analyticalCookies}
		handleChange={handleChangeAnalytics}
		checked={JSON.parse(window.localStorage.getItem('cookies-settings') ?? '').analytics}
	/>
	<div class="flex 3xs:justify-between max-3xs:flex-col">
		<button
			class="btn btn-link max-md:btn-sm link-info 3xs:-ml-4 max-3xs:mb-3"
			on:click|preventDefault={handleButtonAllowCurrentSelection}
			>{locales.buttonAllowCurrentSelection}</button
		>
		<button class="btn btn-primary max-md:btn-sm" on:click|preventDefault={handleButtonAllowAll}
			>{locales.buttonAllowAll}</button
		>
	</div>
</div>
