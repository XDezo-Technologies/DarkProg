import React, { useState } from 'react';
import './home.css';
import { BsFillPersonFill, BsCart3 } from 'react-icons/bs';
import {AiOutlineDown} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
    const menu = ['Home', 'Product', 'Services', 'Blog', 'Company', 'Contact'];
    const dropdownmenu = ['About Us', 'Our Team', 'Mission', 'Vision'];

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };
    return (
      <>
                <div className="navbar">
                    <div className="logo">
                        DarkProg
                    </div>
                    <div className="menu">
                        <ul>
                            {menu.map((item, index) => (
                            <li key={index}>
                                {item === 'Company' ? (
                                <>
                                   <div className='menu-items' onClick={toggleDropdown}> 
                                    {item} <AiOutlineDown className='down'/>
                                    </div>
                                    {isDropdownOpen && (
                                    <div className="dropdown">
                                        {dropdownmenu.map((items, index) =>(
                                            <li key={index}>{items}</li>
                                        ))}
                                    </div>
                                    )}
                                </>
                                ) : (
                                <Link to={`/${item.toLowerCase()}`} className='menu-items'>{item}</Link>
                                )}
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="profile">
                        <BsFillPersonFill className="icons" />
                        <BsCart3 className="icons" />
                    </div>
                </div>
      </>
    );
  }
  
export default Navbar;
  