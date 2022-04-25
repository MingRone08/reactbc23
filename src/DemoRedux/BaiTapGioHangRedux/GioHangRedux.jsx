import React, { Component } from 'react'
// Kết nối redux
import { connect } from 'react-redux'

class GioHangRedux extends Component {
    render() {
        return (
            <div>
                <h3>Giỏ Hàng</h3>
                <div className="text-right">
                    <span className='text-danger font-weight-bold'>Giỏ Hàng(0)</span>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Só lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.stateGioHang.map((spGH, index) => {
                            return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td>{spGH.tenSP}</td>
                            <td><img src={spGH.hinhAnh} alt="..." width={50} height={50} /></td>
                            <td>{spGH.giaBan}</td>
                            <td>{spGH.soLuong}</td>
                            <td>{spGH.giaBan * spGH.soLuong}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {
                                    this.props.xoaGioHang(spGH.maSP)
                                }}>Xóa</button>
                            </td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

// Định nghĩa hàm mapStateToProps lấy dữ liệu redux về
const mapStateToProps = (rootReducer) => {
    return {
        stateGioHang: rootReducer.gioHangReducer
    }
}

//Định nghĩa sự kiện xóa giỏ hàng
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            //Tạo ra action gửi lên redux
            const action = {
                type: 'XOA_GIO_HANG',
                maSPClick
            }
            //Đưa dữ liệu lên redux
            dispatch(action);
        },
        tangGiamSoLuong: (maSPClick, soLuong) => {
            //Xử lý           
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)
