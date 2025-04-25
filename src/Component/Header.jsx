import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header py-5'>
        <div className='container header-flex'>
            <div>
                <h2 className='header-h2'>One of the best learning <br />management system <br />tools available</h2>
                <p className='header-p'>Our comprehensive eLearning platform is on a mission to empower <br />
                individuals like you with expert-led classes, personalized mentorship, and <br />
                seamless connections to job opportunities.</p>
            </div>
            <div className='header-form'>
                <h5 className='header-h5'>Be part of McAnderson’s early users. <br />Join the waitlist now!</h5>
                <h6 className='header-h6'>Enter the fields below to get started</h6>
                <input type="text" placeholder='First Name' className='input' /><br />
                <input type="email" placeholder='Email' className='input' /><br />
                <button className='header-btn'>join waitlist</button>
            </div>
        </div>
    </div>
  )
}

export default Header