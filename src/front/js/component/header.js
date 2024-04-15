import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from "react-icons/bs"

export function Header({openSidebarToggle}) {
  return (
    <div className="header">
        <div className="menu-icon">
            <BsJustify className='icon' onClick={openSidebarToggle}/>
        </div>
        <div className="header-right">
            <BsFillBellFill className="icon"/>
            <BsFillEnvelopeFill className="icon"/>
            <BsPersonCircle className="icon"/>
        </div>
    </div>
  )
}

export default Header