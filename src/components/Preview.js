import React from 'react'
import Navbar from './Navbar'

function Preview(props) {
    return (
        <div className=''>
            <Navbar />
            <div className="card bg-dark text-white">
                <img src={props.image} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{props.title}</h5>                       
                        <p className="card-text">{props.price}</p>
                    </div>
            </div>

        </div>
    )
}

export default Preview
