# Contributing

Kudu Components

<a href="https://www.npmjs.com/package/kudu-components"><img src="https://img.shields.io/npm/v/kudu-components?style=flat&logo=npm" alt="npm version" /></a>

## Table of Contents

- [Contributing](#contributing)
  - [Table of Contents](#table-of-contents)
  - [Code of conduct](#code-of-conduct)
  - [Enviroment variables](#enviroment-variables)
  - [Files and folders](#files-and-folders)
  - [Local development](#local-development)
  - [How can I contribute?](#how-can-i-contribute)
    - [Reporting an issue](#reporting-an-issue)
    - [Code contribution](#code-contribution)
      - [Commit and push on your branch](#commit-and-push-on-your-branch)
    - [Pull Request guidelines](#pull-request-guidelines)
    - [Contribution acceptance criteria](#contribution-acceptance-criteria)
  - [License](#license)
  - [Helper tools](#helper-tools)
    - [Automatic update packages](#automatic-update-packages)

## Code of conduct

This project and everyone participating in it is governed by the [following code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Environment variables

| NAME                             | VALUE                          |
| -------------------------------- | ------------------------------ |
| PUBLIC_WALLET_CONNECT_PROJECT_ID | ypur_wallet_connect_project_id |

## Important files and folders

| File(s)              | Description                                            |
| -------------------- | ------------------------------------------------------ |
| `package.json`       | Configuration file for the project                     |
| `svelte.config.js`   | Config file for Svelte                                 |
| `vite.config.js`     | Config file for Vite                                   |
| `tsconfig.json`      | Config file for TypeScript                             |
| `tailwind.config.js` | Config file for Tailwind and Daisy UI (design system)  |
| `postcss.config.js`  | Config file for PostCSS, dependency of Tailwind        |
| `.prettierrc`        | Config file for Prettier                               |
| `.prettierignore`    | Config file for Prettier ignore                        |
| `.eslintrc.cjs`      | Config file for lint                                   |
| `.eslintignore`      | Config file for lint ignore                            |
| `lefthook.yml`       | Config file for lefthook (githooks tools)              |
| `renovate.json`      | Config file for renovate bot (Github app)              |
| `.gitignore`         | Config file for git ignore                             |
| `.vscode`            | Specific vscode config for project                     |
| `.github`            | Folder for GitHub-specific files and workflows (CI/CD) |
| `src`                | All sources files, the core of the project             |
| `src/lib`            | All core files of the library                          |
| `src/routes`         | All demo files of library components                   |
| `dist`               | Folder containing the built and compiled output        |

## Local development

TODO

## How can I contribute?

### Reporting an issue

The first way to contribute to a project is simply proposing an issue. If you find anything which is not working well or as expected you can [open an issue](https://github.com/kudu-consultant/kudu-components/issues/new).

Before to open the issue please check if there is one similar already opened. It will save us hours of work and it will allow us to answer you quickly with the desired hotfix or implementation.

> **NOTE:** if looking for existing issues you will find the same problem, or similar, in **closed** state, please refer to this issue (with its number) when you are opening your one. It is maybe a regression we didn't see. In this way you will help to go faster and to find a definitive solution to the recurrent problem.

When you are opening an issue, please be sure to report as much information as you can to allow us to replicate the problem and faster find the solution.

### Code contribution

If you are a dev and you want to directly fix a problem or implement a new feature... you are the best one! :clap::clap:

To propose any change you have to submit us a [Pull Request](https://help.github.com/articles/about-pull-requests/)

The workflow we are using is:

1. Fork this repository (as you don't have a direct write access to the main one).
2. Create your code, `Commit` and `Push the code` on your forked repo
3. Create a GitHub `Pull Request` to our **develop** branch.

We will take the time to review your code, make some comments or asking information if needed. But, as you took time to help us, we will take in serious consideration what you are proposing.
To quickly have your code available on production, please take care and read our [Contribution acceptance criteria](#contribution-acceptance-criteria)

#### Commit and push on your branch

```bash
git add <files>
git commit -m "<type>[optional scope]: <description>" (the message must follow https://www.conventionalcommits.org guidelines)
git push origin <my-branch-name>
```

### Pull Request guidelines

When you open your Pull Request provide as much information as possible.

- For an issue, describe what you are fixing with your pull request and how you had found the defect.
- If you are proposing an enhancement, describe what you are adding to the code (new function, performance enhancement, documentation update, changing an existing function, ...).

### Contribution acceptance criteria

We love maintenable software and we are happy when some else than us is able to take the code, **understand it** and be able to change it.
To reach this goal we fixed some rule in our team and we would love to go ahead in this way, even with the external contribution:

1. Be sure your code compile: no syntax error, no missing library, ...
2. Add comments on the code if you want to explain better what is happening in the code.
3. Add documentation for any API, if needed, or functional explaining what changed/added with your code.
4. After you proposed the PullRequest. If you will receive any mail or find any automatic comment on the Pull Request you opened, it means there is something which is not respecting the project defined code style.

If you respect all these rules you will help us saving time and we will be able to check your pull request faster.

## License

By contributing to kudu-components, you agree that your contributions will be licensed
under the [LICENSE](LICENSE) of the project.

## Helper tools

Auxiliar tools that enhance productivity and streamline development workflows.

### Lint

This repository utilizes ESLint for lint the code. You can install the ESLint extension
in Visual Studio Code to automatically run ESLint. Alternatively, you can use the command
`pnpm run lint` to lint your code manually if needed.

### Code formatter

This repository utilizes Prettier for code formatting. You can install the Prettier extension
and enable the 'formatOnSave' setting in Visual Studio Code to automatically run Prettier when
saving a file. Alternatively, you can use the command `pnpm run format` to standardize your
code manually if needed.

### Automatic update packages

This repo use renovate for up to date all packages

- [How to set up Renovate](https://github.com/renovatebot/tutorial)
- [Renovate dashboard](https://developer.mend.io/github/kudu-consultant/landing)
- [Renovate docs](https://docs.renovatebot.com/)

### Git hooks

This repo use Lefthook to automatize actions on git flow. Learn more
about Lefthook here: [Lefthook Github](https://github.com/evilmartians/lefthook)

- Start using git hooks on your project: `pnpm run install:git-hooks`
- Clean git hooks: `pnpm run uninstall:git-hooks`
