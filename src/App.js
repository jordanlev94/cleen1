import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Header from '../src/components/Header/Header'
import ProductScreen from '../src/components/Product/ProductScreen'
import Login from './pages/Login/login';
import ContextProvider from './components/ContextProvider'

function App() {
  return (
      <Router>
        <ContextProvider>
          <Header/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/reports' component={Reports} />
            <Route path='/products' component={Products} />
            <Route path='/login' component={Login} />
            <Route path="/product/:id"component ={ProductScreen}/>
          </Switch>
        </ContextProvider>
      </Router>
  );
}

export default App;
