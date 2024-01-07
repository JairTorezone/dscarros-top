import "./styles.css";
import NavBar from "components/Navbar";
import Input from "components/Input";

function Catalog() {
  return (
    <>
      <NavBar />
      <div className="catalog-container">
        <div className="form">
          <form action="">
            <Input />
          </form>
        </div>
        <div className="container-cards"></div>
      </div>
    </>
  );
}

export default Catalog;
