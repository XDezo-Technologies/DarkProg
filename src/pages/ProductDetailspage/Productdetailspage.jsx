import React from 'react'
import Navbar from '../home/Navbar';
import Footer from '../home/Footer'
import Styles from './Productdetailspage.module.css'
import webproduct from '../../images/webproduct.png'
import website1 from '../../images/website1.png';
import website2 from '../../images/website2.png';
import website3 from '../../images/website3.png';
import website4 from '../../images/website4.png';
import website5 from '../../images/website5.png';
import website6 from '../../images/website6.png';
import website7 from '../../images/website7.png';
import website8 from '../../images/website8.png';
import website9 from '../../images/website9.png';
import website10 from '../../images/website10.png';
import {Link, useParams} from 'react-router-dom';
import Product from '../home/Product';
import BackToTopButton from '../backToTop/Backtotop';

function Productdetailspage({ addToCart }) {
    const products = [
        {
          image: webproduct,
          title : "Trend website Template",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : 2500,
        },
        {
            image: website1,
            title : "Ecommerce website",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : 2500,
        },
        {
            image: website2,
            title : "Pure html css",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : 2500,
        },
        {
          image: website3,
          title : "React project",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : 2500,
        },
        {
            image: website4,
            title : "Wordpress Template",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : 2500,
        },
        {
            image: website5,
            title : "Django Project",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : 2500,
        },
        {
          image: website6,
          title : "Travel recording website",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : 2500,
        },
        {
            image: website7,
            title : "Sweet Memories",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : 2500,
        },
        {
            image: website8,
            title : "React Restruent Management system",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : 2500,
        },
        {
          image: website9,
          title : "School Mangement System",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : 2500,
        },
        {
            image: website10,
            title : "Manage inventory",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : 2500,
        },
        {
            image: website1,
            title : "Porfoloio website",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images. ",
            cost : 2500,
        },
      ];

      const { productId } = useParams();
        const product = products[parseInt(productId, 10)];

    return (
        <div className={Styles.header}>
            <div className={Styles.navigation}>
                <Navbar backgroundColor="Black" />
                <div className={Styles.productdetails}>
                    <div className={Styles.pdh}>
                       <Link to="/Products">Product</Link>  <i className="fa-solid fa-angle-right"></i> <span>Details</span>
                    </div>
                    <div className={Styles.products}>
                        <div className={Styles.productimg}>
                            <img src={product.image} alt="" />
                        </div>
                    
                        <div className={Styles.productd}>
                            <h3>{product.title}</h3>
                            <p><span>NPR.{product.cost}/Year</span></p>

                          <Link to ="/payment"> <button className={Styles.btn}>Buy Now</button></Link>

                          <button className={Styles.btn1} onClick={() => { addToCart(product); alert('Product added to cart'); }}>Add to Cart</button>

                           <button><a href="https://p.w3layouts.com/demos_new/template_demo/03-03-2022/finagency-liberty-demo_Free/209759279/web/index.html">Demo</a></button>
                            <h4>Categories: E-commerce</h4>


                        </div>
                    </div>

                    <div className={Styles.Content}>
                        <div className={Styles.content1}>
                            <h1>{product.title}</h1>
                        </div>
                        <div className={Styles.content2}>
                            <p>{product.desc}</p>
                        </div>

                    </div>

                    <div className={Styles.product_section}>
          <div className={Styles.heading}>Multi-Purpose Templates</div>

            <Product productsCount = {3} />
        </div>


        </div>
        </div>
            <Footer/>
            <BackToTopButton />
        </div>
    );
}

export default Productdetailspage;
