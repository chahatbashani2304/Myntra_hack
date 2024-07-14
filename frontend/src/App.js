
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import Thanks from './Pages/Thanks';
import RecyclePage from './Pages/Recycle';
import Suspage from './Pages/sustainable';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>} />
        <Route path='product' element={<Product />}>
          <Route path=':productId' element={<Product/>} />
        </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} />
      <Route path='/thanks' element={<Thanks />}/>
      <Route path='/recycle' element={<RecyclePage />} />
      <Route path='/sustainable' element={<Suspage />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    window.__be = window.__be || {};
    window.__be.id = "6691b984cec7f300077213e3";
    (function() {
      var be = document.createElement('script'); 
      be.type = 'text/javascript'; 
      be.async = true;
      be.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
      var s = document.getElementsByTagName('script')[0]; 
      s.parentNode.insertBefore(be, s);
    })();
  }, []);

  return (
    <noscript>
      You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
    </noscript>
  );
};

export default ChatBot;


export default App;
