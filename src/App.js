import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Navbar from "./Navbar";
import SingleProduct from "./SingleProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import { ProductsProvider } from "./ProductsContext";

function App() {
  return (
    <Router>
      <ProductsProvider>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product/:id">
              <SingleProduct />
            </Route>

            <Route path="/">
              <Navbar />
              <Content />
            </Route>
          </Switch>
        </div>
      </ProductsProvider>
    </Router>
  );
}

export default App;
