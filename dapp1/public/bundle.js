const contractABI = []
const contractAddress = "0x0899ce2d60c7523D3a0fa411B7d1313c60D61De3"
const web3 = new Web3("http://127.0.0.1:9545")
const simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress)
console.log(simpleSmartContract)
web3.eth.getAccounts().then(console.log)
