import Navbar from '../home/Navbar';
import './product.css'

function Product() {
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
      </>
    );
  }

export default Product;
  