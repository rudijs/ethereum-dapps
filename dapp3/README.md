- mkdir dapp3
- cd dapp3
- npm init -y
- npm install --save-dev truffle solidity-coverage eth-gas-reporter
- npx truffle init .
- create `truffle-config-gas.js`

```
const config = require("./truffle-config")

// console.log(config)

module.exports = {
 ...config,
 mocha: {
   reporter: "eth-gas-reporter",
   reporterOptions: { excludeContracts: ["Migrations"] },
 },
}
```

- npx truffle create contract SimpleStorage
- npx truffle create migration SimpleStorage
- npx truffle create test SimpleStorage

## dapp2

- `npm install`

## Test

- Extends [dapp1 README](../dapp1/README.md)
- Three testing options: tests, tests with coverage report, tests with gas estimatation
  1. `npx truffle test`
  2. `npx truffle run coverage`
  3. `npx truffle --config truffle-config-gas.js test`
