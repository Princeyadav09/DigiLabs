import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Messaging from './components/Messaging';
import Product from './components/Product.jsx';
import Features from './components/Features.jsx';
import Locksout from './components/Locksout.jsx';
import Blog from './components/Blog.jsx';
import Search from './components/Search';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <>
      <Home />
      <Messaging />
      <Product />
      <Features />
      <Locksout />
      <Blog />
      <Search />
      <Footer />
      </>
    </>
  );
}

export default App;
