
const abi = require('./1.json')

Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
const contract =web3.eth.contract(abi).at('0x98A859d5F47848748D0C0516659EF3f6D6bD817d');

function submitTransaction(addressDesitation, fromAddress ,amout){
  var result = contract.submitTransaction(addressDesitation, amout,"0x", {from:fromAddress, gas:500000})
  var id = contract.transactionCount()
  return id.toNumber()

}

function getConfirmationCount(id){
  var c = contract.getConfirmationCount(id)
  return(c.toNumber())

}

function getConfirmations(id){
  var result = contract.getConfirmations(id)
  return result
}

function getOwners(){
  var result = contract.getOwners()
  var final = []
  // console.log(result[0])
  // result.forEach(final.append)
  return result
}

function required(){
  var result = contract.required()
  return result
}

function confirmTransaction(fromAddress,id){
  console.log(id)
  var result = contract.confirmTransaction(id,{from:fromAddress, gas:500000})
  return result
}



module.exports = {
  owners:  (req, res) =>{
    var result = getOwners()
    res.json(result)
  },

  submit: (req, res) =>{
    let  addressDesitation = req.params.addressDesitation
    let fromAddress = req.params.fromAddress
    let amout = req.params.amout
    var result =submitTransaction(addressDesitation, fromAddress, amout)
    res.json(result - 1)
  },

  require: (req, res) =>{
    result = required()
    res.json(result)
  },

  confirm: (req, res) =>{
    var fromAddress = req.params.fromAddress
    let id = req.params.id
    var resul = confirmTransaction(fromAddress, id)
    console.log(resul)
    res.json(resul)
    
  },

  getconfirm: (req, res) =>{
    let  id  = req.params.id
    var result = getConfirmations(id)
    res.json(result)
  },

  getcountconfirm: (req, res) =>{
    let id = req.params.id
    var result = getConfirmationCount(id)
    res.json(result)
  }

}




