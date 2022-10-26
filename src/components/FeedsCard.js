import React from 'react'
import { useNavigate, Link } from 'react-router-dom';


export default function FeedsCard(props) {
    const navigate = useNavigate();

    const handleBuy = () => {
        navigate('/checkout')
    }


    const handleAddCart = (event) => {
        event.preventDefault();
        props.updateCart(props.itemCart + 1)
        sessionStorage.setItem(props.name , {
            name : props.name,
            price : props.price,
            description : props.description,
            quantity : 1,
            
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        props.setPreview({
            name: props.name,
            description: props.description,
            price: props.price
        })
    }

    return (
        <div>
            <div className="card mb-3" style={{ 'maxWidth': 760 }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <Link to='/preview' ><img src={props.url} onClick={handleClick} className="img-fluid rounded-start h-1" alt="..." /></Link>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}.</p>
                            <p className="card-price">Rs. {props.price}</p>
                            <p className="card-price">color : {props.color}</p>
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
