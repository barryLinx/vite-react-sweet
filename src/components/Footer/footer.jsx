import React from 'react'
import './footer.css';

import footer_logo from '../../images/logo-light.png';
import footer_logoAll from '../../images/logo-all-dark.png';
import footer_eat  from '../../images/sm-今天是個吃甜點的好日子.png';

const Footer = () => {
  return (
    <>
    <footer>
    <div className="container">
        <div className="title">
          <div className="img">
            <span>
              <img src={footer_logo} alt="" />
            </span>              
            <span>訂閱你我的甜蜜郵件</span>
          </div>
          <div className="mail">
            <label htmlFor="mail-text">
              <i className="fas fa-envelope"></i>
            </label>
            <input id="mail-text" type="text" />
            <button className="mail-btn"><i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
      
      <div className="contact">
            <div className="address">
              <div className="img">
                <img src={footer_logoAll} alt="" />
              </div>
              <div className="content">
                <p>07-1234-5678  </p>
                <p>sweetaste@email.com </p>
                <p>800 高雄市新興區幸福路 520 號</p>
              </div>
            </div>
            <div className="img-depiction">
              <img src={footer_eat} alt="" />
            </div>
        </div>   
        <div className="community-list">
          <div className="community">
            <i className="fas fa-at"></i>
            <i className="fab fa-facebook-square"></i>      
          </div>
          <div className="copy-rights">
            <p>© 2018 Sweetaste* All Rights Reserved</p>
          </div>
    </div>
    </div>
  </footer>
      </>    

 )
}

export default Footer
