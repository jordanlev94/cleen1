import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
// import data from '../../data';
import {getProductById} from '../../api/server'
import StripeCard from "../Stripe/StripeCard"
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function ProductScreen(props) {
     console.log(props.match.params.id);
	const [product, setProduct] = useState({})

	const _getProductById = async (id) => {
		const product = await getProductById(id)
		console.log(`%c ${new Date().toLocaleTimeString()}`,'color: greenyellow;', 'ln.12 - ProductScreen._getProductById(), product:', product)
		setProduct(product.data)
	}

	useEffect(() => {
		_getProductById(props.match.params.id)
	}, [])

	const checkout = async (event) => {
		// Get Stripe.js instance
		const stripe = await stripePromise;

		// Call your backend to create the Checkout Session
		const response = await fetch('http://localhost:5000/pay', { method: 'POST' });

		const session = await response.json();

		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer
			// using `result.error.message`.
		}
	};

    return <div>
    <div className="back-to-result">
    <Link to='/'> Back to result</Link>
    </div>
    <div className='details'>
    <div className ='details-image'>
        <img src={product.image} alt='product'/>

    </div>
	    <div style={{width: 400, height: 400}}>
		    <StripeCard/>
	    </div>
	    <div style={{width: 400, height: 400}}>
		    <button onClick={checkout}>CHECKOUT</button>
	    </div>
    <div className='details-info'>
    <ul>
        <li>
            <h4>
                {product.name}
            </h4>
        </li>
        <li>
            {product.rating} Stars ({product.numReviews}) Reviews)
        </li>
        <li>
            <b>
            Price:  <b>$ {product.prix}</b>
            </b>
        </li>
        <li>
            Description:
            <div>
                {product.description}
            </div>
        </li>
         </ul>
    </div>


    <div className='details-action'>
        <ul>
            <li>
                Price:<b>$$ {product.prix}</b>
            </li>
            <li>
            Status: {product.status}
            </li>
            <li>
                Qty: <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>

                </select>
                 {product.prix}
            </li>
            <li>
                <button> Add to Cart</button>
            </li>

        </ul>
    </div>
    </div>
    </div>
}


export default ProductScreen;
