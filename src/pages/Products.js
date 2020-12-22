import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
// import data from '../data';
import {getProducts} from '../api/server'
import './Products.css';


function Home() {

	const [data, setData] = useState([])

	const updateProducts = async () => {
		const products = await getProducts()
		setData(products.data)
	}

	useEffect(() => {
		updateProducts()
	}, [])

	if (!data) {
		return null
	}

    return  <ul className="products">
    {
      data.map(product =>
        <li>
        <div className="product">

        <img className="product-image" src={product.image} alt="product" />
        <div className="product-name">
         <Link to={'/product/' + product._id}> {product.name} </Link>
            </div>
      <div className='product-marque'> {product.marque}</div>
        <div className="product-prix"><b> {product.prix} $</b></div>
        <div className="product-rating">{product.rating} ÉTOILES ({product.numReviews}) </div>
        <br/>
        </div>
    </li> )

    }


  </ul>
}


export default Home;
