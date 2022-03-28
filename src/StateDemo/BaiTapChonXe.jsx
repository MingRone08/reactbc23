import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        product: "./img/products/black-car.jpg"
    }

    changeProductPic = (car) => {
        let imgUrl = './img/products';
        this.setState({
            product: `${imgUrl}/${car}.jpg`
        });
    }

  render() {
    return (
      <div className="container">
          <h3>Bài tập chọn xe</h3>
          <div className="row">
              <div className="col-6">
                  <img src={this.state.product} alt="" className='w-100'/>
              </div>
              <div className='col-6'>
                <button className="btn btn-dark text-white" onClick={() => {
                    this.changeProductPic('black-car');
                }}>Black</button>
                <button className="btn btn-danger text-white" onClick={() => {
                    this.changeProductPic('red-car');
                }}>Red</button>
                <button className="btn btn-secondary text-white" onClick={() => {
                    this.changeProductPic('silver-car');
                }}>Silver</button>
                <button className="btn btn-light text-dark" onClick={() => {
                    this.changeProductPic('steel-car');
                }}>Steel</button>
              </div>
          </div>
      </div>
    )
  }
}
