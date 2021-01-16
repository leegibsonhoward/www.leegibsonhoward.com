# Website
[![Build Status](https://travis-ci.com/leegibsonhoward/www.leegibsonhoward.com.svg?branch=master)](https://travis-ci.com/leegibsonhoward/www.leegibsonhoward.com)
[![Coverage Status](https://coveralls.io/repos/github/leegibsonhoward/www.leegibsonhoward.com/badge.svg?branch=master)](https://coveralls.io/github/leegibsonhoward/www.leegibsonhoward.com?branch=master)

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.