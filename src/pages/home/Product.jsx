import Styles from './Header.module.css';
import webproduct from '../../images/webproduct.png'

function Product() {
    return (
        <div className={Styles.container}>
            <div className={Styles.banner}>
                <img src={webproduct} alt="" />
            </div>
            <div className={Styles.title1}>Trend website Template</div>
            <div className={Styles.description1}>Trend is an attractive fashion website template with a jaw-dropping animated zoom-in transition of banner images.</div>
            <div className={Styles.cost}>NRP. 2500/Year</div>
        </div>
    );
  }

export default Product;