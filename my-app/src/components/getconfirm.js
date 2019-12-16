import React, { Component } from 'react'

class Get extends Component {
  constructor(props) {
    super(props)

    this.state = {
    	id: '',
      address: []
   

    }

    this.handleChange = this.handleChange.bind(this)

  }

handleChange(event){
	const { name, value } = event.target
	 this.setState({
    [name]: value,
  })
}


getConfirm(id) {
	const { address } = this.state;
	var url = 'http://127.0.0.1:3001/getconfirm/'
	var paramter = id

	fetch(url+paramter)
	  .then(result => result.json())
	  .then(result => {
	    console.log(result)
	    this.setState({
	      address: result,
	    })
	    console.log('lolll',(this.state.transaction))
	  })
}


  render(){
     const { id } = this.state;

    const result =   this.state.address.map(function(item, i){
        console.log('test');
        return <li key={i}>{item}</li>
      })
    return (
    <div className="container">
        <h1>Address List Confirm</h1>

        <form>
          <label>ID Of Transaction</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={this.handleChange} />

      </form>
      <button onClick = {()=>this.getConfirm(id)}> Get </button>
        <p> Address confirmed: </p>

        <ul>{result}</ul>
    </div>)
  }


}

export default Get




