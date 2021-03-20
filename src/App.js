import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/">
            <Navbar />
            <Content />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
