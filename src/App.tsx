import React from 'react';
import Products from './Components/Products/Products'
import Navbar from './Components/Navbar/Navbar';

import Globalstyle from './styles/global';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Globalstyle/>
      <Navbar/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
