import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/home.jsx";
import Product from "../pages/Product/product.jsx";
import Signin from "../pages/Signin/signin.jsx";
import Signup from "../pages/Signin/signup.jsx";
import Cart from "../pages/Cart/cart";
//import CheckoutForm from "../pages/Checkout/checkoutForm";
import Checkout from "../pages/Checkout/checkout.jsx";
import CheckoutPay from "../pages/Checkout/checkoutPay.jsx";
import CheckoutInvoice from "../pages/Checkout/checkoutInvoice.jsx";
import Finshed from "../pages/Checkout/finshed.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import User from '../pages/User/user.jsx'
//import DashBoard from "../pages/Dashboard/dashBoard";

import ProtectRoute from "./ProtectRoute";

const MainRoutes = () => {
//const [isAuth,setIsAuth]= useState(false);


  return (
    <Switch>
      <Route  exact  path="/"  component={Home} />
      <Route  exact path="/product" component={Product} />
      <Route  exact path="/signin" component={Signin} />
      <Route  exact path="/signup" component={Signup} />
      <Route  exact path="/cart" component={Cart} />

      <ProtectRoute  path="/user" component={User}  />
      <ProtectRoute  exact path="/checkout" component={Checkout}  />
      <ProtectRoute  exact path="/checkoutPay" component={CheckoutPay}  />
      <ProtectRoute  exact path="/checkoutInvoice" component={CheckoutInvoice}   />
      <ProtectRoute  exact path="/finshed" component={Finshed}  />
      {/* <ProtectRoute  path="/dashBorad" component={DashBoard} isAuth={isAuth} /> */}
      {/* <ProtectRoute  path="/user">
        <User />
      </ProtectRoute> */}
      <Route exact path="*" component={NotFound} />


    

    </Switch>
  );
};

export default MainRoutes;
