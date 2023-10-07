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

export default function App() {
  const user = useSelector((state) => state.user.currentUser);
  useEffect(()=>
    console.log(user)
    ,[])
  return (
    <Router>
      <switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </switch>
    </Router>
  )
}
