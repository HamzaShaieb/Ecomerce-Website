import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './pages/login/Login';
import Topbar from './component/topbar/Topbar'
import Sidebar from './component/sidebar/Sidebar'
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product'
import { useSelector } from "react-redux";
import NewProduct from './pages/newProduct/NewProduct';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import './App.css'
import Home from './pages/home/Home'

export default function App() {
  const positions = {
    TOP_LEFT: 'top left',
    TOP_CENTER: 'top center',
    TOP_RIGHT: 'top right',
    MIDDLE_LEFT: 'middle left',
    MIDDLE: 'middle',
    MIDDLE_RIGHT: 'middle right',
    BOTTOM_LEFT: 'bottom left',
    BOTTOM_CENTER: 'bottom center',
    BOTTOM_RIGHT: 'bottom right'
  }
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '100px',
    transition: transitions.SCALE
  }
  
  const user = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <AlertProvider template={AlertTemplate} {...options}>
    <Router>
      <Switch>
      <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      {user && 
      <>
        <Topbar/>
        <div className="container">
              <Sidebar />
              <Route path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>

        </div>
         </>
      }

      </Switch>
    </Router>
    </AlertProvider>
  )
}
