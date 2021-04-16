import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ItemPage from "./components/ItemPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      {" "}
      <Provider store={store}>
        <Router>
          <Nav />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/shop'>
            <Shop />
          </Route>
          <Route exact path='/cart' component={Cart}></Route>
          <Route exact path='/shop/:name' component={ItemPage}></Route>
        </Router>
      </Provider>
    </>
  );
}

export default App;
