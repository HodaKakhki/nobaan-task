import "index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Products from "pages/Products";
import Users from "pages/Users";
import Verification from "pages/Verification";
import Menu from "pages/Menu";
import Home from "pages/Home";

function App() {
  return (
    <Router>
      <Menu />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/users" component={Users} />
          <Route path="/verification" component={Verification} />
          <Route path="*" component={() => <div>404 NOT FOUND!</div>} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
