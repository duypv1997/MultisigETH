import React, { Component } from 'react'

class Confirm extends Component {
  constructor(props) {
    super(props)

    this.state = {
    	id: '',
      fromAddress: '',
      TxtHash: ''

    }

    this.handleChange = this.handleChange.bind(this)

  }

handleChange(event){
	const { name, value } = event.target
	 this.setState({
    [name]: value,
  })
}


confirmTransaction(id, fromAddress) {
	const { TxtHash } = this.state;
	var url = 'http://127.0.0.1:3001/confirm/'
	var paramter =fromAddress+'/'+id

	fetch(url+paramter)
	  .then(result => result.json())
	  .then(result => {
	    console.log(result)
	    this.setState({
	      TxtHash: result,
	    })
	    console.log('lolll',(this.state.transaction))
	  })
}


render() {
	const { id, fromAddress, TxtHash } = this.state;

  return (
  	<div className="container">
  	<h1> Confirm transaction</h1>
    <form>
      <label>ID Of Transaction</label>
      <input
        type="text"
        name="id"
        value={id}
        onChange={this.handleChange} />
      <label>From Address</label>
      <input
        type="text"
        name="fromAddress"
        value={fromAddress}
        onChange={this.handleChange} />

    </form>
    <button onClick = {()=>this.confirmTransaction(id, fromAddress)}> Confirm </button>

    <p> <strong>TxtHash of transaction is</strong>: {TxtHash}</p>



    </div>
  );
}


}

export default Confirm