import { sentrySvelteKit } from '@sentry/sveltekit'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig(() => ({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: process.env.SENTRY_ORG,
				project: process.env.SENTRY_PROJECT,
				authToken: process.env.SENTRY_AUTH_TOKEN,
				url: process.env.SENTRY_URL,
				cleanArtifacts: true,
				rewrite: false
			}
		}),
		sveltekit(),
		nodePolyfills({
			// To exclude specific polyfills, add them to this list. (only incude process for CoinWallet connector)
			exclude: [
				'_stream_duplex',
				'_stream_passthrough',
				'_stream_readable',
				'_stream_transform',
				'_stream_writable',
				'assert',
				'buffer',
				'child_process',
				'cluster',
				'console',
				'constants',
				'crypto',
				'dgram',
				'dns',
				'domain',
				'events',
				'fs',
				'http',
				'http2',
				'https',
				'module',
				'net',
				'os',
				'path',
				'punycode',
				'querystring',
				'readline',
				'repl',
				'stream',
				'string_decoder',
				'sys',
				'timers',
				'timers/promises',
				'tls',
				'tty',
				'url',
				'util',
				'vm',
				'zlib'
			],
			// Whether to polyfill specific globals.
			globals: {
				Buffer: true, // can also be 'build', 'dev', or false
				global: true,
				process: true
			},
			// Whether to polyfill `node:` protocol imports.
			protocolImports: true
		})
	]
}))
