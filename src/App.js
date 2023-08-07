import Header from './pages/home/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Products from './pages/product/Products';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import About from './pages/About/About';



function App() {
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
          <Route path="/company/about" Component={About} />
          {/* <Route path="/company/about" Component={About} /> */}
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
