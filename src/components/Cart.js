import React from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import { FaCartArrowDown } from "react-icons/fa";

export default function Cart(props) {
  return (
    <div>
        <Link style={{color: 'green'}} to="/checkout">
        <h3 className='d-inline-block'><FaCartArrowDown /></h3>
        <h6 className='d-inline-block mx-1'>{props.items}</h6>
        </Link>
    </div>
  )
}
