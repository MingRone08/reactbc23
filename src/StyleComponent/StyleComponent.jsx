import React, { Component } from 'react'
// Cách 1: import đường dẫn css -> ảnh hưởng toàn ứng dụng
import "./Style.css";

//Cách 2: import module css
import style from './Style.module.css';

//Cách 3: import css cho từng thẻ


export default class StyleComponent extends Component {
  render() {

    let status = true;
    let classStyle = status ? 'text-green' : 'text-red';

    return (
      <div>
          <h3>Style Component</h3>
          <p className='text-red'>Hello Cybersoft</p>
          <p className={style[classStyle]}>Hello Cybersoft Component</p>
          <p style={{backgroundColor:'#fff', color:'green', padding: '15px'}}>Hello bc23</p>
      </div>
    )
  }
}
