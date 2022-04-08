import axios from "./axios";

async function getProduct(){
  const res = await axios.get("/product");
  if (res.status === 404) {
    throw new Error ('錯誤');
  }
  return res.data;
}

async function getCategory(){
  const res = await axios.get("/product/category");
  if (res.status === 404) {
    throw new Error ('錯誤');
  }
  return res.data;
}


export {getProduct,getCategory}