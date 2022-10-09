import React, { memo } from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import { FaCartArrowDown } from "react-icons/fa";
// import { useEffect } from 'react';

function Cart(props) {
  // useEffect(() => {
  //   window.localStorage.getItem("count" )
  // })
  // useEffect(() => {
  //   const number = window.localStorage.setItem("count" , props.items)
  //   props.updateCart(number);
  // })
  return (
    <div>
        <Link style={{color: 'green'}} to="/checkout">
        <h3 className='d-inline-block'><FaCartArrowDown /></h3>
        <h6 className='d-inline-block mx-1'>{props.items}</h6>
        </Link>
    </div>
  )
}

export default memo(Cart)
