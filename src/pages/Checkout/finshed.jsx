import "./checkout.css";
import { BsCheckLg } from "react-icons/bs";

const Finshed = () => {
  return (
    <section className="checkout-page">
      <div className="container">
        <div
          className="finshed"
          style={{ backgroundImage: `url("https://bit.ly/2P7GhNd") ` }}
        >
          <div className="stepProgressBar">
            <div className="step inProgress completed">
              <div className="bullet completed">
                <BsCheckLg />
              </div>
            </div>
            <div className="step inProgress completed">
              <div className="bullet completed">
                <BsCheckLg />
              </div>
            </div>
            <div className="step inProgress completed">
              <div className="bullet completed">
                <BsCheckLg />
              </div>
            </div>
          </div>
          <p>付款成功</p>
          <a href="/" className="btn-send">
            繼續逛逛
          </a>
        </div>
      </div>
    </section>
  );
};

export default Finshed