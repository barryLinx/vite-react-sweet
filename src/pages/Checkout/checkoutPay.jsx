import React, { useContext } from "react";
import "./checkout.css";
import { BsCheckLg, BsFillCreditCardFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutPaySchema } from "../../helper/yupVaildate.js";
import CheckDetailed from "./components/checkDetailed";
import { years, months } from "../../helper/creditYearMonth";
import DataContext from "../../context/DataContext";
const CheckoutPay = () => {
  // const year = new Date().getFullYear();
  // const years = Array.from(new Array(7), (val, index) => index + 1 + year);
  // const months = Array.from(new Array(12), (val, index) => index + 1);
  const { order, setOrder } = useContext(DataContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    //watch
  } = useForm({
    resolver: yupResolver(checkoutPaySchema),
  });
  const navigate = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    const {
      creditFname,
      creditLname,
      creditNumber,
      expiresYear,
      expiresMonth,
      lastThreeNumbr,
    } = data;
    setOrder({
      ...order,
      creditFname,
      creditLname,
      creditNumber,
      expiresYear,
      expiresMonth,
      lastThreeNumbr
    });
    //use reduce store data
    reset();
    navigate.push("/checkoutInvoice");
  };

  return (
    <section className="checkout-page">
      <div className="container">
        <div className="form-container">
          <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-body">
              <div className="head">
                <h2>付款</h2>
                <div className="stepProgressBar">
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
                  <div className="step">
                    <div className="bullet completed">
                      <BsCheckLg />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="">信用卡</label>
              </div>
              <div className="form-control">
                <div className="input-group">
                  <input
                    {...register("creditNumber")}
                    type="text"
                    id="credit"
                    name="creditNumber"
                    placeholder="9012-3456-7890-1234"
                  />

                  <label htmlFor="credit">
                    <BsFillCreditCardFill />
                  </label>
                </div>
                {errors.creditNumber && (
                  <small>{errors.creditNumber.message}</small>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="">持卡人姓名</label>
              </div>
              <div className="form-group">
                <div className="form-control">
                  <input
                    {...register("creditFname")}
                    //name="creditFname"
                    type="text"
                    placeholder="你"
                  />
                  {errors.creditFname && (
                    <small>{errors.creditFname.message}</small>
                  )}
                </div>

                <div className="form-control">
                  <label htmlFor=""></label>
                  <input
                    {...register("creditLname")}
                    type="text"
                    placeholder="是誰"
                  />
                  {errors.creditLname && (
                    <small>{errors.creditLname.message}</small>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="">有效期限</label>
              </div>
              <div className="form-group">
                <div className="form-control">
                  <select name="expiresYear" {...register("expiresYear")}>
                    <option value="" defaultValue>
                      請選擇
                    </option>
                    {years.map((year, ind) => (
                      <option key={ind} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  {errors.expiresYear && (
                    <small>{errors.expiresYear.message}</small>
                  )}
                </div>
                <div className="form-control">
                  <select name="expiresMonth" {...register("expiresMonth")}>
                    <option value="" defaultValue>
                      請選擇
                    </option>
                    {months.map((month, ind) => (
                      <option key={ind} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  {errors.expiresMonth && (
                    <small>{errors.expiresMonth.message}</small>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="">背面末三碼</label>
              </div>
              <div className="form-group">
                <div className="form-control">
                  <input name="lastThreeNumbr" type="text" 
                      {...register("lastThreeNumbr")}
                  placeholder="123" />
                </div>
                <div className="form-control"></div>
              </div>
            </div>
            <button className="btn-send">下一步</button>
          </form>
        </div>
        <CheckDetailed />
      </div>
    </section>
  );
};

export default CheckoutPay;
