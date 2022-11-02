import React from 'react'
import { useState, useEffect } from 'react'
import FeedsCard from '../components/FeedsCard'
import Navbar from '../components/Navbar.js'



export default function Feed() {
  let qty = 0
  if (Object.values(sessionStorage) !== null) {
    // console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token')!==null) {
      Object.values(sessionStorage).forEach((k) => {

        k = JSON.parse(k)
        qty += k.quantity
      })
    }
  }
  const [itemCart, updateCart] = useState(qty);
  const [fabric, setFabric] = useState("Cotton")
  const [kurti, setKurti] = useState([{
    name: "",
    description: "",
    color: "",
    image_url: "",
    price: 0,
    fabric: ""
  }])
  const [preview, setPreview] = useState({ name: "", description: "", price: "" })

  useEffect(() => {
    const fetchData = async () => {
      try {
        let header = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');

        header.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        header.append('Access-Control-Allow-Credentials', 'true');
        header.append('GET', 'POST', 'OPTIONS');
        const response = await fetch(`http://localhost:5000/api/kurti/data/${fabric}`, {
          method: 'GET',
          Headers: header
        })
        const json = await response.json();
        console.log(json);
        setKurti(json)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, [fabric])






  return (
    <div>
      <Navbar itemCart={itemCart} updateCart={updateCart} fabric={fabric} setFabric={setFabric} preview={preview} setPreview={setPreview} />
      <h1>{fabric}</h1>
      <div className='container px-1'>
        <div className='row gx-6'>
          {kurti.map((k) => {
            return <div className='col-6 md-3'>
              <FeedsCard url={k.image_url} title={k.name} description={k.description} price={k.price} color={k.color} itemCart={itemCart} updateCart={updateCart} preview={preview} setPreview={setPreview} />

            </div>

          })}
        </div>

      </div>

    </div>
  )
}

