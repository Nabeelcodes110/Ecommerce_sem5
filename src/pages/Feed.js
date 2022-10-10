import React from 'react'
import { useState, useEffect } from 'react'
import FeedsCard from '../components/FeedsCard'
import Navbar from '../components/Navbar.js'



export default function Feed() {
  const [itemCart, updateCart] = useState(0);
  const [fabric, setFabric] = useState("Cotton")
  const [kurti, setKurti] = useState([{
    name: "",
    description: "",
    color: "",
    image_url: "",
    price: "",
    fabric: ""
  }])
  
  // axios.get(`http/localhost:5000/api/kurti/data/${fabric}`)
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let header = new Headers();

        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');

        header.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        header.append('Access-Control-Allow-Credentials', 'true');
        header.append('GET', 'POST', 'OPTIONS');
        const response = await fetch(`http://localhost:5000/api/kurti/data/${fabric}` , {
          method: 'GET',
          Headers : header
        })
        const json = await response.json();
        console.log(json);
        setKurti(json)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  } , [fabric])
 



  return (
    <div>
      <Navbar itemCart={itemCart} updateCart={updateCart} fabric={fabric} setFabric={setFabric} />
      <h1>{fabric}</h1>
      <div className='container px-1'>
      <div className='row gx-6'>
        {kurti.map((k) => {
         return <div className='col-6 md-3'>
         <FeedsCard url={k.image_url} title={k.name} description={k.description} price={k.price} color={k.color}/>
         </div>
        })}
        </div>
    
      </div>

    </div>
  )
}

{/* <div className='row gx-6'>
          <div className='col-6 md-3'>
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259472453840896/IMG-20220830-WA0016.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259472827121674/IMG-20220823-WA0052.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259473225592902/IMG-20220823-WA0022.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259473590485053/IMG-20220729-WA0000.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259473972166747/IMG-20220715-WA0001.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259474307723334/IMG-20220617-WA0022.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259474651656272/IMG-20220608-WA0013.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259474899124334/IMG-20220602-WA0036.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259475209502770/IMG-20220603-WA0019.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259946787680376/IMG-20220303-WA0007.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />

          
          <div className='col-6 md-3'>
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259947022553128/IMG-20220306-WA0031.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259947257438238/IMG-20220308-WA0012.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259947521679420/IMG-20220314-WA0028.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259947773341746/IMG-20220320-WA0003.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259948008218754/IMG-20220327-WA0034.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259948259881081/IMG-20220405-WA0025.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259948880629821/IMG-20220602-WA0053.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259948498948246/IMG-20220425-WA0010.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259948259881081/IMG-20220405-WA0025.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />
            <FeedsCard url='https://cdn.discordapp.com/attachments/1000276792050982913/1027259948008218754/IMG-20220327-WA0034.jpg' title='Kurti' description='123' price='1234' itemCart={itemCart} updateCart={updateCart} />

          </div>
        </div> */}
