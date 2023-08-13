import Styles from './Header.module.css';
import webproduct from '../../images/webproduct.png'
import {Link} from 'react-router-dom';

function Product(props) {

    const products = [
        {
          image: webproduct,
          title : "Trend website Template",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Trend website Template",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Trend website Template",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
          image: webproduct,
          title : "Trend website Template",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Trend website Template",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Trend website Template",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
          image: webproduct,
          title : "Trend website Template",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Trend website Template",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Trend website Template",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
          image: webproduct,
          title : "Trend website Template",
          desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
          cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Trend website Template",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
        {
            image: webproduct,
            title : "Trend website Template",
            desc : "Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.",
            cost : "NRP. 2500/Year",
        },
      ];

      const displayedProducts = products.slice(0, props.productsCount);

    return (
        <div className={Styles.product}>
            {displayedProducts.map((item, index) => (
                <div key={index} className={Styles.container}>
                    <div className={Styles.banner}>
                        <Link to="/Productdetailspage"><img src={item.image} alt="" /></Link>
                    </div>
                    <div className={Styles.content}>
                        <div className={Styles.title1}>
                            <Link to="/Productdetailspage">{item.title}</Link>
                        </div>
                        <div className={Styles.description1}>{item.desc}</div>
                        <div className={Styles.cost}>{item.cost}</div>
                    </div>
                </div>
            ))}
        </div>
    );
  }




  

export default Product;