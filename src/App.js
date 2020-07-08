import React from 'react';
import './App.css';
import About from './About';
import Home from './Home';
import Product from './Product';
import ProductDetails from './ProductDetails';
import ProductHome from './ProductHome';
import { Routes, Route, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';     //  useNavigate  can also be import from here

function NotFound(){
  return <div> Path Not Found </div>
}

function App() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Link to="/">Home</Link> {' '}
        <Link to="about">About</Link> {' '}
        <Link to="Product">Product</Link>{' '}
        <Link to="/Product/Mobile">Mobile</Link>{' '}
        <Link to="/Product/Laptop">Laptop</Link> 
        <button onClick={ ()=>{ 
          navigate('/about'); 
          } }>
            Display About Page
            </button>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} > </Route>
        <Route path="about" element={<About/>}> </Route>        
        <Route path="Product" element={<Product/>}> 
          <Route path="/" element={<ProductHome/>}></Route>  {/*This will give  details about Product Button*/}
          <Route path=":productID" element={<ProductDetails/>}></Route>  </Route>
        {/* <Route path="Product/:ProductID" element={<Product/>}> </Route>  This will product content product content which is in URL */}  
        <Route path="*" element={<NotFound/>}> </Route>
      </Routes>
    </div>
  ); 
}



export default App;