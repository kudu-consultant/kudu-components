# Kudu Components

Comprehensive collection of reusable UI components, used across all products developed by Kudu.

<a href="https://www.npmjs.com/package/kudu-components"><img src="https://img.shields.io/npm/v/kudu-components?style=flat&logo=npm" alt="npm version" /></a>

## Install package

> **Note:**
>
> In order to the `kudu-components` package to work correctly, you need to
> have `kudu-ui-system` configured in your project beforehand.
> You can learn how to configure `kudu-ui-components` in your project
> by following this [link](https://github.com/kudu-consultant/kudu-ui-system).

After installing [ppnpm](https://pnpm.io/installation), `kudu-ui-system`, you can install `kudu-components` with this command:

```sh
pnpm i kudu-components
```

## Usage

```HTML
<script>
	import { LinkedIn } from 'kudu-components/icons'
</script>

<a
	href="https://www.linkedin.com/company/kudu-consultant-llc"
	class="btn btn-square btn-ghost child:w-7 child:h-7"
>
	<Linkedin />
</a>
```

## Development

TODO

## Changelog

If you want to know the different changes between versions of this package,
[look at the changelog here](CHANGELOG.md).

## I have an issue, what should I do?

Please file the issue [here](https://github.com/kudu-consultant/kudu-components/issues/new).

## Contributing

See [the contributing docs](CONTRIBUTING.md).

## License

By contributing to kudu-components, you agree that your contributions will be licensed
under the [LICENSE](LICENSE) of the project.
