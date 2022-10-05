import React from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import { FaCartPlus } from "react-icons/fa";

export default function Cart(props) {
  return (
    <div>
        <Link to="/checkout"><h3><FaCartPlus /></h3></Link>
        <h6>{props.items}</h6>
    </div>
  )
}
