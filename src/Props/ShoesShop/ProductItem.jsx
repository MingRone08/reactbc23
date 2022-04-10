import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { prod } = this.props;

    return (
        //Phân biệt state và props
        /*
            + Giống nhau: Đây là 2 thuộc tính có sẵn của react class component
            để binding dữ liệu lên giao diện (html)
            + Khác nhau: 
                - state dùng để chứa dữ liệu thay đổi trên giao diện từ
                1 event (1 xử lý từ người dùng). state có thẻ gá lại giá 
                trị thông qua phương thức this.setState.
                - props là thuộc tính chứa giá trị từ component cha truyền vào.
                props không thể thay đổi giá trị (readonly)
        */
      <div className="card">
        <div className="d-flex justify-content-center">
          <img src={prod.image} alt="..." width={200} />
        </div>
        <div className="card-body">
          <p>{prod.name}</p>
          <p>{prod.price} $</p>
          <button className="btn bg-dark text-white">+ Add to carts</button>
        </div>
      </div>
    );
  }
}
