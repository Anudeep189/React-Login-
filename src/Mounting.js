import React, { Component } from 'react'

export class mounting extends Component {
    constructor(props){
        super(props);
    }
    submit(){
        alert("success");
    }
  render() {
    return (
      <div>
          <button onClick={this.submit.bind(this)}>click here</button>
      </div>
    )
  }
}

export default mounting

