import React, { useState } from 'react';
import './home.css';
import Navbar from './Navbar';

function Header() {
    return (
      <>
        <div className="header">
            <div className="navigation">
                <Navbar />
                <div className="hero-section">
                    <div className="title">discover your perfect website <br /> template</div>
                    <div className="wellcome-message">
                        Welcome to Darkprog, where creativity meets functionality. We offer a curated <br /> 
                        collection of exquisite website templates to cater to all your online needs. 
                    </div>
                    <button>Browse Template</button>
                </div>
            </div>
        </div>
      </>
    );
  }

export default Header;
  