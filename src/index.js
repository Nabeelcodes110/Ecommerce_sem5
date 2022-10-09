import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Checkout from './components/Checkout';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import {BrowserRouter as Router ,
  Routes ,
Route
} from "react-router-dom";
import Feed from './components/Feed';
import Profile from './components/Profile';
import Preview from './components/Preview';
import Login from './components/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      
       <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home/>}/>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='/login' element={<Login />} />
          


       </Routes>
       </Router>
        
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
