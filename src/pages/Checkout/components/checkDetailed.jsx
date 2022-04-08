import { useContext } from "react";
import DataContext from "../../../context/DataContext";

const CheckDetailed = () => {
  const { cart, moneyformat, transportationCosts } = useContext(DataContext);

  return (
    <div className="checkout-detailed">
      <div className="detailed">
        <h2>訂單摘要</h2>
        <div className="detailed-body">
          <div className="subtotal">
            <span>小計</span>
            <span>NT$ {cart.length && moneyformat().Subtotal}</span>
          </div>
          <div className="deliver">
            <span>運費</span>
            <span>NT$ {transportationCosts}</span>
          </div>
          <div className="total">
            <span>總計</span>
            <span>NT$ {cart.length && moneyformat().total}</span>
          </div>
        </div>
      </div>
      <div className="buy-list">
        <h2>購物清單</h2>
        <div className="buy-list-body">
          {cart &&
            cart.map((c, ind) => (
              <div className="buy-card" key={ind}>
                <img src={c.imgurl} alt="" />
                <div className="buy-card-body">
                  <p className="title">
                    焦糖馬卡龍 <span>（{c.quantity}）</span>
                  </p>
                  <p className="price">NT$ {c.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CheckDetailed;
