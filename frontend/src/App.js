import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from "./screens/ProfileScreen"

const App = () => {
  return (
    <Router>
     <Header />
     <main className="py-3">
      <Container>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart/:id?" component={CartScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/profile" component={ProfileScreen} />
      </Container>
     </main>
      <Footer />
    </Router>
  );
}

export default App;
