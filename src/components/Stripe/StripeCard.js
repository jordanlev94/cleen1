import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import CheckoutForm from "./Checkout"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HnwLiEP7MDaFxh2fkZcYLub8pTNEc6cQsHv13u4Jg8fqSpmXp9eN3PGAQU8aLT2CFbZ9YJqsgbI6oGXiL04cA3b00HdD3oD1z');

const StripeCard = () => {
	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm />
		</Elements>
	);
};

export default StripeCard
