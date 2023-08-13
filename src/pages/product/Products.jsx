import React, { useState } from 'react';
import Navbar from '../home/Navbar';
import Styles from './Product.module.css';
import { AiOutlineRight } from 'react-icons/ai';
import Product from '../home/Product';
import Footer from '../home/Footer';


function Products() {
  const [displayCount, setDisplayCount] = useState(6); // Initial display count

  const loadMoreProducts = () => {
    setDisplayCount(displayCount + 3); // Increment display count by 3
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
          <div className={Styles.heading}>Multi-Purpose Templates</div>
          <div className={Styles.product}>
            <Product productsCount = {displayCount}/>
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
  