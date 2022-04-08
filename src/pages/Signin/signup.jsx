//import { useContext } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../helper/yupVaildate.js";
import { yupResolver } from "@hookform/resolvers/yup";
//import React, { useState } from "react";
import "./signin.css";
import { JSEncrypt } from "jsencrypt";
import { signup } from "../../api/auth";
import { useHistory } from 'react-router-dom';
//import DataContext from "../../context/DataContext.js";
const { VITE_SECRET_KEY } = process.env;

const Signup = () => {
  let navigate = useHistory();
 // const [errMsg, setErrMsg] = useState("");
//const [setAuthed] =useContext(DataContext)
  const {
    register,
    formState: { errors },
    handleSubmit,
    // reset,
    //trigger,
    //watch
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  // const [email, setEmail] = useState("");
  // const [passwd, setPasswd] = useState("");

  const onSubmit = async (data) => {
    //e.preventDefault();   
    try {
      const jsEncrypt = new JSEncrypt();
      jsEncrypt.setPublicKey(VITE_SECRET_KEY);
      console.log(data);
      const cipherPasswd = jsEncrypt.encrypt(data.passwordConfirmation);
      console.log("cipherPasswd :",cipherPasswd);
      let res = await signup(data.email, cipherPasswd);
      //let res = await signup(data.email, data.passwordConfirmation);
      //setAuthed({accessToken:res.data.accessToken})
      console.log("response",res)
      navigate.push("/signin")
     
    } catch (err) {
      console.log(err);
      // if (!err?.response) {
      //   setErrMsg("No Server Response");
      // } else if (err.response?.status === 409) {
      //   setErrMsg("Username Taken");
      // } else {
      //   setErrMsg("註冊錯誤");
      // }
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="form-container">
            <form
              action=""
              className="register"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3>註冊會員</h3>
              <div className="form-controll">
                <label htmlFor="email" className="label-email">
                  <i className="fas fa-user"></i>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="電子信箱"
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  {...register("email", {
                    // required: "必填",
                    // pattern: {
                    //   value:/\d{4}-\d{3}-\d{3}$/i,
                    //   message:"不符合格式"
                    // },
                  })}
                  //value={email}
                  autoComplete="off"
                />
                {errors.email && <small>{errors.email.message}</small>}
              </div>
              <div className="form-controll">
                <label htmlFor="pwd" className="label-pwd">
                  <i className="fas fa-key"></i>
                </label>
                <input
                  type="password"
                  placeholder="設定密碼"
                  {...register("password", {
                    // required: "必填",
                    // pattern: {
                    //   value:/\d{4}-\d{3}-\d{3}$/i,
                    //   message:"不符合格式"
                    // },
                  })}
                  // onChange={(e) => {
                  //   setPasswd(e.target.value);
                  // }}
                  //value={passwd}
                  autoComplete="off"
                />
                {errors.password && <small>{errors.password.message}</small>}
              </div>
              <div className="form-controll">
                <label htmlFor="pwd" className="label-pwd">
                  <i className="fas fa-key"></i>
                </label>
                <input
                  type="password"
                  placeholder="確認密碼"
                  name="passwordConfirmation"
                  // onChange={(e) => {
                  //   setPasswd(e.target.value);
                  // }}
                  {...register("passwordConfirmation")}
                  // value={passwd}
                  autoComplete="off"
                />
                {errors.passwordConfirmation && (
                  <small>{errors.passwordConfirmation.message}</small>
                )}
              </div>
              <button className="btn-send">註冊帳號</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
