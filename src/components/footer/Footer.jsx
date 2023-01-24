import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'

export default function Footer() {
  return (
    <div>
       <footer className='boxItems'>
           <div className="container flex">
               <p>Cartesy Medicine - All right reserved</p>
               <div className="social">
                   <BsFacebook className='icon'/>
                   <AiFillTwitterCircle className='icon'/>
                   <AiFillLinkedin className='icon'/>
                   <RiInstagramFill className='icon'/>
               </div>
           </div>
       </footer>
    </div>
  )
}
