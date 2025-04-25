import React from 'react'
import Header from '../Component/Header'
import Some from '../Component/Some'
import Journey from '../Component/Journey'
import Unlock from '../Component/Unlock'
import Frequently from '../Component/Frequently'
import Footer from '../Component/Footer'
const TopMenuItem = () => {
  return (
    <div>
        <Header />
        <Some />
        <Journey />
        <Unlock />
        <Frequently />
        <Footer/>
    </div>
  )
}

export default TopMenuItem