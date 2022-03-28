import React, { Component } from "react";

export default class StateDemo extends Component {

    /*
     this.state la thuoc tinh co san dc ke thua tu reach class component. dung de chua casc gias tri 
     thay doi tren giao dien khi ng dung thao tac (handle event)
    */

     state = {
        login: false
    }

//   login = false;
  userName = "cybersoft";

  renderLogin = () => {
      if (this.state.login) {
        return <div className="nav-item">Hello {this.userName}</div>;
      }
      return <button onClick={() => {this.handleLogin()}} type="button" className="btn btn-success">Login</button>;
  }

  handleLogin = () => {
    //   this.state.login = true; // Không thay đổi biến state thông qua cách gán giá trị
    //   this.render(); // Reactjs chỉ render lần đầu đc khởi tạo (gọi lại như 1 phương thức k đc)

      /**
       * Thay đôi thông qua phương thức setState của reactjs
       * setState nhận vào 2 tham số: state mới (là obj state chứa giá trị mới)
       */
      let newState = {login: true};

      this.setState(newState, () => {
          // Gọi sau khi state thay dổi, sau khi giao diên render code trong này
        console.log(this.state.login);
      });

    //   this.setState(newState);   
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit">
              {/* {this.login ? <div className="nav-item">Hello {this.userName}</div> : <button className="btn btn-success">Login</button>} */}
                {this.renderLogin()}
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
