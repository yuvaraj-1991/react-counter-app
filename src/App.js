import React, { Component} from "react";

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      count: 0
    }
  }
// Creating methods for Incrementing and Decrementing

  increment = () => {
    this.setState({count: this.state.count + 1})
  }

  decrement = () => {
    if(this.state.count <= 0 ){
      this.setState({count: 0})
    } else {
      this.setState({count: this.state.count - 1})
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>    
        <div id="value">{this.state.count}</div>    
        <button onClick={this.increment}>Increase Counter</button>
        <button onClick={this.decrement}>Decrease Counter</button>
      </div>
    )
  }
}



export default App;
