import "./styles.css";
import "@popperjs/core";
import "bootstrap/js/src/collapse";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <a href="/" className="nav-logo-text">
          <h4>DS Catalog</h4>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscarrostop-navbar"
          aria-controls="dscarrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscarrostop-navbar">
          <ul className="navbar-nav offset-md-7 main-menu">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/products">CATÁLOGO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
