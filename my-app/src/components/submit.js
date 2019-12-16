import React, { Component } from 'react'

class Submit extends Component {
  constructor(props) {
    super(props)

    this.state = {
    	transaction: '',
    	fromAddress: '',
    	desAddress: '',
    	amount: ''
    }

    this.handleChange = this.handleChange.bind(this)

  }

handleChange(event){
	const { name, value } = event.target
	 this.setState({
    [name]: value,
  })
}


submitTransaction(des, from, amout) {
	const { transaction, fromAddress, desAddress, amount } = this.state;
	var url = 'http://127.0.0.1:3001/submit/'
	var paramter =des+'/'+from+'/'+amount

	fetch(url+paramter)
	  .then(result => result.json())
	  .then(result => {
	    console.log(result)
	    this.setState({
	      transaction: result,
	    })
	    console.log('lolll',(this.state.transaction))
	  })
}


render() {
	const { transaction, fromAddress, desAddress, amount } = this.state;

  return (
  	<div className="container">
  	<h1> Send Coin With Multisig</h1>
    <form>
      <label>From address</label>
      <input
        type="text"
        name="fromAddress"
        value={fromAddress}
        onChange={this.handleChange} />
      <label>Des address</label>
      <input
        type="text"
        name="desAddress"
        value={desAddress}
        onChange={this.handleChange} />
       <label> Amount</label>
        <input
        type="text"
        name="amount"
        value={amount}
        onChange={this.handleChange} />
    </form>
    <button onClick = {()=>this.submitTransaction(desAddress, fromAddress, amount)}> Submit </button>

    <p> Count transaction is: {transaction}</p>
    <p> Information transaction:<br />
    	<strong>Destination Address</strong>: {desAddress}<br />
    	<strong>From Address</strong>:  {fromAddress} <br />
    	<strong>Amount</strong>:  {amount}

    </p>

    </div>
  );
}



}


export default Submit