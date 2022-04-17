import React, { Component } from 'react'
// Kết nối redux
import { connect } from 'react-redux'

class TangGiamSoLuong extends Component {
  render() {
    return (
      <div className='container'>
        <button onClick={() => {

        }}>+</button>
        <button onClick={() => {

        }}>-</button>
      </div>
    )
  }
}

//Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => { //state tổng của ứng dụng
    return {
        number: rootReducer.stateNumber
    }
}

//Hàm định props gửi dữ liệu lên store => có chức năng hoạt động giống setState
const mapDispatchToProps = (dispatch) => {
    return {
        tangGiamSoLuong: () => {

        }
    }
}

// cú pháp tạo ra component => connect()(TangGiamSoLuong)
// sau đó export default component đã kết nối redux
export default connect(mapStateToProps)(TangGiamSoLuong);
