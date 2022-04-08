import React, { useState, useContext, useEffect } from "react";
import "./header.css";
//import CartAPI from "../../helper/cartAPI";
import {Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import DataContext from "../../context/DataContext";

const Header = () => {
  const { cart, setCart, getCart, deleteItem, updateItem, authed, setAuthed } =
    useContext(DataContext);
  const [NavbarActive, setNavbarActive] = useState(false);
  const [CartWrapActive, setCartWrapActive] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, [setCart, getCart]);

  useEffect(() => {
    window.onscroll = () => {
      setCartWrapActive(false);
      setNavbarActive(false);
    };
    //   const onScroll = () => {
    //     setCartWrapActive(false);
    //     setNavbarActive(false);
    //   };
    //   // clean up code  點擊 空白處 close cart-wrap: click cart-wrap 地方不關閉，click body close cart-wrap
    //   window.removeEventListener('scroll', onScroll);
    //  window.addEventListener('scroll', onScroll, { passive: true });
    //  return () => window.removeEventListener('scroll', onScroll);
  }, [setCartWrapActive, setNavbarActive]);

  const deleteHandle = (item) => {
    deleteItem(item);
    setCart(getCart());
  };

  const updateHandle = (item, amount) => {
    updateItem(item, amount);
    setCart(getCart());
  };

  // immediately(立即更新) mutate state

  const menubar_handleToggle = () => {
    setNavbarActive(!NavbarActive); //true
    setCartWrapActive(false);
  };
  const cartBtn_handleToggle = (evt) => {
    evt.preventDefault();
    // console.log(evt);
    setCartWrapActive(!CartWrapActive); //true
    setNavbarActive(false);
  };

  const SignOut = (evt)=>{
    localStorage.removeItem("jwtlogin");
    let cleanObj = Object.keys(authed).forEach( k => delete authed[k]);
    setAuthed(cleanObj);

  }

  return (
    <header className="header">
      <div className="container">
        <FaBars id="menu-bar" onClick={menubar_handleToggle}/>
        {/* <div
          id="menu-bar"
          className="fas fa-bars"
          onClick={menubar_handleToggle}
        ></div> */}
        <h1 className="">
          <Link to="/">logo</Link>
          {/* <a href="/" className="logo">   </a> */}
        </h1>
        <nav className={`navbar ${NavbarActive ? "active" : ""}`}>
          <ul className="menu">
            <li className="item">
            <Link to="/">首頁</Link>
              {/* <a href="/">首頁</a> */}
            </li>
            <li className="item">
            <Link to="/product">甜點</Link>
              {/* <a href="/product"></a> */}
            </li>
            {authed?.accessToken && (
              <li className="item">
                <a href="/signin" className="btn-send" onClick={(e)=>{SignOut(e)}}>登出</a>
              </li>
            )}
            {
              !authed?.accessToken && ( <li className="item">
              <Link to="/signin">甜點</Link>
            </li>)
            }
           
          </ul>
        </nav>
        <a
          href="/"
          className="cart"
          id="cart-btn"
          onClick={cartBtn_handleToggle}
        >
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
      <div className={`cart-wrap ${CartWrapActive ? "active" : ""}`}>
        <h2>您的購物車</h2>
        {cart &&
          cart.map((c, ind) => (
            <div className="cart-item" key={ind}>
              <button
                className="fas fa-trash"
                onClick={() => {
                  deleteHandle(c);
                }}
              ></button>
              <img src={c.imgurl} alt="" />
              <div className="content">
                <h3>{c.name}</h3>
                <div className="price">NT$ {c.price}</div>
                <div className="count">
                  <span
                    onClick={() => {
                      updateHandle(c, -1);
                    }}
                  >
                    -
                  </span>
                  <span>{c.quantity}</span>
                  <span
                    onClick={() => {
                      updateHandle(c, 1);
                    }}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          ))}
        {
          // cart.length || <p> 沒有商品</p>
        }
<Link className="btn-send" to="/cart">結帳</Link>
        <a href="/cart" className="btn-send">
          結帳
        </a>
      </div>
    </header>
  );
};

export default Header;
