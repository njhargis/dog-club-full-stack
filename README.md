<h1 align="center">
  Dog Club Web App Monorepo</br>
  <a href="http://www.typescriptlang.org/"><img src="https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square" height="20"></a>
  <a href="https://github.com/njhargis/dog-club-full-stack/stargazers"><img src="https://img.shields.io/github/stars/njhargis/dog-club-full-stack.svg?style=social&label=Star&maxAge=3600" height="20"></a>
 
</h1>

## About

This project is a custom fit full-stack web app for dog training clubs.
The eventual goal is to market the clubs, manage membership, sell classes/session, rent rings, and handle communications.
This project was bootstrapped with [GraphQL API Starter Kit](https://github.com/kriasoft/relay-starter-kit).
You can join their [Discord channel](https://discord.com/invite/bSsv7XM) for assistance trying to setup something similar.
You can message me on Discord @Bird#1239 for help with this specific repository.

## Code Features

- Monorepo project structure powered by Yarn with PnP
- GraphQL API using code-first development approach (TypeScript, GraphQL.js, Knex, PostgreSQL)
- Stateless JWT cookie-based authentication (supporting SSR, OAuth 2.0 via Google, Facebook, etc.)
- Database tooling — seed files, migrations, Knex.js REPL shell, etc.
- Front-end boilerplate pre-configured with TypeScript, Webpack v5, React, Relay, and Materia UI
- Serverless deployment — `api`, `img` → Cloud Functions, `web` → Cloudflare Workers
- HTML page rendering (SSR) at CDN edge locations, all ~100 points on Lighthouse
- Pre-configured dev, test / QA, production, and review (per PR) environments
- Pre-configured VSCode code snippets and other VSCode settings

## Requirements

- [Node.js](https://nodejs.org/) v16, [Yarn](https://yarnpkg.com/) package manager
- Local or remote instance of [PostgreSQL](https://www.postgresql.org/) (see [Postgres.app](https://postgresapp.com/), [Google Cloud SQL](https://cloud.google.com/sql)) I recommend a local for development.
- [VS Code](https://code.visualstudio.com/) editor with [recommended extensions](.vscode/extensions.json)

## Getting Started

Clone the repo and run `yarn install`:

```bash
$ git clone https://github.com/njhargis/dog-club-full-stack.git
$ cd dog-club-full-stack                  # Change current directory to the newly created one
$ yarn install                  # Install project dependencies
```

Then, add a .local.override.env file to the env folder. Override any variables that are currently hidden (e.g. 'enc:..')
If your local Postgres credentials are different than what is within .local.env, you'll need to override those as well.
Finally, setup your database before starting your API and web.

```
$ yarn db:reset                 # Create or update PostgreSQL database
$ yarn api:start                # Launch GraphQL API and authentication server
$ yarn web:start                # Launch React/Relay front-end app
```

The API server must become available at [http://localhost:8080/api](http://localhost:8080/api).<br>
The web application front-end must become available at [http://localhost:3000/](http://localhost:3000/).

## Directory Structure

`├──`[`.github`](.github) — GitHub configuration including CI/CD workflows<br>
`├──`[`.vscode`](.vscode) — VSCode settings including code snippets, recommended extensions etc.<br>
`├──`[`env`](./env) — environment variables that are used for local development (`local`, `test`, `prod`)<br>
`├──`[`db`](./db) — database schema, seeds, and migrations ([Cloud SQL](https://cloud.google.com/sql), [Knex.js](https://knexjs.org/))<br>
`├──`[`api`](./api) — GraphQL API and authentication ([Could SQL](https://cloud.google.com/sql), [Cloud Functions](https://cloud.google.com/functions), [GraphQL.js](https://graphql.org/graphql-js/))<br>
`├──`[`img`](./img) — dynamic image resizing ([Cloud Functions](https://cloud.google.com/functions), [Cloud Storage](https://
cloud.google.com/storage))<br>
`├──`[`infra`](./infra) — cloud infrastructure configuration ([Terraform](https://www.terraform.io/))<br>
`├──`[`web`](./web) — [React](https://reactjs.org/) / [Relay](https://relay.dev/) web application with CDN rendering ([Webpack](https://webpack.js.org/), [Cloudflare Workers](https://workers.cloudflare.com/))<br>
`├──`[`scripts`](./scripts) — Automation scripts shared across the project<br>
`└── ...` — add more packages such as `worker`, `admin`, `mobile`, etc.

## References

- [GraphQL API and Relay Starter Kit](https://github.com/kriasoft/relay-starter-kit)
- [Getting Started with Cloud Functions (2nd gen)](https://codelabs.developers.google.com/codelabs/cloud-starting-cloudfunctions-v2)
- [Yarn 2 (Berry) - Plug'n'play, constraints and workspaces](https://www.youtube.com/watch?v=HUVawJXeHfU) by [@jherr](https://github.com/jherr)
- [Google Cloud SQL — Tips & Tricks](https://medium.com/@koistya/google-cloud-sql-tips-tricks-d0fe7106c68a?sk=fe65df6e858c9b57edbda07bc67ed0e9) by [@koistya](https://github.com/koistya)
- [Database change management with Node.js](https://dev.to/koistya/database-change-management-with-node-js-12dk) by [@koistya](https://github.com/koistya)

## How to Contribute

Anyone and everyone is welcome to [contribute](.github/CONTRIBUTING.md). Start
by checking out the list of [open issues](https://github.com/njhargis/dog-club-full-stack/issues)
marked [help wanted](https://github.com/njhargis/dog-club-full-stack/issues?q=label:"help+wanted").
However, if you decide to get involved, please take a moment to review the
[guidelines](.github/CONTRIBUTING.md).

## License

Copyright © 2022-present Neil Hargis Solutions. This source code is licensed under the MIT license found in the
[LICENSE](https://github.com/njhargis/dog-club-full-stack/blob/main/LICENSE) file.

---

<sup>Made with ♥ by Neil Hargis Solutions in conjunction with Nashville Dog Training Club & Murfreesboro Dog Training Club.
Generously aided by [contributors](https://github.com/njhargis/dog-club-full-stack/graphs/contributors).</sup>
