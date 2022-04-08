import React,{useState,useContext} from "react";

// import {CitySelect,ConuntySelect} from '../../helper/formTag.jsx'
import {districts,counties} from '../../helper/countySiteName'
import "./checkout.css";
import { BsCheckLg } from "react-icons/bs";
import CheckDetailed from "./components/checkDetailed";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {checkoutSchema} from '../../helper/yupVaildate.js'
import { yupResolver } from '@hookform/resolvers/yup';
import DataContext from "../../context/DataContext";


const Checkout = () => {
  const navigate = useHistory();
  const { order,setOrder} = useContext(DataContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    //trigger,
    //watch
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });
  //const{CitySelect,ConuntySelect} = SelectCombo

  const [area,setArea] = useState(districts[`台北市`])

  //console.log(watch());


  const onSubmit = (data) => {
   // console.log(data);
    const{firstName,lastName,phone,city,conunty,address} = data;
    //use reduce store data
    setOrder({...order,
      firstName,
      lastName,
      phone,
      city,
      conunty,
      address,
    })

    reset();
    navigate.push("/checkoutPay");
  };

 const cityHandle = (e) =>{
  // trigger("city")
   const {value} = e.target;
   //console.log(value);
   setArea(districts[`${value}`]);
   //console.log(area);
 }


  return (
    <section className="checkout-page">
      <div className="container">
        <div className="form-container">
          <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-body">
              <div className="head">
                <h2>運送</h2>
                <div className="stepProgressBar">
                  <div className="step inProgress completed">
                    <div className="bullet ">
                      <BsCheckLg />
                    </div>
                  </div>
                  <div className="step "></div>
                  <div className="step"></div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="">姓氏</label>
                  <input
                    type="text"
                    placeholder="你"
                    {...register("firstName")}

                  />
                  {errors.firstName && <small>{errors.firstName.message}</small>}
                </div>
                <div className="form-control">
                  <label htmlFor="">名字</label>
                  <input
                    type="text"
                    placeholder="是誰"
                    {...register("lastName")}                   
                  />
                  {errors.lastName && <small>{errors.lastName.message}</small>}
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="">電話</label>
                <input
                  type="text"
                  name="phone"
                  {...register("phone", {
                    // required: "必填",
                    // pattern: {
                    //   value:/\d{4}-\d{3}-\d{3}$/i,
                    //   message:"不符合格式"
                    // },
                  })}
                  // onKeyUp={()=>{
                  //   trigger("phone")
                  // }}
                  placeholder="0912-236-963"
                />
                {errors.phone && <small>{errors.phone.message}</small>}
              </div>
              <div className="form-control">
                <label htmlFor="">地址</label>
              </div>
              <div className="form-group">
                <div className="form-control">
                   <select {...register("city")}
                   onBlur={(e)=>{cityHandle(e)}}
                   >
                    <option value="" defaultValue>
                      請選擇
                    </option>
                    {
                      counties && counties.map((county,ind)=>(
                          <option key={ind} value={county} >{county}</option>
                      ))
                    }
                  </select>
                  {errors.city && <small>{errors.city.message}</small>}
                </div>
                <div className="form-control">

                  <select {...register("conunty")}>
                    <option value="" defaultValue>
                      請選擇
                    </option>
                    {area && area.map((a,ind)=>(
                      <option key={ind} value={a} >{a}</option>
                    ))}

                  </select>
                    {errors.conunty && <small>{errors.conunty.message}</small>}
                </div>
              </div>
              <div className="form-control">
                <input
                type="text"
                name="address"
                placeholder="幸福路 520 號"
                {...register("address")}
                // onKeyUp={()=>{
                //   trigger("address")
                // }}
                />
                {errors.address && <small>{errors.address.message}</small>}
              </div>
            </div>
            <button
             // onClick={(e) => handleSubmit(e, "/checkoutPay")}
              className="btn-send"
              //type="submit"
            >
              下一步
            </button>
            {/* <a href="/checkoutPay" onSubmit={onsubmitHandle}  className="btn-send"> 下一步</a>  */}
          </form>
        </div>
        <CheckDetailed />
      </div>
    </section>
  );
};

export default Checkout;
