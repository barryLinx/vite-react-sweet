import { useState, useEffect, useContext } from "react";
import "./product.css";
import Banner from "../../components/Banner/banner";
import Card from "../../components/CardList/Card.jsx";
//import { Pagination } from "../../components/Pagination/Pagination";
import { getCategory, getProduct } from "../../api/product";
import DataContext from "../../context/DataContext";
import ReactPaginate from "react-paginate";
import useAxiosPrivate from '../../hook/useAxiosPrivate'

let itemsPerPage = 6;
//const items = [...Array(33).keys()];
const Product = () => {
  //const [currentPage, setCurrentPage] = useState(1);

  const axiosPrivate =useAxiosPrivate();

  const { setCart, addToCart } = useContext(DataContext);
  const [prods, setProds] = useState([]);
  const [category, setCategory] = useState([]);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    //fetchdata();
    const fetchdata = async () => {
      const product = await getProduct();
      console.log("NODE_ENV",process.env.NODE_ENV);
      const category = await getCategory();
      console.log("res:", product);
      //setProds(product.data);
      setProds(product.result);
      setCategory(category.result);
    };
    fetchdata();
  }, [setCategory, setProds]);

  useEffect(() => {
    // Fetch items from another resources.

    const endOffset = itemOffset + itemsPerPage;
    //console.log("endOffset:", endOffset);
    setCurrentItems(prods.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(prods.length / itemsPerPage));
    //offset(itemOffset,itemsPerPage);
  }, [itemOffset, prods]);

  useEffect(()=>{
    console.log("axiosPrivate: ",axiosPrivate);
  },[axiosPrivate])

  const handlePageClick = (event) => {
    // console.log("event.selected", event.selected);
    const newOffset = (event.selected * itemsPerPage) % prods.length;
    //console.log(
    //    `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    console.log("newOffset:", newOffset);
    setItemOffset(newOffset);
    //offset();
  };

  const handleFilterClick = (e, fname) => {
    console.log(fname);
    e.preventDefault();

    if (fname === "All") {
      getProduct().then((product) => {
        setProds(product);
      });
      return;
    }
     getProduct().then((product) => {    //  
      //console.log("product:", product);
       const fdata = product.result.filter((p) =>(p.category === fname ));
       console.log("fdata:", fdata);
       setProds(fdata);
       //console.log("fdata",fdata);
     });
  };

  return (
    <>
      <Banner />
      <section className="product">
        <div className="container">
          <ul className="category">
            <li>甜點類別</li>
            <li>
              <a
                href="/"
                onClick={(e) => {
                  handleFilterClick(e, "All");
                }}
              >
                所有甜點（48）
              </a>
            </li>
            {category &&
              category.map((cate, ind) => (
                <li key={ind}>
                  <a
                    href="/"
                    onClick={(e) => {
                      handleFilterClick(e, cate.name);
                    }}
                  >
                    {cate.name} ({cate.amount})
                  </a>
                </li>
              ))}

          
          </ul>
          <div className="card-list">
            {currentItems &&
              currentItems.map((p, ind) => (
                <Card
                  product={p}
                  key={ind}
                  onAdd={addToCart}
                  setCart={setCart}
                />
              ))}
          </div>
        </div>
        <div className="container">
          <nav aria-label="Page navigation" className="page-wrap">
            <ReactPaginate
              onPageChange={handlePageClick}
              pageCount={pageCount}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              containerClassName="pagination"
              activeLinkClassName="active"
              previousLabel="<"
              nextLabel=">"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
            />
          </nav>
          {/* <nav aria-label="Page navigation" className="page-wrap">
            <ul className="pagination ">
              <li className="page-item">
                <a href="/" className="page-link ">
                  <i className="fas fa-caret-left"></i>
                </a>
              </li>
              <li className="page-item">
                <a href="/" className="page-link active">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="/" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item">
                <a href="/" className="page-link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="/" className="page-link ">
                  <i className="fas fa-caret-right"></i>
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </section>
    </>
  );
};

export default Product;
