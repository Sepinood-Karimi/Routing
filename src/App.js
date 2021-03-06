import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import {Route,Routes} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <NavBar />
        </div>
        <Routes>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
      </>

    );
  }
}

export default App;
