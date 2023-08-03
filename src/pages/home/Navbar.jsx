import React, { useState } from 'react';
import Styles from './Navbar.module.css';
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
                <div className={Styles.navbar}>
                    <div className={Styles.logo}>
                        DarkProg
                    </div>
                    <div className={Styles.menu}>
                        <ul>
                            {menu.map((item, index) => (
                            <li key={index}>
                                {item === 'Company' ? (
                                <>
                                   <div className={Styles.menu_items} onClick={toggleDropdown}> 
                                    {item} <AiOutlineDown className='down'/>
                                    </div>
                                    {isDropdownOpen && (
                                    <div className={Styles.dropdown}>
                                        {dropdownmenu.map((items, index) =>(
                                            <li key={index}>{items}</li>
                                        ))}
                                    </div>
                                    )}
                                </>
                                ) : (
                                <Link to={`/${item.toLowerCase()}`} className={Styles.menu}>{item}</Link>
                                )}
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className={Styles.profile}>
                        <BsFillPersonFill className="icons" />
                        <BsCart3 className="icons" />
                    </div>
                </div>
      </>
    );
  }
  
export default Navbar;
  