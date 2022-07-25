# Template Phaser3 client

Phaser 3 based.

## Installation

- Node 18+
- Install dependencies with `npm install`

## Running

- `npm build` to build project.
- `npm run dev` to run service in watch mode (nodemon to autoreload service + pretty logs). It does not run _full_ compilation, so some compiling errors may be ignored on startup.

## Development

- `npm run lint` && `npm run lint:fix` - to validate or repair formatting/linting/style.
- `npm test` to run tests, `npm run test:coverage` to run tests check code coverage

Also install comfortable IDE to get type hints, e.g. VSCode

## Configuration

Loads env variables from `.env` file. Copy `.env.EXAMPLE` as `.env` to kick-off local development.
