import React, { useState } from 'react';
import Navbar from '../home/Navbar';
import Styles from './Product.module.css';
import { AiOutlineRight } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import Product from '../home/Product';
import Footer from '../home/Footer';



function Products() {
  const [displayCount, setDisplayCount] = useState(6); // Initial display count
  const [searchQuery, setSearchQuery] = useState('');

  const loadMoreProducts = () => {
    setDisplayCount(displayCount + 3);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
    return (
      <>
        <div className={Styles.header}>
            <div className={Styles.navigation}>
                <Navbar />
                <div className={Styles.hero_section}>
                    <div className={Styles.title}>Our Products</div>
                </div>
            </div>
        </div>

        <div className={Styles.product_section}>
          <div className={Styles.search}>
            <div className={Styles.heading}>Multi-Purpose Templates</div>
            <div className={Styles.searchbar}>
              <input className={Styles.searchbutton} placeholder='Search....' onChange={handleSearchChange} value={searchQuery} type="text" />
              {searchQuery && ( 
              <button className={Styles.clearButton} onClick={() => setSearchQuery("")}>
                Clear
              </button>
            )}
              <BiSearch className={Styles.lens} />
            </div>
          </div>
          <div className={Styles.product}>
            <Product productsCount = {displayCount}  searchQuery={searchQuery} />
          </div>

          <div className={Styles.btn}>
            <button onClick={loadMoreProducts}>View More <AiOutlineRight /></button>
          </div>
        </div>
        
        <Footer/>
      </>
    );
  }

  



export default Products;
  