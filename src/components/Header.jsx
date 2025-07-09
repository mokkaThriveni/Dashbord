import React from 'react'
import { BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify } from 'react-icons/bs'

function Header() {
  return (
    <header className='header'>

    <div className='menu_icon'>
      <BsJustify className='icon'/>
    </div>
    <div className='header_left'>
      <BsSearch className='icon'/>
      </div>
      <div className='header_right'>
      <BsFillBellFill className='icon'/>
      <BsFillEnvelopeFill className='icon'/>
      <BsPersonCircle className='icon'/>
      </div>


    </header>
  )
}

export default Header