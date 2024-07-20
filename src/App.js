import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';


const App = () => {
  return(
   <div className='overflow-hidden'>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
      </Routes>
    </Router>
  </div>
  )
};

export default App;
