const HelloWorldContract = artifacts.require("HelloWorld")

module.exports = function (_deployer) {
  _deployer.deploy(HelloWorldContract)
  // Use deployer to state migration tasks.
}
