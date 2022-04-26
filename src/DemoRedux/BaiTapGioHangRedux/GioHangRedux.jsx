import React, { Component } from 'react'
// Kết nối redux
import { connect } from 'react-redux'

class GioHangRedux extends Component {

    tinhTongSoLuong = () => {
        // let tongSL = 0;
        // for (let spGH of this.props.stateGioHang) {
        //     tongSL += spGH.soLuong;
        // }

        let tongSoLuong =  this.props.stateGioHang.reduce((soLuong, spGH) => {
            return soLuong + spGH.soLuong;
        }, 0);

        let tongTien = this.props.stateGioHang.reduce((tt, spGH) => {
            //Mỗi lần duyệt qua mỗi sản phẩm tính tổng tiền của sp đó rồi cộng dồn vào kết quả của hàm reduce
            let tong = spGH.giaBan * spGH.soLuong;
            return tt + tong;
        }, 0);

        return tongSoLuong + ' - ' + tongTien.toLocaleString();
    }

    render() {
        return (
            <div>
                <h3>Giỏ Hàng</h3>
                <div className="text-right">
                    <span className='text-danger font-weight-bold'>Giỏ Hàng({this.tinhTongSoLuong()})</span>
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
                            <td>{spGH.giaBan.toLocaleString()}</td>
                            <td>
                                <button className="btn btn-primary mr-2" onClick={() => {
                                    this.props.tangGiamSoLuong(spGH.maSP, 1)
                                }}>+</button>
                                {spGH.soLuong}
                                <button className="btn btn-primary ml-2" onClick={() => {
                                    this.props.tangGiamSoLuong(spGH.maSP, -1)
                                }}>+</button>
                            </td>
                            <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
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
            //Tạo ra 1 action
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSPClick,
                soLuong
            }     
            //Đưa lên redux
            dispatch(action);  
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)
