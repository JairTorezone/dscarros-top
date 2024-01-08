import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import Catalog from "pages/Catalog";
import NavBar from "components/Navbar";

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products">
          <Catalog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
