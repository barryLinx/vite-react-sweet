import React, { useState, useContext } from "react";
import { Login } from "../../api/auth";
import "./signin.css";
// import sha256 from "crypto-js/sha256";
// import CryptoJS from "crypto-js";
import { JSEncrypt } from "jsencrypt";
import DataContext from "../../context/DataContext";
import { useHistory } from "react-router-dom";
//import {GoogleLogin} from "react-google-login";
//import useAuth from '../../hook/useAuth';
const  VITE_SECRET_KEY  = import.meta.env.VITE_SECRET_KEY;

const Signin = () => {
  let navigate = useHistory();

  const { authed, setAuthed } = useContext(DataContext);
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(VITE_SECRET_KEY);

  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  //const [authed,setAuthed] = useState(JSON.parse(localStorage.getItem("jwtlogin")) ?? {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cipherPasswd = jsEncrypt.encrypt(passwd);
    console.log("cipherPasswd", cipherPasswd);
    const res = await Login(email, cipherPasswd);
    //console.log("VITE_SECRET_KEY", VITE_SECRET_KEY);
    //const res =await Login(email, passwd);
    //console.log("res",res);

    localStorage.setItem(
      "jwtlogin",
      JSON.stringify({ accessToken: res.data.accessToken })
    );
    setAuthed({ accessToken: res.data.accessToken });
    if (res?.data?.status === "success") {
      navigate.push("/user");
    }
  };

  if (authed?.accessToken) {
    navigate.push("/user");
  }

  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="form-container">
            <h3 className="mobile-title">會員登入</h3>
            <div className="mobile-community">
              <ul>
                <li>
                  <a href="https://www.facebook.com/">facebook</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Google</a>
                </li>
                <li>
                  <a href="https://twitter.com/">Twetter</a>
                </li>
              </ul>
            </div>
            <form action="">
              <h3>會員登入</h3>
              <div className="form-controll">
                <label htmlFor="email" className="label-email">
                  <i className="fas fa-user"></i>
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="電子信箱/手機號碼"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  autoComplete="off"
                />
              </div>
              <div className="form-controll">
                <label htmlFor="pwd" className="label-pwd">
                  <i className="fas fa-key"></i>
                </label>
                <input
                  id="pwd"
                  type="password"
                  placeholder="請輸入使用者密碼"
                  onChange={(e) => {
                    setPasswd(e.target.value);
                  }}
                  value={passwd}
                  autoComplete="off"
                />
              </div>
              <div className="form-check">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember" className="label-remember">
                  記住我
                </label>
              </div>
            </form>
            <button
              className="btn-send"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              登入帳號
            </button>
          </div>

          <div className="community">
            <h3>—— 成為會員 ——</h3>
            <ul>
              <li>
                <a href="/signup">註冊帳號</a>
              </li>
              {/* <li>
                <a href="https://www.facebook.com/">facebook</a>
              </li>
              <li>
                <a href="https://www.google.com/">Google</a>
    
              </li>
              <li>
                <a href="https://twitter.com/">Twetter</a>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
