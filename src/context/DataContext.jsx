import { createContext, useEffect, useState } from "react";
import cartAPI from "../helper/cartAPI";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // const [prods, setProds] = useState([]);
  // const [category, setCategory] = useState([]);
  const [authed,setAuthed] = useState(JSON.parse(localStorage.getItem("jwtlogin")) ?? {});
  //const [user,setUser] = useState({})
  const [cart, setCart] = useState([]);
  const [transportationCosts, setTransportationCosts] = useState(120);
  const [order, setOrder] = useState({
    firstName:'',
    lastName:'',
    phone:'',
    city:'',
    conunty:'',
    address:'',
    creditFname:"",
    creditLname:'',
    creditNumber:'',
    expiresYear:'',
    expiresMonth:'',
    lastThreeNumbr:'',
    emailInvoice:'',
    cityInvoice:'',
    conuntyInvoice:'',
    addressInvoice:'',
    taxIDNumber:'',
  });
  //const [totalPay, setTotalPay] = useState(0);
  useEffect(() => {
    setCart(cartAPI.getCart());
  }, [setCart]);



  const moneyformat = () => {    
    //totalPay
    let clacPay = cart
      .map((c) => c.totalPay)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
    let total = (clacPay + transportationCosts)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    const Subtotal = clacPay
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return { total, Subtotal };
  };



  return (
    <DataContext.Provider
      value={{
        setAuthed,
        authed,
        cart,
        setCart,
        order,
        setOrder,
        // prods,
        // category,
        moneyformat,
        transportationCosts,
        setTransportationCosts,
        getCart: cartAPI.getCart,
        addToCart: cartAPI.addCart,
        updateItem: cartAPI.updateItemCount,
        deleteItem: cartAPI.deleteItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
