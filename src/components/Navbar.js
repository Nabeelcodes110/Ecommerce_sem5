import 'font-awesome/css/font-awesome.min.css';
// import { fa-solid fa-user-vneck } from '@fortawesome/react-fontawesome'
import { FaUser } from "react-icons/fa";
import { React } from 'react'
import Cart from './Cart';
import { useNavigate, Link } from 'react-router-dom';


export default function Navbar(props) {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login')

  }

  const handleFabricCtn = () => props.setFabric("Cotton")
  const handleFabricGgt = () => props.setFabric("Georgette")
  const handleFabricChnd = () => props.setFabric("Chanderi")
  const handleFabricMl = () => props.setFabric("Mulmul")
  const handleFabricMdl = () => props.setFabric("Modal")



  return (
    <div>
      <script src="https://kit.fontawesome.com/57a35dc412.js" crossOrigin="anonymous"></script>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">AQSA CHIKAN ARTS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/profile'><FaUser /></Link>
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
                  <li><Link to="/feed" className="dropdown-item" onClick={handleFabricCtn}>Cotton</Link></li>
                  <li><Link to="/feed" className="dropdown-item" onClick={handleFabricGgt}>Georgette</Link></li>
                  <li><Link to="/feed" className="dropdown-item" onClick={handleFabricMdl}>Modal</Link></li>
                  <li><Link to="/feed" className="dropdown-item" onClick={handleFabricChnd}>Chanderi</Link></li>
                  <li><Link to="/feed" className="dropdown-item" onClick={handleFabricMl}>Mulmul</Link></li>

                </ul>
              </li>
            </ul>
            <button type="button" className="btn btn-success mx-1">Signup</button>
            <button type="button" className="btn btn-success mx-1" onClick={handleLogin}>Login</button>
            <Cart items={props.itemCart} updateCart={props.updateCart} />
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

