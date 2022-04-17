import React, { Component } from 'react'

export default class GioHang extends Component {
    renderGioHang = () => {
        let { gioHang } = this.props;

        return gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td>
                    <img src={spGH.hinhAnh} alt="..." width={50} height={50} />
                </td>
                <td>{spGH.giaBan}</td>
                <td>
                    <button className="btn btn-primary mr-2" onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, 1);
                    }}>+</button>
                    {spGH.soLuong}
                    <button className="btn btn-primary ml-2" onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP, -1);
                    }}>-</button>
                </td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        this.props.xoaGioHang(spGH.maSP);
                    }}>Xóa</button>
                </td>
            </tr>
        });
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <span style={{ cursor: 'pointer' }}>
                        <i className="fa fa-cart-arrow-down" /> Giỏ hàng (0)
                    </span>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
