import Navbar from '../home/Navbar';
import Styles from './Services.module.css'

function Services() {
  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.navigation}>
          <Navbar />
          <div className={Styles.hero_section}>
            <div className={Styles.title}>Our Services</div>
          </div>
        </div>
      </div>
      <div className={Styles.Content}>
          <div className={Styles.title1}>
            <h1>Services</h1>
            <div className={Styles.box}>
              <div className={Styles.box1}>
                <i class="fa-solid fa-mobile-screen-button"></i>
                <h2>Consulation</h2>
                <p>In publishing and graphic design, Lorem ipsum is a <br />placeholder text commonly used to demonstrate the visual form of a document<br /> or a typeface without relying on meaningful content.</p>

              </div>
              <div className={Styles.box2}>
                <i class="fa-solid fa-lightbulb"></i>
                <h2>Best Ideas</h2>
                <p>In publishing and graphic design, Lorem ipsum is a <br />placeholder text commonly used to demonstrate the visual form of a document or<br /> a typeface without relying on meaningful content.</p>

              </div>
              <div className={Styles.box3}>
                <i class="fa-solid fa-gear"></i>
                <h2>Simple Setting</h2>
                <p>In publishing and graphic design, Lorem ipsum is a <br />placeholder text commonly used to demonstrate the visual form of a document or<br /> a typeface without relying on meaningful content.</p>
              </div>

            </div>
          </div>
        </div>
      <div className='Categoriesc'>
        <div className='Categories'>
          <h1>Categories</h1>
        </div>
        <div className='Catergories1'>
          <h6>Personal</h6>
          <h6>Personal</h6>
          <h6>Personal</h6>
          <h6>Personal</h6>
          <h6>Personal</h6>

        </div> 
        










      </div>


    </>
  );
}

export default Services;
