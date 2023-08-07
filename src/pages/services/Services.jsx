import Navbar from '../home/Navbar';
import Styles from './Services.module.css'
import Footer from '../home/Footer'

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
      <div className={Styles.Categoriesc}>
        <div className={Styles.Categories}>
          <h1>Categories</h1>
        </div>
        <div className={Styles.Categories1}>
          <table>
            <tr>
              <th>  <div className={Styles.cat}>Personal</div>  <i class="fa-solid fa-caret-down"></i> </th>
              <th> <div className={Styles.cat}>Entertaiment</div> <i class="fa-solid fa-caret-down"></i></th>
              <th> <div className={Styles.cat}>Web Development</div> <i class="fa-solid fa-caret-down"></i></th>
              <th> <div className={Styles.cat}>Portfolio</div> <i class="fa-solid fa-caret-down"></i></th>
              <th> <div className={Styles.cat}>Technology</div> <i class="fa-solid fa-caret-down"></i> </th>
            </tr>
          </table>

        </div>

        <div className={Styles.Payment}>
          <div className={Styles.Payment1}>
            <h1>Payment Plans</h1>
          </div>
          <div className={Styles.Mpayment}>
            <div className={Styles.payment2}>
              <h3>Free</h3>
              <p>Rs 0/month</p><br />
              <p><i class="fa-solid fa-check"></i> Free Membership</p>
              <p><i class="fa-solid fa-check"></i> 30Gb Storage</p>
              <p><i class="fa-solid fa-check"></i> 1 Personal Email</p> <br />

              <button>Get Started <i class="fa-solid fa-angle-right"></i> </button>

            </div>

            <div className={Styles.payment3}>
              <h3> Premium</h3>
              <p>Rs 1000/month</p><br />
              <p><i class="fa-solid fa-check"></i> Free Membership</p>
              <p><i class="fa-solid fa-check"></i> 1000Gb Storage</p>
              <p><i class="fa-solid fa-check"></i> 2 Personal Email</p>
              <p><i class="fa-solid fa-check"></i> 1 FTP Account</p><br />

              <button>Get Started <i class="fa-solid fa-angle-right"></i> </button>
            </div>
          </div>


        </div>


        <div className={Styles.Refundpolicy}>
          <div className={Styles.refund}>
            <h1>Refund Policy</h1>
          </div>
          <div className={Styles.refund1}>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

          </div>

        </div>

        <div className={Styles.qA}>
          <div className={Styles.qA1}>
            <h1>Q&A</h1>
          </div>
          <div className={Styles.qA2}>
          <table>
            <tr>
              <th> What do you want? <i class="fa-solid fa-caret-down"></i> </th>
              <th> What do you want? <i class="fa-solid fa-caret-down"></i></th>
              <th> What do you want? <i class="fa-solid fa-caret-down"></i></th>
              <th> What do you want? <i class="fa-solid fa-caret-down"></i></th>
              <th> What do you want? <i class="fa-solid fa-caret-down"></i> </th>
            </tr>
          </table>

          </div>

        </div>














      </div>


        <Footer/>

    </>
  );
}

export default Services;
