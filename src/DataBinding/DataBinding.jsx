import React, { Component } from "react";

export default class DataBinding extends Component {
  product = {
    id: 1,
    name: "iphone",
    price: 1000,
    img: "https://i.pravatar.cc?u=77",
  };

  renderMessage = () => {
    return "Hello Ming";
    // Nội dung trả về phải là string, number, component (thẻ bao phủ)
  };

  renderCard = () => {
    return (
      <div className="card w-25">
        <img src={this.product.img} alt="" />
        <div className="card-body">
          <p>{this.product.name}</p>
          <p>{this.product.price}</p>
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
    );
  };

  render() {
    let title = "cybersoft";
    return (
      <div>
        <div id="title">Name {title}</div>
        <hr />
        <div>{this.renderCard()}</div>
        <hr />
        <p>Message: {this.renderMessage()}</p>
      </div>
    );
  }
}
