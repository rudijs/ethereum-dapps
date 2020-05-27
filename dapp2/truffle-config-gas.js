const config = require("./truffle-config")

// console.log(config)

module.exports = {
  ...config,
  mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: { excludeContracts: ["Migrations"] },
  },
}
