import Styles from './Header.module.css';
import webproduct from '../../images/webproduct.png';
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
import {Link} from 'react-router-dom';

function Product(props) {

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

        const displayedProducts = products
          .filter((item) =>
            item.title.toLowerCase().includes(props.searchQuery?.toLowerCase() || "")
          )
          .slice(0, props.productsCount);

    return (
        <div className={Styles.product}>
            {displayedProducts.map((item, index) => (
                <div key={index} className={Styles.container} style={{
                    flex: displayedProducts.length > 1 ? "1 1 350px" : "none",
                  }}>
                    <div className={Styles.banner}>
                        <Link to={`/Productdetailspage/${index}`}><img src={item.image} alt="" /></Link>
                    </div>
                    <div className={Styles.content}>
                        <div className={Styles.title1}>
                            <Link to={`/Productdetailspage/${index}`}>{item.title}</Link>
                        </div>
                        <div className={Styles.description1}>{item.desc.split(' ').slice(0, 25).join(' ')}</div>

                        

                        <div className={Styles.cost}>NPR. {item.cost}/Year</div>
                    </div>
                </div>
            ))}
        </div>
    );
  }




  

export default Product;