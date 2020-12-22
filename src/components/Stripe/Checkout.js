import React from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const cardElement = elements.getElement(CardElement);

		// Use your card Element with other Stripe.js APIs
		const {error, paymentMethod} = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
		});

		if (error) {
			console.log('[error]', error);
		} else {
			console.log('[PaymentMethod]', paymentMethod);
		}
		checkout(paymentMethod)
	};

	const checkout = async (paymentMethod) => {
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

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			<button type="submit" disabled={!stripe}>
				Pay
			</button>
		</form>
	);
};

export default CheckoutForm
