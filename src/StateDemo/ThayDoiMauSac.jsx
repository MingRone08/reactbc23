import React, { Component } from 'react'

export default class ThayDoiMauSac extends Component {

    state = {
        colorHome: 'green'
    }

    changeHomeColor = (color) => {
        this.setState({
            colorHome: color
        });
    }

  render() {
    return (
      <div className="container">
          <h3>Thay đổi màu sắc ngôi nhà</h3>
          <i className='fa fa-home' style={{fontSize:150, color: this.state.colorHome}}></i>
          <br />
          <button className="btn btn-success" onClick={() => {
              this.changeHomeColor('green');
          }}>Green</button>
          <button className="btn btn-primary ml-2" onClick={() => {
              this.changeHomeColor('blue');
          }}>Blue</button>
          <button className="btn btn-danger ml-2" onClick={() => {
              this.changeHomeColor('red');
          }}>Red</button>
      </div>
    )
  }
}
