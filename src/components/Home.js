import React from 'react'
import Carousell from './Carousell';
import Navbar from './Navbar';
import Footer from './Footer';
import Grid from './Grid';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousell/>
      <Grid />
      <Footer />
      
    </div>
  )
}
