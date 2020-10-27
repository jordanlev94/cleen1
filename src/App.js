import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Header from '../src/components/Header/Header'
import ProductScreen from '../src/components/Product/ProductScreen'

function App() {
  return (
    
    
      <Router>
        

        <Header/>
       
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path="/product/:id"component ={ProductScreen}/>
          

        </Switch>
      </Router>
    
  );
}

export default App;
