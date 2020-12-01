import React, {useState, useContext, useEffect} from 'react';
import {Context} from '../ContextProvider'
import ProductCard from '../components/Product/ProductCard'
import data from '../data';



const Cart = (props) => {
    const context = useContext(Context)
    const {cart, setCart} = context
    const [newCart, setNewCart] = useState([])
    const [sum, setSum] = useState(0)

    useEffect(() => {
        const cartElements = []

        cart.forEach(cartItem => {
            const found = data.products.find(item => item._id === cartItem.id)
            cartElements.push({...found, quantity: cartItem.quantity})
        })
        setNewCart(cartElements)

        const sum = cartElements.reduce((total, item) => {
            return total + (item.prix * item.quantity)
        }, 0)
        setSum(sum)

    }, [cart])

    const onRemove = (id) => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }


    return (<div>
        {newCart.map(product => (
            <div key={product._id}>
                <ProductCard  image={product.image} _id={product._id} name={product.name} marque={product.marque} prix={product.prix} numReviews={product.numReviews} rating={product.rating} onRemove={onRemove}/>
                {`Quantity: ${product.quantity}`}
            </div>
        ))}
        <div style={{backgroundColor: 'red'}}>
        {`Sum ${sum}`}
        </div>
    </div>)
}

export default Cart