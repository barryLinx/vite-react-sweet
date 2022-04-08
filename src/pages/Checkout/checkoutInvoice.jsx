import "./checkout.css";
import { BsCheckLg } from "react-icons/bs";
import CheckDetailed from "./components/checkDetailed";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  emailInvoiceSchema,
  addressInvoiceSchema,
} from "../../helper/yupVaildate.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { districts, counties } from "../../helper/countySiteName";
import DataContext from "../../context/DataContext";

const CheckoutInvoice = () => {
  // const countySelectRef = useRef(null);
  // const areaSelectRef = useRef(null);
  //const addressRef = useRef(null);
  const { order, setOrder } = useContext(DataContext);
  const [sameAddress, setSameAddress] = useState(false);
  const [tabActive, setTabActive] = useState(0);
  const [tasID, setTasID] = useState("");
  const [area, setArea] = useState(districts[`台北市`]);
  const navigate = useHistory();
  const EASwitch = [emailInvoiceSchema, addressInvoiceSchema];

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
    //reset,
    //trigger,
    //watch
  } = useForm({
    resolver: yupResolver(EASwitch[tabActive]),
  });

  const cityHandle = (e) => {
    // trigger("city")

    const { value } = e.target; // 回傳 counties array index
    const countyName = counties[value];
    // console.log("value", value);
    // console.log("countyName", countyName);
    //setChCountyIndex(value)
    setArea(districts[`${countyName}`]);
    //console.log(area);
  };

  const chAddressHandle = (e) => {
    let checked = e.target.checked;
    setSameAddress(checked);
    //setSameAddress(checked)
    //console.log(counties);
    const { address, conunty, city } = order;
    setOrder({
      ...order,
      cityInvoice: checked ? city : "",
      conuntyInvoice: checked ? conunty : "",
      addressInvoice: checked ? address : "",
    });
//address, conunty, city 給予提示，未填寫
    //setChArea
    if (checked) {
      const countyIndex = counties.findIndex((ele) => ele === city);
      //console.log(countyIndex);
      const countyName = (countyIndex !== -1) ? counties[countyIndex]:0; //  找出城市名
      const areaArry =  (countyIndex !== -1) ? districts[`${countyName}`]:0; // 找出城市的array
      const areaIndex = conunty ? areaArry.findIndex((ele) => ele === conunty):0; 
      setArea(areaArry); //  先給陣列,設定城市的array
      // console.log("areaArry",areaArry);
      // console.log("area",area);
      // console.log("areaIndex",areaIndex);
      //console.log("areaArry",areaArry[areaIndex]);
      //console.log("countyIndex",countyIndex);
      setValue("cityInvoice",`${countyIndex}`,{shouldValidate:true});
      setValue("conuntyInvoice",`${areaIndex}`,{shouldValidate:true});
      setValue("addressInvoice",`${address}`,{shouldValidate:true});

      // countySelectRef.current.selectedIndex = countyIndex + 1; // 多了 "清選擇" +1
      // countySelectRef.current.disabled = true;
      // areaSelectRef.current.selectedIndex = areaIndex + 1;
      // areaSelectRef.current.disabled = true;
      // addressRef.current.value = address;
      // addressRef.current.disabled = true;
      // console.log( areaSelectRef.current.children);
      // console.log(areaSelectRef);
      //中正區
      //countySelectRef.current.disabled =true;
      //countySelect.current.value = sameAddress ? counties[countyIndex] : "";
    } else {
      setValue("cityInvoice",'')
      setValue("conuntyInvoice",'');
     // setValue("conuntyInvoice","")
      //setChCountyIndex(0);
      // countySelectRef.current.selectedIndex = 0;
      // countySelectRef.current.disabled = false;
      // areaSelectRef.current.selectedIndex = 0;
      // areaSelectRef.current.disabled = false;
      // addressRef.current.value = null;
      // addressRef.current.disabled = false;
    }
  };

  const onSubmit = (data) => {
    console.log("SubmitData",data);
    // city,conunty,只存到索引(index)
    let { cityInvoice,conuntyInvoice,addressInvoice,emailInvoice,taxIDNumber } = data;

   
    cityInvoice = counties[cityInvoice]; //  找出城市名
    const areaArry = districts[`${cityInvoice}`]; // 找出城市的array
    conuntyInvoice = areaArry[conuntyInvoice];
    //console.log("cityInvoice",cityInvoice);
   
    //console.log("areaArry",);
    setOrder({
      ...order,
      cityInvoice,
      conuntyInvoice,
      addressInvoice,
      taxIDNumber,
    });
    setOrder({
      ...order,
      emailInvoice,
      taxIDNumber,
    });
    console.log("order",order);
    //reset();
    navigate.push("/finshed");
  };

  return (
    <section className="checkout-page">
      <div className="container">
        <div className="form-container">
          <form
            action=""
            className="checkout-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-body">
              <div className="head">
                <h2>發票</h2>
                <div className="stepProgressBar">
                  <div className="step inProgress completed">
                    <div className="bullet completed">
                      <BsCheckLg />
                    </div>
                  </div>
                  <div className="step inProgress completed">
                    <div className="bullet completed">
                      <BsCheckLg />
                    </div>
                  </div>
                  <div className="step inProgress">
                    <div className="bullet ">
                      <BsCheckLg />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <div className="btn-group">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setTabActive(0);
                    }}
                    className={`${tabActive ? "" : "active"}`}
                  >
                    電子發票
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setTabActive(1);
                    }}
                    className={`${tabActive ? "active" : ""}`}
                  >
                    郵寄發票
                  </button>
                </div>
              </div>
              <div
                className={`tabs ${tabActive ? "" : "active"}`}
                id="mailInvoice"
              >
                <div className="form-control">
                  <label htmlFor="">電子郵件信箱</label>
                </div>
                <div className="form-control">
                  <input
                    {...register("emailInvoice")}
                    placeholder="example@email.com"
                  />
                  {errors.emailInvoice && (
                    <small>{errors.emailInvoice.message}</small>
                  )}
                </div>
              </div>
              <div
                className={`tabs ${tabActive ? "active" : ""}`}
                id="addressInvoice"
              >
                <div className="form-checkbox">
                  <div className="form-control">
                    <label htmlFor="">地址</label>
                  </div>
                  <div className="customCheckoutBox">
                    <input
                      id="checkAddress"
                      className="checkSame"
                      type="checkbox"
                      name="sameAddress"
                      onChange={(e) => {
                        chAddressHandle(e);
                      }}
                      disabled={!order.city  || !order.county}
                      //value={sameAddress}
                    />
                    <label htmlFor="checkAddress">同運送地址</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-control">
                    <select
                      name="cityInvoice"
                      {...register("cityInvoice")}
                      onChange={(e) => {
                        cityHandle(e);
                      }}
                      disabled={sameAddress}
                      //ref={countySelectRef}
                      //value={counties[chCountyIndex]}
                    >
                      <option value="" defaultValue>
                        請選擇
                      </option>
                      {counties &&
                        counties.map((county, ind) => {
                          return (
                            <option
                              key={ind}
                              value={ind}
                              // onClick={(e)=>{handleCounty(e)}}
                            >
                              {county}
                            </option>
                          );
                        })}
                    </select>
                    {errors.cityInvoice && (
                      <small>{errors.cityInvoice.message}</small>
                    )}
                  </div>
                  <div className="form-control">
                    <select
                      name="conuntyInvoice"
                      {...register("conuntyInvoice")}  
                      disabled={sameAddress}                   
                      //value={}
                      //ref={areaSelectRef}
                     // ref={register}
                    >
                      <option value="" defaultValue>
                        請選擇
                      </option>
                      {area &&
                        area.map((a, ind) => (
                          <option key={ind} value={ind}>
                            {a}
                          </option>
                        ))}
                    </select>
                    {errors.conuntyInvoice && (
                      <small>{errors.conuntyInvoice.message}</small>
                    )}
                  </div>
                </div>
                <div className="form-control">
                  <input
                  name="addressInvoice"
                    {...register("addressInvoice")}
                    disabled={sameAddress}
                    type="text"
                    placeholder="幸福路 520 號"
                  />
                  {errors.addressInvoice && (
                    <small>{errors.addressInvoice.message}</small>
                  )}
                </div>
                {/* <div className="form-control">
                  <label htmlFor="">統一編號（選填）</label>
                </div>
                <div className="form-control">
                  <input type="text" placeholder="123456" />
                </div> */}
              </div>
              <div className="form-control">
                <label htmlFor="">統一編號（選填）</label>
              </div>
              <div className="form-control">
                <input
                  name="uniformNum"
                  type="text"
                  onChange={(e) => {
                    setTasID(e.target.value);
                  }}
                  value={tasID}
                  placeholder="123456"
                />
              </div>
            </div>
            <button className="btn-send">完成</button>
          </form>
        </div>
        <CheckDetailed />
      </div>
    </section>
  );
};

export default CheckoutInvoice;
