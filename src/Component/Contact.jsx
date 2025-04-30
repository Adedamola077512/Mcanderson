import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className='contact'>
      <form className="form">
        <div className="flex">
          <label>
            <input className="input" type="text" placeholder="" required />
            <span>First Name</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Last Name</span>
          </label>
        </div>

        <label>
          <input className="input" type="email" placeholder="" required />
          <span>Email</span>
        </label>

        <label>
          <input className="input" type="tel" placeholder="" required />
          <span>Contact Number</span>
        </label>

        <label>
          <textarea className="input01" placeholder="" rows="3" required></textarea>
          <span>Message</span>
        </label>

        <button type="submit" className="fancy">
          <span className="top-key"></span>
          <span className="text">Submit</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
