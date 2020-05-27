const contractABI = [
  {
    constant: true,
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
]

const contractAddress = "0xF6a597409aa565840d050507853a9100939a97f1"

const web3 = new Web3("http://127.0.0.1:9545")

// pointer to an existing smart contract on the blockchain
const simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress)

// console.log(simpleSmartContract)

document.addEventListener("DOMContentLoaded", () => {
  simpleSmartContract.methods
    .hello()
    .call()
    .then((result) => {
      document.getElementById("output").innerHTML = result
    })
})
