import React from 'react'

export default function Card(props) {
  return (
    <div className='my-3 card_container'>
    <div className="card" style={{"width":"18rem;"}}> 
      <img src={props.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.price}...</p>
        <a href='/' className="btn btn-sn btn-dark">Buy</a>
      </div>
    </div>
  </div>
  )
}
