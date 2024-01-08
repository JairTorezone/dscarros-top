import ButtonSearch from "components/ButtonSearch";
import "./styles.css";

function Input() {
  return (
    <div className="form-container">
      <div className="input-wrapper">
        <label htmlFor="search">Digite sua busca</label>
        <input type="text" placeholder="Digite sua busca" />
        <ButtonSearch />
      </div>
    </div>
  );
}
export default Input;
