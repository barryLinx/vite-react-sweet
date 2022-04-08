import React from 'react'
import './BannerItemList.css';

const BannerItemList = () => {
  return (
    <>
      <div className="itemList">
              <div className="item item_daily">
                <p>本日精選</p>
                <img src="https://bit.ly/2R5tqwD" alt="" />
              </div>
              <div className="item item_recommend">
                <p>人氣推薦</p>
                <img src="https://bit.ly/2Dwoxd7" alt="" />
              </div>
              <div className="item item_new">
                <p>新品上市</p>
                <img src="https://bit.ly/2OUteif" alt="" />
              </div>
            </div> 
    </>
  )
}

export default BannerItemList
