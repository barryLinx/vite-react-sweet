//import axios from "axios"
import axios from "./axios";
//import bcrypt from 'bcryptjs'

// need Token
async function userInfo(email){
  try {
    const response = await axios.post("/user/profile", {
      email,
    });
    return response;
  } catch (error) {
    console.log("error", error);
  }
}

export { userInfo };
