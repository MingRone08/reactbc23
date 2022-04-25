import React, { Component } from 'react'

//Kết nối redux
import { connect } from 'react-redux'

class BaiTapChonXeRedux extends Component {
	render() {
		return (
			<div className='container'>
				<h3>Bài tập chọn xe</h3>
				<div className="row">
					<div className="col-6">
						<img src={this.props.imgCar} alt="..." className='w-100' />
					</div>
					<div className="col-6">
						<div className="row">
							<div className="col-3">
								<button className="btn" style={{ backgroundColor: 'red', color: '#fff' }} onClick={() => {
									this.props.changeColor('red')
								}}>Red</button>
							</div>
							<div className="col-3">
								<button className="btn" style={{ backgroundColor: 'black', color: '#fff' }} onClick={() => {
									this.props.changeColor('black')
								}}>Black</button>
							</div>
							<div className="col-3">
								<button className="btn" style={{ backgroundColor: 'silver', color: '#fff' }} onClick={() => {
									this.props.changeColor('silver')
								}}>Silver</button>
							</div>
							<div className="col-3">
								<button className="btn" style={{ backgroundColor: '#eee', color: '#000' }} onClick={() => {
									this.props.changeColor('steel')
								}}>Steel</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

// Định nghĩa hàm lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
	return {
		imgCar: rootReducer.stateImgCar
	}
}

// Định nghĩa hàm gửi dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
	return {
		changeColor: (newColor) => {
			const action = {
				type: 'CHANGE_COLOR',
				newColor
			}
			// Đưa dữ liệu lên store
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapChonXeRedux)
