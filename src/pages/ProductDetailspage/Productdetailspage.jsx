import React from 'react'
import Navbar from '../home/Navbar';
import Footer from '../home/Footer'
import Styles from './Productdetailspage.module.css'
import webproduct from '../../images/webproduct.png'

import {Link, useParams} from 'react-router-dom';
import Product from '../home/Product';

function Productdetailspage() {
    const products = [
        {
          image: webproduct,
          title : "Trend website Template",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Ecommerce website",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Pure html css",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
          image: webproduct,
          title : "React project",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Wordpress Template",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Django Project",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
          image: webproduct,
          title : "Travel recording website",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Sweet Memories",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "React Restruent Management system",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
          image: webproduct,
          title : "School Mangement System",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Manage inventory",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Porfoloio website",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
      ];

      const { productId } = useParams();
      const product = products[productId];
    return (

        <div className={Styles.header}>
            <div className={Styles.navigation}>
                <Navbar backgroundColor="Black" />
                <div className={Styles.productdetails}>
                    <div className={Styles.pdh}>
                       <Link to="/Products">Product</Link>  <i class="fa-solid fa-angle-right"></i> <span>Details</span>
                    </div>
                    <div className={Styles.products}>
                        <div className={Styles.productimg}>
                            <img src={product.image} alt="" />
                        </div>
                        <div className={Styles.productd}>
                            <h3>{product.title}</h3>
                            <p>{product.cost}</p>

                            <button>BuyNow</button> <br />

                            <button>Add to cart</button>

                            <p>Categories: E-commerce</p>


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
        </div>
    );
}

export default Productdetailspage;