import Header from './pages/home/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Products from './pages/product/Products';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import Team from './pages/OurTeam/Team';
import About from './pages/About/About';
import Vision from './pages/Vission/Vision';
import Mission from './pages/mission/Mission';
import './pages/home/responsive.css';

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
          <Route path="/company" Component={About} />
          <Route path="/about us" Component={About} />
          <Route path='/team' Component={Team} />
          <Route path='/vision' Component={Vision} />
          <Route path='/mission' Component={Mission} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;