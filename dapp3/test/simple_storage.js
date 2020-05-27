const SimpleStorage = artifacts.require("SimpleStorage")

contract("SimpleStorage", function () {
  it("should read data()", async function () {
    const simpleStorage = await SimpleStorage.deployed()
    assert((await simpleStorage.data()) === "mydata")
  })

  it("should set data()", async () => {
    const simpleStorage = await SimpleStorage.deployed()
    // console.log(simpleStorage.address)
    simpleStorage.set("newData")
    assert((await simpleStorage.data()) === "newData")
  })
})
