import React, { Component } from 'react'




class Address extends Component {

  constructor(props) {
      super(props);
      this.state = {
        address: []
      }
      
      this.getAddressOwners = this.getAddressOwners.bind(this)
       };

  getAddressOwners() {
    const url = 'http://127.0.0.1:3001/owners'

    fetch(url)
      .then(result => result.json())
      .then(result => {
        // console.log(result)
        this.setState({
          address: result,
        })
        console.log('lolll',(this.state.address))
      })
  }



  render(){
    const result =   this.state.address.map(function(item, i){
        console.log('test');
        return <li key={i}>{item}</li>
      })
    return (
    <div className="container">
        <h1>Address List</h1>
        <button onClick = {this.getAddressOwners}> Address </button>

        <ul>{result}</ul>
    </div>)
  }
}

export default Address