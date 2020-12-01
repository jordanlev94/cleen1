import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import data from '../data';
import './Products.css';
import styled from 'styled-components'
import ProductCard from '../components/Product/ProductCard'

const Ligne = styled.div`
  color: ${props => props.color};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const Etoiles = styled.div`
  margin-bottom: 1rem;
  color: ${props => props.starClicked ? 'black' : 'blue'};
`


function Home() {

    const [starClicked, setStarClicked] = useState(false)

    const css = true ? 'product' : 'fwdf'
    return  <ul className="products">
    {
      data.products.map(product =>
        <ProductCard image={product.image} _id={product._id} name={product.name} marque={product.marque} prix={product.prix} numReviews={product.numReviews} rating={product.rating}/> )
    }
   
   <Ligne color={'red'}>Ma ligne</Ligne>

  </ul>
}


export default Home;

////////////

