import React from 'react'
import './Footer.css'
import { FaFacebook,  FaTwitter, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import logo from '../assets/whitelogo.png'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt="" className='footer-img'/>
        <div className='footer-flex'>
            <span><FaFacebook className='icon'/></span>
            <span><FaTwitter className='icon'/></span>
            <span><FaInstagram className='icon'/></span>
            <span><CiLinkedin className='icon'/></span>
            <span><FaYoutube className='icon'/></span>

        </div>
    </div>
  )
}

export default Footer