import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


export default function FeedsCard(props) {
    const navigate = useNavigate();

    const handleBuy = () => {
        navigate('/checkout')
    }

    const handleClick = (e) => {
        updateDetail({ image: props.url, name: props.title, price: props.price })
        navigate('/preview')
        // e.preventDefault()
        // return <FeedsCard image={itemDetail.image} name={itemDetail.name} price={itemDetail.price}/> ;

    }

    const [itemDetail, updateDetail] = useState({ image: "", name: "", price: "" })

    const handleAddCart = ()=> props.updateCart(props.itemCart + 1)


    return (
        <div>
            <div className="card mb-3" style={{ 'maxWidth': 760 }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <Link to='/preview' onClick={handleClick}><img src={props.url} className="img-fluid rounded-start h-1" alt="..." /></Link>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description} Lorem ipsum dolor, s possimus quae ea, consequatur voluptates placeat earum velit incidunt recusandae dolor consectetur odit quaerat iste.</p>
                            <p className="card-price">Rs. {props.price}</p>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary btn-dark" type="button" onClick={handleBuy}>Buy Now</button>
                                <button className="btn btn-primary btn-dark" type="button" onClick={handleAddCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
