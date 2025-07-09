import React from 'react'
import { BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,
  BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill } from 'react-icons/bs'
  import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside id='sidebar'>
    <div className='sidebar-title'>
      <div className='sidebar-brand'>
        <BsCart3 className='icon_header'/>SHOP
      </div>
      <span className='icon close_icon'>X</span>
    </div>
    <ul className='sidebar-list'>
      <li className='sidebar-list-item'>
        
        <BsGrid1X2Fill className='icon'/><Link to='/'>Dashboard </Link></li>
        <li className='sidebar-list-item'>
        <BsFillArchiveFill className='icon'/>
        <Link to='/Products'>Products </Link></li>
        <li className='sidebar-list-item'>
        <BsFillGrid3X3GapFill className='icon'/><Link to='/Categories'>Categories</Link></li>
        <li className='sidebar-list-item'>
        <BsPeopleFill className='icon'/><Link to='/Customers'>Customers </Link></li>
        <li className='sidebar-list-item'>
        <BsListCheck className='icon'/><Link to='/Inventory'>Inventory</Link></li>
        <li className='sidebar-list-item'>
        <BsMenuButtonWideFill className='icon'/><Link to='/Reports'>Reports</Link></li>
       <li className='sidebar-list-item'>
         <BsFillGearFill className='icon'/><Link to='/Setting'>Setting</Link></li>
      

    </ul>
    </aside>
  )
}

export default Sidebar