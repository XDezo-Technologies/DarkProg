import React, { useState } from 'react';
import Styles from './Navbar.module.css';
import { BsFillPersonFill, BsCart3 } from 'react-icons/bs';
import {AiOutlineDown} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar({ backgroundColor }) {
    const menu = ['Home', 'Products', 'Services', 'Blog', 'Company', 'Contact'];
    const dropdownmenu = ['About Us', 'Team', 'Mission', 'Vision'];

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };
    return (
      <>
                <div className={Styles.navbar} style={{ backgroundColor }}>
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
                                            <li key={index}><Link to={`/${items.toLowerCase()}`} className={Styles.menu_items}>{items}</Link></li>
                                        ))}
                                    </div>
                                    )}
                                </>
                                ) : (
                                <Link to={`/${item.toLowerCase()}`} className={Styles.menu_items}>{item}</Link>
                                )}
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className={Styles.profile}>
                        <BsFillPersonFill className={Styles.icons} />
                        <BsCart3 className={Styles.icons} />
                    </div>
                </div>
      </>
    );
  }
  
export default Navbar;
  