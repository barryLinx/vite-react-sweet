import React, { useState ,useContext} from "react";
//import axios from "../../api/axios";
import Banner from "../../components/Banner/banner";
// import BannerItemList from '../../components/BannerItemList/BannerItemList';
//import CardList from "../../components/CardList/CardList";
import Card from '../../components/CardList/Card'
import "./home.css";
import quest1 from "../../images/lg-為什麼選擇了做甜點.png";
import quest1_moblie from "../../images/sm-橫式-為什麼選擇了做甜點.png";
import quest1_img from "../../images/why-img.jpg";
import quest2 from "../../images/lg-為什麼一定要吃甜點.png";
import quest2_moblie from "../../images/sm-橫式-為什麼一定要吃甜點.png";
import quest2_img from "../../images/why-img2.jpg";
import result from "../../images/lg-想吃甜點是不需要理由的.png";
import result_mobile from "../../images/sm-橫式-想吃甜點是不需要理由的.png";
import {getProduct} from '../../api/product'
//import CartAPI from "../../helper/cartAPI";
import CartContext from "../../context/DataContext";

const Home = () => {
  const [product, setProduct] = useState([]);
  const {addToCart,setCart} = useContext(CartContext);
  //{ pId: 1, name: "焦糖馬卡龍", price: 450}
  // console.log(item)
  
  React.useEffect(() => {
     getProduct().then(product=>{
      //const featuredOfDay = product.data.filter((p) => p.category === "本日精選");
      const featuredOfDay = product.result.filter((p) => p.category === "本日精選");
      console.log(featuredOfDay);
      setProduct(featuredOfDay);
     }) 
  },[]);
  return (
    <>
      <Banner />
      <section className="why">
        <div className="container">
          <img className="mobile-title" src={quest1_moblie} alt="" />
          <img className="why-img" src={quest1_img} alt="" />
          <div className="content">
            <div className="text">
              <p>
                青山依舊在，幾度夕陽紅。慣看秋月春風。
                一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，
                滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
              </p>
              <br />
              <p>
                是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，
                古今多少事，都付笑談中。
              </p>
            </div>
            <img className="title" src={quest1} alt="" />
          </div>
        </div>
      </section>
      <section className="why">
        <div className="container reverse">
          <img className="mobile-title" src={quest2_moblie} alt="" />
          <img className="why-img" src={quest2_img} alt="" />
          <div className="content ">
            <div className="text">
              <p>
                青山依舊在，幾度夕陽紅。慣看秋月春風。
                一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，
                滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
              </p>
              <br />
              <p>
                是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，
                古今多少事，都付笑談中。
              </p>
            </div>
            <img className="title" src={quest2} alt="" />
          </div>
        </div>
      </section>
      <section className="whyresult">
        <div className="container">
          <img className="mobile-img" src={result_mobile} alt="" />
          <img className="result" src={result} alt="" />
        </div>
      </section>
      <section className="daily-list">
        <div className="container">
          <div className="card-list">
            {product &&
              product.slice(0, 3).map((p, ind) =>( 
              <Card key={ind} product={p} onAdd={addToCart} setCart={setCart} />))
            }
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
