import React from 'react';
import Products from './Components/Products/Products'
import Navbar from './Components/Navbar/Navbar';

import Globalstyle from './styles/global';
import Footer from './Components/Footer/Footer';

import {store} from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
      <Provider store={store}>
        <Globalstyle/>
        <Navbar/>
        <Products/>
        <Footer/>
      </Provider>
  );
}

export default App;
