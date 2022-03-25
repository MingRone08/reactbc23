import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showMessage = () => {
        alert('Hello');
    }

    sayHello = (name) => {
        alert('hello !!! ' + name);
    }

  render() {
    return (
      <div className="container">
          <button onClick={this.showMessage}>Click me!</button>
          <button onClick={() => {alert("Hello")}}>Click me!</button>
          <hr />
          <button onClick={this.sayHello.bind(this, 'Ming')}>Say Hello</button>
          <button onClick={() => {this.sayHello('Ming')}}>Say Hello</button>
      </div>
    )
  }
}
