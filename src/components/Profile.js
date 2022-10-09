import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../App.css';

export default function Profile() {
  return (
    <div className=''>
      <Navbar />
      <div className="prflcontainer">
        <div id="profile_img" className="iamge">
            <img src="https://i.imgur.com/hHS8Gl5.png" alt="Profile iamge"></img>
        </div>
        <div className="info">
            <p><label>NAME</label></p>
            <p><label>Phone No:</label><label> 1234567890</label></p>
            <p><label>Email Id:</label><label> example.gmail.com</label></p>
          </div>
        </div>
        <Footer />
    </div>
  )
}


