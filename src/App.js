import Header from './pages/home/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Products from './pages/product/Products';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import Team from './pages/OurTeam/Team';
import About from './pages/About/About';
import Vision from './pages/Vission/Vision';
import Mission from './pages/Mission/Mission';
import Productdetailspage from './pages/ProductDetailspage/Productdetailspage';
import Blog_detail from './pages/Blog_detail/Blog_detail';
import Payment from './pages/payment/Payment';
import Cart from './pages/cart/Cart';
import { useState } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import Register from './pages/RegisterPage/Register';


function App() {
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const cartItemCount = cart.length;
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Header} />
          <Route path="/home" Component={Header} />
          <Route path="/products" Component={Products} />
          <Route path="/services" Component={Services} />
          <Route path="/contact" Component={Contact} />
          <Route path="/blog" Component={Blog} />
          <Route path="/company" Component={About} />
          <Route path="/about us" Component={About} />
          <Route path='/team' Component={Team} />
          <Route path='/vision' Component={Vision} />
          <Route path='/mission' Component={Mission} />
          <Route path="/productdetailspage/:productId"  Component={() => <Productdetailspage addToCart={addToCart} />} />
          <Route path='/blog_detail/:blogId' Component={Blog_detail} />
          <Route path='/payment' Component={Payment} />
          <Route path='/login' Component={LoginPage} />
          <Route path='/register' Component={Register} />
          <Route path='/cart' Component={() => <Cart cart={cart} cartItemCount={cartItemCount} />} />
          {/* <Route path="/cart" component={() => <Cart cart={cart} />} /> */}
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;