import React from 'react'
import './Journey.css'
// import images from asstets 
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
const Journey = () => {
  return (
    <div className='container text-center mt-5 mb-5 py-5'> 
        <div>
            <h6 className='journey-h6'>Why Join Our Waitlist?</h6>
            <h4 className='journey-h4'>Get Ready to Revolutionize Your Learning Journey!</h4>
            <p className='journey-p'>Explore our curated selection of featured courses and programs designed to ignite your passion for learning and propel you <br />towards success. From cutting-edge technology to timeless artistry, we have something for every learner. Dive in and discover <br />your next big breakthrough today!</p>
        </div>

      {/* image  */}
      <div>
        <div className='journey-img py-5'>
          <img src={img2} alt="" className='img-fuild'/>
          <img src={img3} alt="" className='img-fuild'/>
          <img src={img4} alt="" className='img-fuild'/>
        </div>
        <div className='journey-img'>
          <img src={img5} alt="" className='img-fuild'/>
          <img src={img6} alt="" className='img-fuild'/>
          <img src={img7} alt="" className='img-fuild'/>
        </div>
      </div>
    </div>
  )
}

export default Journey