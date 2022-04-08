import axios from "./axios";

async function signup(email, passwd) {
  console.log("email", email);
  console.log("pwdHash", passwd);
  // const response = await fetch("http://localhost:8080/user/signup",{
  //   body: JSON.stringify({ email,passwd,}), // must match 'Content-Type' header
  //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //   credentials: 'same-origin', // include, same-origin, *omit
  //   headers: {
  //     'user-agent': 'Mozilla/4.0 MDN Example',
  //     'content-type': 'application/json'
  //   },
  //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //   //mode: 'cors', // no-cors, cors, *same-origin
  // })

  try {
    const response = await axios.post("/auth/Signup", { email, passwd });
    console.log("response", response);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
}

async function Login(email, passwd) {
  try {
    // console.log("email", email);
    //console.log("pwdHash",pwdHash)
    const response = await axios.post("/auth/Login", {
      email,
      passwd,
    });

    return response;
  } catch (error) {
    console.log("error", error);
  }
}

async function Refresh(){
  try{
    const response = await axios.post("/auth/Refresh");
    console.log("response", response);
    return response;
  }catch(error){
    console.log("error", error);
  }
}

export {Login,signup ,Refresh};