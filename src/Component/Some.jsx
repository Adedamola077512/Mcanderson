import React from 'react'
import './Some.css'
import logo2 from '../assets/Logo2.png'
import logo3 from '../assets/Logo3.png'
import logo4 from '../assets/Logo4.png'
import logo5 from '../assets/Logo5.png'
import logo6 from '../assets/Logo6.png'
import logo7 from '../assets/Logo7.png'
const Some = () => {
  return (
    <div className='container' style={{backgroundColor: '#f5fefe'}}>
        <div className='py-5 m-1'>
          <h6 className='text-center'>Some of Our Partners</h6>
          <marquee behavior="" direction="">
            <div className='container some-flex'>
              <img src={logo2} alt="" className='mx-5 some-img' />
              <img src={logo3} alt="" className='mx-5 some-img'/>
              <img src={logo4} alt="" className='mx-5 some-img' />
              <img src={logo5} alt="" className='mx-5 some-img' />
              <img src={logo6} alt="" className='mx-5 some-img' />
              <img src={logo7} alt="" className='mx-5 some-img' />
            </div>
          </marquee>
        </div>
    </div>
  )
}

export default Some