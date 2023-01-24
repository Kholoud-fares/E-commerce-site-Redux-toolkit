import React from 'react'
import image from '../../assets/images/input.png'
import './account.css'

export default function Account() {
  return (
    <div>
      <section className='accountInfo'>
        <div className="container boxItems">
          <h1>Account Information</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input type="file" accept='image/*' alt='imgs' />
                <img src={image} alt="" className='image-preview'/>
              </div>
            </div>
            <div className="right">
                  <label>Username</label>
                  <input type="text" required/>
                  <label>Email</label>
                  <input type="text" required/>
                  <label>Password *</label>
                  <input type="password" required/>
                  <button className='button'>Update</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
