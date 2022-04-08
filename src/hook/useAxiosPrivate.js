import { axiosPrivate } from "../api/axios";
//import { useContext } from "react";
//import useRefreshToken from "./useRefreshToken ";
//import DataContext from "../context/DataContext";

const useAxiosPrivate = () => {
  //const {authed} = useContext(DataContext);
  const authed = JSON.parse(localStorage.getItem("jwtlogin"));
  //const requestIntercept =
   axiosPrivate.interceptors.request.use(
    config => {
        if (!config.headers['Authorization']) {
           config.headers['Authorization'] = `Bearer ${authed?.accessToken}`;
        }
        return config;
    }, (error) => Promise.reject(error)
);

// return () => {
//   //axiosPrivate.interceptors.request.eject(requestIntercept);
//   //axiosPrivate.interceptors.response.eject(responseIntercept);
// }
return axiosPrivate

};


export default useAxiosPrivate;