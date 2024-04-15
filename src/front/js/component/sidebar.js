import React from 'react'
import {BsCart3,BsGrid1X2Fill, BsFillArchiveFill,BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsBoxArrowRight  } from "react-icons/bs"
export function Sidebar({openSidebar, openSidebarToggle}) {
  return (
    <aside className={`sidebar ${openSidebar ? "sidebar-responsive":""}`}>
        <div className='sidebar-title'>
            <div className="sidebar-brand">
                <BsCart3 className="icon-header"/>SHOP
            </div>
            <span className="icon close_icon" onClick={openSidebarToggle}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsGrid1X2Fill className='icon'/>Dashboard
                </a>
            </li>
            <li className='sidebar-list-item' >
                <a href='' className='sidebar-link'>
                    <BsFillArchiveFill className='icon'/>Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsFillGrid3X3GapFill className='icon'/>Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsPeopleFill className='icon'/>Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsListCheck className='icon'/>Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsMenuButtonWideFill className='icon'/>Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsFillGearFill className='icon'/>Settings
                </a>
            </li>
            <li className='logout sidebar-list-item'>
                <a href='' className='sidebar-link'>
                    <BsBoxArrowRight className='icon'/>Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar