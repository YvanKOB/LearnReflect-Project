import React, { useState, useEffect } from "react";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import LR from "./images/LRe.png";
import { Link } from "react-router-dom";
import women from "./images/shopwomen.avif";
import men from "./images/working.webp";
import cart2 from "./images/cart2.png";
import search from "./images/search.png";
import '../css/shop.css'

function ShopPage() {
  const [showInput, setShowInput] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [cart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [counts, setCounts] = useState({});

  useEffect(() => {
    setAnimate(true);
  }, []);

  const addProductToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [product.id]: (prevCounts[product.id] || 1) + 1
      }));
    } else {
      setCartItems([...cartItems, product]);
      setCounts((prevCounts) => ({
        ...prevCounts,
        [product.id]: 1
      }));
    }
  };

  const removeCartItem = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[product.id];
      return newCounts;
    });
  };

  return (
    <div className={`shop-page ${animate ? "animate" : ""}`}>
      <div className="LabelContainer">
        <Link to="/LR">
          <img className="LR-Logo " src={LR} />
        </Link>
        <label>
          <Link to="/ShopPage">Home</Link>
        </label>
        <div className="dropdownShop">
          <label>Products</label>
          <div className="dropdownShop-content">
            <a>option 1</a>
            <a>option 2</a>
            <a>option 3</a>
          </div>
        </div>
        <div className="dropdownShop">
          <label>Sales</label>
          <div className="dropdownShop-content">
            <a>Option A</a>
            
            <a>Option B</a>
            <a>Option C</a>
          </div>
        </div>
        <label>Contact</label>
        <div className="boxseca">
          <input
            onClick={() => setShowInput(true)}
            type="text"
            className="SearchInput"
            placeholder="Search Product"
            style={{ display: showInput ? "block" : "none" }}
            onMouseEnter={() => setShowInput(true)}
            onMouseLeave={() => setShowInput(true)}
          />
          <img
            onMouseEnter={() => setShowInput(true)}
            onMouseLeave={() => setShowInput(false)}
            src={search}
          />
          <img
            className="cartimg"
            onClick={() => setOpenCart(!cart)}
            src={cart2}
          />
          {cart && (
            <ShoppingCart
              setOpenCart={setOpenCart}
              items={cartItems}
              removeItem={removeCartItem}
              counts={counts}
              updateCounts={setCounts}
            />
          )}
        </div>
      </div>
      <div>
        <img className="womenImg" src={women} />
        <img className="menImg" src={men} />
      </div>
      <div className="wall-top"></div>
      <Product addProduct={addProductToCart} />
      <div className="wall-bottom"></div>
      <div className="bottom-container"></div>
    </div>
  );
}

export default ShopPage;
