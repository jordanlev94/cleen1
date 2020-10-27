import React from 'react';
import {Link} from 'react-router-dom'
import data from '../data';
import './Products.css';


function Home() {

    
    return  <ul className="products">
    {
      data.products.map(product =>
        <li>
        <div className="product">
           
        <img className="product-image" src={product.image} alt="product" />
        <div className="product-name"> 
         <Link to={'/product/' + product._id}> {product.name} </Link>
            </div>
      <div className='product-marque'> {product.marque}</div>
        <div className="product-prix"><b> {product.prix} $</b></div>
        <div className="product-rating">{product.rating} ÉTOILES ({product.numReviews}) </div>
        <br/></div>
    </li> )
        
    }
   
      
  </ul>
}


export default Home;