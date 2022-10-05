import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function FeedsCard(props) {
    const navigate = useNavigate();

    const handleBuy = ()=>{
        navigate('/checkout')
    }

  return (
    <div>
        <div className="card mb-3" style={{'maxWidth':760}}>
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={props.url} className="img-fluid rounded-start h-1" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro omnis eligendi eos inventore, sunt aut possimus quae ea, consequatur voluptates placeat earum velit incidunt recusandae dolor consectetur odit quaerat iste.</p>
                        <p className="card-price">{props.price} rs</p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary btn-dark" type="button" onClick={handleBuy}>Buy Now</button>
                            <button class="btn btn-primary btn-dark" type="button" onClick={() => props.updateCart(props.itemCart + 1)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
