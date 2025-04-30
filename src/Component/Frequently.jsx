import React from 'react';
import './Frequently.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Frequently = () => {
  return (
    <div className='text-center mt-5 py-5 Frequently' id='FAQ'>
      <h6 className='fre-h6'>Tagline here</h6>
      <h4 className='fre-h4'>Frequently Asked Questions</h4>

      <div className='card mt-5 mx-auto p-4' style={{ maxWidth: '600px', borderRadius: '10px' }}>
        <h6 className='card-h6 mb-2'>Can I take a course for free?</h6>
        <p className='card-p mb-3'>See the most commonly asked questions and answers.</p>
        <a href="#" className='card-a d-inline-flex align-items-center'>
          Learn more <FaArrowRightLong className='ms-2' />
        </a>
      </div>


      {/* accordion */}
      <div className="accordion-container mt-4 mx-auto" style={{ maxWidth: '700px' }}>
        <Accordion flush>
          <Accordion.Item eventKey="0" className='accordion-gap'>
            <Accordion.Header>Will I take an assessment to start?</Accordion.Header>
            <Accordion.Body>
              Yes! You'll take a quick assessment to get personalized recommendations.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className='accordion-gap'>
            <Accordion.Header>How do I process refunds?</Accordion.Header>
            <Accordion.Body>
              Go to Billing in your account, select the purchase, and click "Request Refund." <br />
              Processing takes 5–7 days.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className='accordion-gap'>
            <Accordion.Header>How to pay the tuition fee?</Accordion.Header>
            <Accordion.Body>
              Go to Billing, choose your course, and follow the steps to pay securely online.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className='accordion-gap'>
            <Accordion.Header>Is the program beginner-friendly?</Accordion.Header>
            <Accordion.Body>
              Yes, all programs are designed to be beginner-friendly with step-by-step guidance.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" className='accordion-gap'>
            <Accordion.Header>Can I transfer to another program after applying?</Accordion.Header>
            <Accordion.Body>
              Yes, you can transfer to another program—just contact support to get started.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      {/* Question */}
      <div className='question mt-2'>
        <h5 className='question-h5'>Still have questions?</h5>
        <p className='question-p'>if you couldn't your question, get in contact with us now to get your answers </p>
        {/* link to contact page */}
        <Link to="/Contact" className='question-btn'>Contact us</Link>
        {/* <Link to="/Contact" className='question-btn'>Contact us</Link> */}
        {/* <button className='question-btn'>Contact us</button> */}
      </div>
    </div>
  );
};

export default Frequently;
