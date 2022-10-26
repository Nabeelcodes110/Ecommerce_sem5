import React from 'react'
import CheckoutCard from '../components/CheckoutCard'
// import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import { Link, useNavigate } from 'react-router-dom'

export default function Checkout() {
  

  

  return (
    <div>
      <Navbar />
      <ul className="list-group">
        <li className="list-group-item"><CheckoutCard /></li>
        <li className="list-group-item"><CheckoutCard /></li>
        <li className="list-group-item"><CheckoutCard /></li>
        <li className="list-group-item"><CheckoutCard /></li>
        <li className="list-group-item"><CheckoutCard /></li>
        <li className="list-group-item"><CheckoutCard /></li>

      </ul>

      <Footer />
    </div>
  )
}
