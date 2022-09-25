import React from 'react'
import Card from './Card'

export default function Grid() {
  return (
    <div>
        <div className='row'>
            <div className='col md-4'>
               <Card url='https://cdn.discordapp.com/attachments/1000276792050982913/1023650887106834472/IMG-20220712-WA0000.jpg'  title='Kurti' description='123' price='1234'/>
            </div>
            
            <div className='col md-4'>
               <Card url='https://cdn.discordapp.com/attachments/1000276792050982913/1023650887106834472/IMG-20220712-WA0000.jpg'  title='Kurti' description='123' price='1234'/>
            </div>
            
            <div className='col md-4'>
               <Card url='https://cdn.discordapp.com/attachments/1000276792050982913/1023650887106834472/IMG-20220712-WA0000.jpg'  title='Kurti' description='123' price='1234'/>
            </div>
            
            <div className='col md-4'>
               <Card url='https://cdn.discordapp.com/attachments/1000276792050982913/1023650887106834472/IMG-20220712-WA0000.jpg'  title='Kurti' description='123' price='1234'/>
            </div>
            
        </div>
      
    </div>
  )
}
