import React from 'react'
import mobilead from "../assets/mobilead.webp";
import desktopad from "../assets/desktopad.webp";
import "./style/navbar.scss";

import { FiMenu , FiSearch} from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import { IoIosPerson } from 'react-icons/io';

import { MsLogo } from './svg/logo';

const Navbar = () => {
  return (
    <>
      {/* Ad */}
      <div className='mobilead'>
        <img src={mobilead} alt=""></img>
      </div>
      <div className='desktopad'>
        <img src={desktopad} alt=""></img>
      </div>

      <div className='Navbar'>
      <div className='nav-content'>
        {/* Left */}
        <div className='nav-left'>
          <FiMenu className='menu-icon' />
          <BiWorld className='menu-icon' />
          <MsLogo className={"mnslogo-left"} />
        </div>
        
        {/* Middle */}
        <div className='nav-middle'>
        <MsLogo className="mnslogo-middle" />
        <div className='nav-search-middle'>
          <input type={"search"} name="search"  />
          <FiSearch style={{width:"1.5rem",height:"1.5rem",padding:"0.25rem 0.5rem",background:"#0687e6",borderRadius:"0 0.3rem 0.3rem 0",cursor:"pointer"}}/>
        </div>
        </div>
        {/* Right */}
        <div className='nav-right'>
        <BsCart />
        <IoIosPerson />
        
        </div>

      </div>
        
      </div>

    </>
  )
}

export default Navbar