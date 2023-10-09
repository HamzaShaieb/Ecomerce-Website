import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import { useSelector } from "react-redux";
import Register from './pages/Register';
import Login from './pages/Login';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Baymant from './pages/Baymant';

export default function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        <Route path="/baymant">
          <Baymant />
        </Route>
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </switch>
    </Router>
  )
}
