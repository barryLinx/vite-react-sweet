import React, {  useContext, useEffect } from "react";
import "./cart.css";
//import CartAPI from '../../helper/cartAPI.js'
import DataContext from "../../context/DataContext";

const Cart = () => {
  const { getCart, cart, setCart, deleteItem, updateItem,moneyformat,transportationCosts } =
    useContext(DataContext);



  useEffect(() => {
    setCart(getCart());
    //console.log(cart);
    // const clacPay = cart
    //   .map((c) => c.totalPay)
    //   .reduce((previousValue, currentValue) => previousValue + currentValue);
    //   console.log(clacPay);
  }, [setCart, getCart]);

  const deleteHandle = (e, item) => {
    e.preventDefault();
    deleteItem(item);
    setCart(getCart());
  };

  const updateHandle = (item, amount) => {
    updateItem(item, amount);
    setCart(getCart());
  };
  
  return (
    <>
      <section className="cart-page">
        <div className="container">
          <div className="cart-list">
            <h2>您的購物車</h2>
            {cart &&
              cart.map((c, ind) => (
                <div className="cart-item" key={ind}>
                  <div className="cart-box">
                    <img className="prod-img" src={c.imgurl} alt="" />
                    <div className="cart-body">
                      <div className="title">
                        <h3>{c.name}</h3>
                        <div className="price">NT$ {c.price}</div>
                      </div>
                      <div className="count">
                        <span
                          className="btn-reduce"
                          onClick={() => {
                            updateHandle(c, -1);
                          }}
                        >
                          -
                        </span>
                        <span>{c.quantity}</span>
                        <span
                          className="btn-reduce"
                          onClick={() => {
                            updateHandle(c, 1);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="total-pay">
                    <span id="total">NT$ {c.totalPay}</span>
                  </div>
                  <button
                    className="btn-delete fa fa-trash"
                    onClick={(e) => {
                      deleteHandle(e, c);
                    }}
                  ></button>
                </div>
              ))}

            {!cart.length && <h1>購物車是空的</h1>}

            {/* <div className="cart-item">
              <div className="cart-box">
                <img className="prod-img" src="https://bit.ly/2QiWeQW" alt="" />
                <div className="cart-body">
                  <div className="title">
                    <h3>焦糖馬卡龍</h3>
                    <div className="price">NT$ 450</div>
                  </div>
                  <div className="count">
                    <span className="btn-reduce">-</span>
                    <span>5</span>
                    <span className="btn-reduce">+</span>
                  </div>
                </div>
              </div>
              <div className="total-pay">
                <span>NT$ 900</span>
              </div>
              <a href="" className="btn-delete fa fa-trash"></a>
            </div> */}
          </div>
          <div className="detailed">
            <h2>訂單摘要</h2>
            <div className="detailed-body">
              <div className="subtotal">
                <span>小計</span>
                <span>
                  NT$
                  {cart.length &&moneyformat().Subtotal}
                </span>
              </div>
              <div className="deliver">
                <span>運費</span>
                <span>NT$ {transportationCosts}</span>
              </div>
              <div className="total">
                <span>總計</span>
                <span>NT${cart.length && moneyformat().total}</span>
              </div>
            </div>
            <a href="/checkout" className="btn-send ">
              結帳
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
