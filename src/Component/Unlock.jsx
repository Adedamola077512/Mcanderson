import React from 'react'
import './Unlock.css'
import mask from '../assets/mask.png'
const Unlock = () => {
  return (
    <div className='unlock'>
        <div >
            <h6 className='unlock-h6'>Exciting features</h6>
            <h4 className='unlock-h4'>Unlock Your Potential with Our Featured Offerings</h4>
            <p className='unlock-p'>Don't miss out on this opportunity to be part of something extraordinary. Join our waitlist now to <br />secure your spot and be at the forefront of the future of learning.</p>
            <div className='unlock-flex mt-5 py-5'>
                <div>
                    <h5 className='unlock-6d'>Discover learning from anywhere</h5>
                    <p className='unlock-why'>Why confine yourself to a lecture hall when you have the <br />freedom to learn from the comfort of your home, the <br />serenity of the beach, the creativity of a recording studio, or <br />the familiarity of your own shop?</p>
                    {/* learn  */}
                    <div className='unlock-learn'>
                        <h5 className='unlock-6d'>Learn for prosperity</h5>
                        <p  className='unlock-why'>Whether you're charting a career path, embracing fresh <br />challenges, or acquiring new skills for professional growth, <br />we're here to guide you toward achieving your goals.</p>
                    </div>
                </div>
                {/* Image */}
                <div>
                    <img src={mask} alt="" className='unlock-img'/>
                </div>

                {/* section 3 */}
                <div>
                    <h5 className='unlock-6d'>Learn from most proficient</h5>
                    <p  className='unlock-why'>Our educators are meticulously chosen to ensure optimal <br />learning outcomes. They are experts in their respective <br /> fields, dedicated to providing you with the quality education <br /> you deserve.</p>
                    {/* <div></div> */}
                    <div className='unlock-learn'>
                        <h5 className='unlock-6d'>Learning becomes a community experience</h5>
                        <p className='unlock-why'>Learners unite to exchange knowledge, collaborate, and <br />elevate their comprehension. Your learning journey is <br />shared, not solitary.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Unlock