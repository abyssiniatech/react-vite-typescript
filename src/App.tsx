import {  Route, Routes } from "react-router-dom";
import Home from "./Router/Home"
import About from "./Router/About";
import Layout from "./Router/Layout"
import Navlink from "./Router/Navlink";
import Products from "./Router/Products";
import New from "./Router/New";
import Feature from "./Router/Feature";


const App = () => {
  return (
    <div>
       <Navlink/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/products" element={<Products />}>
         <Route path="new" element={<New />} />
         <Route path="feature" element={<Feature />} />
         
      </Route>
      </Routes>
    </div>
  )
};

export default App;