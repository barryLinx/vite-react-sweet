import {useState,useEffect } from 'react'
import { useHistory,useLocation } from "react-router-dom";
import './NotFound.css'

 const NotFound = () => {
  const [seconds, setSeconds] = useState(8);
  let location = useLocation();
  const navigate = useHistory();
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      navigate.push("/")
    }
  });

  return (
    <div className='container'>
      <div className='notfound'>
        <h1>你所蒐尋的網頁不存在 {location.pathname}</h1>
        <h2>倒數{seconds}秒，回首頁</h2>
      </div>     
    </div>
   
  )
}

export default NotFound