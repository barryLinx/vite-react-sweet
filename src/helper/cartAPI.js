function CartAPI(){
  const addCart=(item)=>{  
    //1. check localStorage old data has exist  JSON.parse(localStorage.getItem("notesApp-notes") || "[]");
  
    let storage = JSON.parse(localStorage.getItem("sweet_cart")) ?? [];
    //console.log("storage",storage);
    //2. check has product in cart
  
    let existing = storage.find((i) => i.pId === item.pId);  
  
    //3. if true , the product props "count" add one
    if (existing) {
      // 由於existing 還沒有建立 quantity 屬性 ，但已經存在，已存在等於(equal) 1筆 , existing.count ?? 是 1 非 0
      existing.quantity =(existing.quantity ?? 1) +1;
      existing.totalPay =  existing.quantity * existing.price; //  assign by refance values

     // console.log(existing.count ,'*', existing.price,'=',existing.count * existing.price)
    } else {
      //3.1 if not push
      item.quantity=item.quantity ?? +1;
      item.totalPay =  item.quantity * item.price; //  assign by refance values
      storage.push(item);
    }
    //4. refresh localStorage
  
    localStorage.setItem("sweet_cart", JSON.stringify(storage));
  
  }
  
  const getCart =()=>{
    const storage = JSON.parse(localStorage.getItem("sweet_cart") || "[]");
    return storage;
  }

  const updateItemCount=(item,amount)=>{
    let storage =  getCart();
    let existing = storage.find((i) => i.pId === item.pId);

    if (existing && existing.quantity >=0 ) {
      existing.quantity = existing.quantity+(amount);
      if(existing.quantity === 0 ){
        existing.quantity =1;
      }
      existing.totalPay =  existing.quantity * existing.price;
      localStorage.setItem("sweet_cart", JSON.stringify(storage));
    }

    
  }

  const deleteItem=(item)=>{
   // console.log(item);
    let storage = JSON.parse(localStorage.getItem("sweet_cart") || "[]");
    storage = storage.filter((i) => i.pId !== item.pId);  
    localStorage.setItem("sweet_cart", JSON.stringify(storage));
    //return existing
  }

  return{
    addCart,
    getCart,
    deleteItem,
    updateItemCount
  }
}

export default CartAPI()

// export default class CartAPI{
//   static addCart(item){  
//         //1. check localStorage old data has exist  JSON.parse(localStorage.getItem("notesApp-notes") || "[]");
      
//         let storage = JSON.parse(localStorage.getItem("sweet_cart")) ?? [];
//         //console.log("storage",storage);
//         //2. check has product in cart
      
//         let existing = storage.find((i) => i.pId === item.pId);
//        //console.log("indData",indData);
      
//         //3. if true , the product props "count" add one
//         if (existing) {
//           // 由於existing 還沒有建立 count 屬性 ，但已經存在，已存在等於(equal) 1筆 , existing.count ?? 是 1 非 0
//           existing.count =(existing.count ?? 1) +1;
//           existing.totalPay =  existing.count * existing.price; //  assign by refance values
//           //console.log(existing)
//         } else {
//           //3.1 if not push
//           storage.push(item);
//         }
//         //4. refresh localStorage
      
//         localStorage.setItem("sweet_cart", JSON.stringify(storage));
      
//   }
      
//   static getCart(){
//        const goods = JSON.parse(localStorage.getItem("sweet_cart") || "[]");
//         return goods;
//   }
// }


