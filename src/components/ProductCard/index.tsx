import "./styles.css";
import ImageCarRed from "../../assets/images/car-red.png";
import ButtonBuy from "components/ButtonBuy";

function ProductCard() {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={ImageCarRed} alt="Audio Vermelho" />
      </div>
      <div className="card-description">
        <h1>Audi Supra TT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <ButtonBuy />
    </div>
  );
}

export default ProductCard;
