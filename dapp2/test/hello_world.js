const HelloWorld = artifacts.require("HelloWorld")

contract("HelloWorld", function () {
  it("should assert true", async function () {
    await HelloWorld.deployed()
    assert.isTrue(true)
  })

  it("should return Hello World", async () => {
    const helloWorld = await HelloWorld.deployed()
    const result = await helloWorld.hello()
    assert(result === "Hello World")
  })
})
