import Header from './pages/home/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Product from './pages/product/Product';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Header} />
          <Route path="/home" Component={Header} />
          <Route path="/product" Component={Product} />
          <Route path="/services" Component={Services} />
          <Route path="/contact" Component={Contact} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
