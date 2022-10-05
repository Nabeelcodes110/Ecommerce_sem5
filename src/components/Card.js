import React from 'react'
import 'D:/temporary/Ecommerce_sem5/src/App.css';

export default function Card(props) {
  return (
    <div className='my-3 card_container'>
    <div className="card" style={{"width":"18rem;"}}> 
      <img src={props.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ratione fugit exercitationem, voluptatem velit iure hic natus, nam, delectus recusandae dolorem? Cum et officiis aliquid autem? Doloribus ducimus dignissimos distinctio!</p>
        <h5 className='card-price'>{props.price}</h5>
        <div class="d-grid gap-2">
         <button class="btn btn-primary btn-dark" type="button">Buy Now</button>
         <button class="btn btn-primary btn-dark" type="button">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
  )
}
