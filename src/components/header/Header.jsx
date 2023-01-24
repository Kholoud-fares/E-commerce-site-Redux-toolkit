import React from 'react'
import Medicine from "../../assets/images/Medicine.svg"
import "./header.css"
import {AiOutlineSearch} from "react-icons/ai"
import Card from './Card'
import User from './User'
import { Link } from 'react-router-dom'

function Header() {
    window.addEventListener('scroll',function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("active",this.window.screenY > 100)
    })
    window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'})
  return (
    <div>
      <header className='header'>
          <div className="scontainer flex">
              <div className="log">
                <Link to='/'>
                 <img src={Medicine} alt="Medicine" />
                 </Link>
              </div>
              <div className="search flex">
              <AiOutlineSearch className='searchIcon'/>
              <input type="text" placeholder='Search...'/>
              </div>
              <div className="account flexCenter">
                  <Card />
                  <User />
              </div>
          </div>

      </header>
    </div>
  )
}

export default Header;
