import React from 'react';
import './banner.css'
import BannerItemList from '../BannerItemList/BannerItemList';
import {Route} from 'react-router-dom';
import productTitle  from '../../images/lg-想吃甜點是不需要理由的.png';
const homeimgUrl ='https://bit.ly/2OhbMHr';
const productimgUrl ='https://bit.ly/2Qodh3Z';
const homebanner = {
  backgroundImage: 'url(' + homeimgUrl + ')',
};
const productbanner = {
  backgroundImage: 'url(' + productimgUrl + ')',
};

const pathname = window.location.pathname;
// console.log(pathname)
// 策略模式 修改

const Banner = () => {
  return (
    <>
        <section className="home" id="home">
        <div className="container">
          <div className="banner" style={ (pathname === '/') ? homebanner : productbanner} >
            <Route path="/" component={ (pathname === '/') ? BannerItemList :''} /> 
            {
              pathname === '/product' ? <img className="title" src={productTitle} alt=""/> : ''
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
