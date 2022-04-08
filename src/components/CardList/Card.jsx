import "./CardList.css";
import CartAPI from "../../helper/cartAPI";

const Card = ({product,onAdd,setCart}) => {
  
 const handelClick=()=>{
  onAdd({ pId: product.Id, name: product.name, price: product.price,imgurl:product.imgurl});
  setCart(CartAPI.getCart())
  }

  return (
    <>
            <div className="card" >
            <div className="card-header" data-content={product.category}>
              <img className="img" src={product.imgurl} alt="" />
            </div>
            <div className="content">
              <span>{product.name}</span>
              <span>NT$ {product.price}</span>
            </div>
            <button
              //onClick={()=>onAdd({ pId: product.id, name: product.name, price: product.price,imgurl:product.imgurl})}
              onClick={()=>{
                handelClick()
              }}
              className="btn"
            >
              加入購物車
            </button>
          </div>
    </>
  );
};

export default Card
