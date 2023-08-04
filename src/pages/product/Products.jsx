import Navbar from '../home/Navbar';
import Styles from './Product.module.css';
import { AiOutlineRight } from 'react-icons/ai';
import Product from '../home/Product';


function Products() {
    return (
      <>
        <div className="header">
            <div className="navigation">
                <Navbar />
                <div className="hero-section">
                    <div className="title">Our Products</div>
                </div>
            </div>
        </div>

        <div className={Styles.product_section}>
          <div className={Styles.heading}>Multi-Purpose Templates</div>
          <div className={Styles.product}>
            <Product />
            <Product />
            <Product />
          </div>
          <div className={Styles.btn}>
            <button>View More <AiOutlineRight /></button>
          </div>
        </div>
      </>
    );
  }

export default Products;
  