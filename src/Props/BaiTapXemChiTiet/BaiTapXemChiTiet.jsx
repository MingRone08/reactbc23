import React, { Component } from "react";
import ChiTietSanPham from "./ChiTietSanPham";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class BaiTapXemChiTiet extends Component {
	arrPhone = [
		{
			maSP: 1,
			tenSP: "VinSmart Live",
			manHinh: "AMOLED, 6.2, Full HD+",
			heDieuHanh: "Android 9.0 (Pie)",
			cameraTruoc: "20 MP",
			cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
			ram: "4 GB",
			rom: "64 GB",
			giaBan: 5700000,
			hinhAnh: "./img/vsphone.jpg",
		},
		{
			maSP: 2,
			tenSP: "Meizu 16Xs",
			manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
			heDieuHanh: "Android 9.0 (Pie); Flyme",
			cameraTruoc: "20 MP",
			cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
			ram: "4 GB",
			rom: "64 GB",
			giaBan: 7600000,
			hinhAnh: "./img/meizuphone.jpg",
		},
		{
			maSP: 3,
			tenSP: "Iphone XS Max",
			manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
			heDieuHanh: "iOS 12",
			cameraSau: "Chính 12 MP & Phụ 12 MP",
			cameraTruoc: "7 MP",
			ram: "4 GB",
			rom: "64 GB",
			giaBan: 27000000,
			hinhAnh: "./img/applephone.jpg",
		},
	];

	state = {
		spChiTiet: {
			maSP: 3,
			tenSP: "Iphone XS Max",
			manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
			heDieuHanh: "iOS 12",
			cameraSau: "Chính 12 MP & Phụ 12 MP",
			cameraTruoc: "7 MP",
			ram: "4 GB",
			rom: "64 GB",
			giaBan: 27000000,
			hinhAnh: "./img/applephone.jpg",
		},

		gioHang: [
			// { maSP: 1, tenSP: 'Iphone', hinhAnh: 'https://picsum.photos/200', giaBan: 1000, soLuong: 2 }
		]
	};

	tangGiamSoLuong  = (maSanPhamClick, soLuong) => { //1 => nút +, -1 => nút -
		let {gioHang} = this.state;

		let spGH = gioHang.find(sp => sp.maSP === maSanPhamClick);
		if (spGH) {
			spGH.soLuong += soLuong;
			if (spGH.soLuong < 1) {
				if (window.confirm('Bạn có muốn xóa sản phẩm này không ?')) {
					gioHang = gioHang.filter(sp => sp.maSP !== maSanPhamClick);
				}
				//Nếu người dùng cancel => -- số lượng đó
				spGH.soLuong -= soLuong;
			}
		}

		//setState lại cho giỏ hàng
		this.setState({
			gioHang: gioHang
		});
	}

	xoaGioHang = (maSanPhamClick) => {
		console.log('maSanPhamClick', maSanPhamClick);

		let {gioHang} = this.state;
		//tìm ra sp chứa mã click nút xóa
		let index = gioHang.findIndex(spGH => spGH.maSP === maSanPhamClick);
		if (index !== -1) {
			//Hỏi người dùng trước khi thực hiện
			if (window.confirm('Bạn có muốn xóa sản phẩm đang chọn?')) {
				gioHang.splice(index, 1);
			}
		}

		//setState
		this.setState({
			gioHang: gioHang
		});
	}

	//state đặt ở đâu thì hàm setState sẽ đặt tại đó
	themGioHang = (sanPhamClick) => {//sanPhamClick: chưa có thuộc tính số lượng
		
		let sp = { ...sanPhamClick, soLuong: 1};
		
		let gioHang = this.state.gioHang;
		
		//gioHang.push(sp)
		//Check giỏ hàng đã có obj sp đó chưa => nếu có tăng số lượng => chưa có push obj vào gioHang
		let spGH = gioHang.find(spGH => spGH.maSP === sanPhamClick.maSP)
		if (spGH) {
			spGH.soLuong += 1;
		} else {
			gioHang.push(sp);
		}

		//setState => thay đổi giỏ hàng
		this.setState({
			gioHang: gioHang
		});
	}

	// Thiết kế giao diện
	// Bindidng dữ liệu arrayPhone lên giao diện
	renderProduct = () => {
		return this.arrPhone.map((phone, index) => {
			return (
				<div className="col-4" key={index}>
					<SanPham phone={phone} xemChiTiet={this.xemChiTiet}
						themGioHang={this.themGioHang} />
				</div>
			);
		});
	};

	xemChiTiet = (sanPhamClick) => {
		//setState thay đổi spChiTiet
		this.setState({
			spChiTiet: sanPhamClick
		});
	};

	render() {
		return (
			<div className="container">
				<h3 className="mt-5">Giỏ hàng</h3>
				<GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} 
				tangGiamSoLuong={this.tangGiamSoLuong} />

				<h3 className="text-center">Danh sách sản phẩm</h3>
				<div className="row">
					{this.renderProduct()}
				</div>

				<ChiTietSanPham spChiTiet={this.state.spChiTiet} />
			</div>
		);
	}
}
