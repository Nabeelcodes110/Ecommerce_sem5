import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
// import { fa-solid fa-user-vneck } from '@fortawesome/react-fontawesome'
import { FaUser } from "react-icons/fa";
import {Link} from 'react-router-dom'
import Cart from './Cart';


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <script src="https://kit.fontawesome.com/57a35dc412.js" crossorigin="anonymous"></script>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">AQSA CHIKAN ARTS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/profile'><FaUser/></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Cotton</a></li>
            <li><a className="dropdown-item" href="/">Georgette</a></li>
            <li><a className="dropdown-item" href="/">Modal</a></li>
            <li><a className="dropdown-item" href="/">Chanderi</a></li>
            <li><a className="dropdown-item" href="/">Mulmul</a></li>
          
          </ul>
        </li>
      </ul>
      <Cart items={0} />
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
