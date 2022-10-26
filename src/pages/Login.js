import React from 'react'
import { useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

function Login() {
    const navigate = useNavigate();
    // const history = useHistory();
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const [token, setToken] = useState({success : false , token : ""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        let header = new Headers();
        

        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');

        header.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        header.append('Access-Control-Allow-Credentials', 'true');
        header.append('GET', 'POST', 'OPTIONS');
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json()
        setToken({success : json.success, token : json.token})
        console.log(json)
        
        console.log(token.success)
        if(token.success){
            localStorage.setItem('token' , JSON.stringify(token));
            navigate('/');
            console.log(localStorage.getItem('token'))
            // history.push('/');
        }
        else{
            alert('wrong credentials')
        }
        

    }
    
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }
    return (
        <div className='container ml-9'>
            <Navbar token={token} setToken = {setToken}/>
            <h1> Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={onChange} name='email'value={credentials.email} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={onChange} value={credentials.password} name='password' />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Login
