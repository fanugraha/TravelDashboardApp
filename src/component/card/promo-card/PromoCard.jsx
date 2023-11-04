import ButtonBlue from "../../button/ButtonBlue";
import ButtonPrimarry from "../../button/Primarry";
import "./promocard.css";

const PromoCard = () => {
  return (
    <div className="promo-card">
      <img src="src\assets\img\sample-promo-img.png" alt="" />
      <div className="body-card-promo">
        <div className="title-promo">
          <h1>Staycation Brings Silaturahmi</h1>
          <p>Discount coupon of 15%</p>
        </div>
        <div className="desc-promo">
          <div>
            <p>Price</p>
            <h1>Rp 10000</h1>
          </div>
          <ButtonBlue>Edit</ButtonBlue>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
