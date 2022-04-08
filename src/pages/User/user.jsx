import React from 'react'
import { Refresh } from "../../api/auth";
import './user.css'

const User = () => {
  const handleRefresh = async () =>{
    const res = await Refresh();
    console.log("handleRefresh",res);

  }
  return (
    <section className='user'>
    <div className='container'>
      User is Authorificated
    </div>
    <button
    onClick={()=>{handleRefresh()}}
    >
handleRefresh
    </button>
    </section>

  )
}

export default User