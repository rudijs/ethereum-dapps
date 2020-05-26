## dapp1

- `npm install`

## Test

Option one - uses ganache-cli in memory blockchain started anew before each test

- `./node_modules/.bin/truffle test`

Option two - start a running local development blockchain

- Uncomment the `networks.development` property in `trufle-config.js`
- Start a local development blockchain
- `./node_modules/.bin/truffle develop`
- Tests
- `./node_modules/.bin/truffle test`

## Frontend UI

- Open up `public/index.html` with a live server
- View simple console log message for the empty Contract and unlocked addresses available for use from the local ganache server
- [http://127.0.0.1:5500/dapp1/public/index.html](http://127.0.0.1:5500/dapp1/public/index.html)
