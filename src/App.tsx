import {  NavLink,Route,Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Product from "./Components/Product/Product";
import Contact from "./Components/Contact/Contact";
import Notfound from "./Components/notfound/Notfound";
const App = () => {
  return (
    <div className="bg-indigo-900 text-white text-2xl h-screen">
         <header className="bg-indigo-800 flex items-center gap-4 justify-center p-4 text-white ">
            <NavLink className="text-center text-white border border-gray-50 text-3xl p-4 rounded" to="/">Home</NavLink>
            <NavLink className="text-center text-white border border-gray-50 text-3xl p-4 rounded" to="/about">About</NavLink>
            <NavLink className="text-center text-white border border-gray-50 text-3xl p-4 rounded" to="/product">Product</NavLink>
            <NavLink className="text-center text-white border border-gray-50 text-3xl p-4 rounded" to="/contact">Contact</NavLink>
         </header>
         <main>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='*' element={<Notfound />} />
           </Routes>
         </main>
    </div>
  )
};

export default App;