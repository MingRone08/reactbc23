import React, { Component } from 'react'
// Kết nối redux
import { connect } from 'react-redux'

class TangGiamSoLuong extends Component {
	render() {
		return (
			<div className='container'>
				<button onClick={() => {
					this.props.tangGiamSoLuong(1);
				}}>+</button>
				<button onClick={() => {
					this.props.tangGiamSoLuong(-1);
				}}>-</button>
			</div>
		)
	}
}

//Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => { //state tổng của ứng dụng // Tạo ra các props cho component là giá trị
	return {
		number: rootReducer.stateNumber
	}
}

//Hàm định props gửi dữ liệu lên store => có chức năng hoạt động giống setState
const mapDispatchToProps = (dispatch) => {
	return {
		tangGiamSoLuong: (soLuong) => {
			//Để gửi dữ liệu lên redux (action)
			const action = {
				type: 'TANG_GIAM_SO_LUONG', //redux bắt buộc phải có
				soLuong: soLuong
			}
			// Đưa dữ liệu lên redux
			dispatch(action);
		}
	}
}

// cú pháp tạo ra component => connect()(TangGiamSoLuong)
// sau đó export default component đã kết nối redux
export default connect(mapStateToProps, mapDispatchToProps)(TangGiamSoLuong);
