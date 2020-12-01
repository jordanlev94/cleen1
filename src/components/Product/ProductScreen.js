import React, {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import data from '../../data';
import {Context} from '../../ContextProvider'

function ProductScreen(props) {
    const id = props.match.params.id

    const context = useContext(Context)
    const {cart, setCart} = context

    const [disabled, setDisabled] = useState(false)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        const found = cart.find(item => item.id === id)
        console.log(found)
        if(found) {
            setDisabled(true)
        }
    }, [])

    const addToCart = () => {
        setDisabled(true)
        setCart([...cart, {id, quantity}])
    }
    const onSelect = (event) => {
        setQuantity(event.target.value)
    }


     console.log(props.match.params.id);
     const product = data.products.find(x=> x._id === props.match.params.id );

    return <div> 
    <div className="back-to-result"> 
    <Link to='/'> Back to result</Link>
    </div>
    <div className='details'> 
    <div className ='details-image'>
        <img src={product.image} alt='product'/>

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
                Qty: <select onChange={onSelect}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
                 {product.prix}
            </li>
            <li>
                <button disabled={disabled} onClick={addToCart}> Add to Cart</button>
            </li>
            
        </ul>
    </div>
    </div>
    </div>
}


export default ProductScreen;