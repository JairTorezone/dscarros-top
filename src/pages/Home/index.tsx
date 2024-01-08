import "./styles.css";
import carYellowImg from "../../assets/images/car-yellow.png";

import ButtonCatalog from "../../components/ButtonCatalog";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content-top">
        <div className="home-content-top-description">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-content-image">
          <img src={carYellowImg} alt="" />
        </div>
      </div>
      <div className="home-content-bottom">
        <Link to="/products">
          <ButtonCatalog />
        </Link>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
}

export default Home;
