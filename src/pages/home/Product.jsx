import Styles from './Header.module.css';
import webproduct from '../../images/webproduct.png'
import {Link} from 'react-router-dom';

function Product() {
    return (
        <div className={Styles.container}>
            <div className={Styles.banner}>
                <Link to="/Productdetailspage"><img src={webproduct} alt="" /></Link>
            </div>
            <div className={Styles.content}>
                <div className={Styles.title1}>
                    <Link to ="/Productdetailspage">Trend website Template</Link>
                    </div>
                <div className={Styles.description1}>Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.</div>
                <div className={Styles.cost}>NRP. 2500/Year</div>
            </div>
        </div>
    );
  }




  

export default Product;