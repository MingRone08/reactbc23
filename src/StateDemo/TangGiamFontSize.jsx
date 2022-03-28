import React, { Component } from 'react'

export default class TangGiamFontSize extends Component {

    state = {
        fSize: 15 //number
    };

    changeFSize = (newFSize) => {
        this.setState({
            fSize: this.state.fSize + newFSize
        });
    }

  render() {
    return (
        <div>
            <h3>Bài tập tăng giảm font-size</h3>
            <p style={{fontSize: `${this.state.fSize}px`}}>Học lập trình</p>
            <button className='btn btn-success' type='button' onClick={() => {
                this.changeFSize(5);
            }}>+</button>
            <button className="btn btn-primary ml-2" type='button' onClick={() => {
                this.changeFSize(-5);
            }}>-</button>
        </div>
    )
  }
}
