
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {Switch , Route} from "react-router-dom";  
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Singleproduct from  "./pages/SingleProduct";
import Navbar from "./components/Navbar";
import Error from "./pages/Erorr";
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/products/:id" component={Singleproduct}/>
      <Route  component={Error}/>
     
    </Switch>


    </>
  );
}

export default App;
