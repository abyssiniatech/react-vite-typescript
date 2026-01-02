import { NavLink,Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";

const App = () => {
  
  return (
    <div className="h-screen w-full">
      <header className="bg-indigo-700 text-white flex items-center justify-center p-4 text-3xl gap-4">
        <NavLink className="text-white p-4 rounded hover: bg-indigo-500 border-gray-100 border" to="/" >Home</NavLink>
        <NavLink className="text-white p-4 rounded hover: bg-indigo-500 border-gray-100 border" to="/about" >About</NavLink>
        <NavLink className="text-white p-4 rounded hover: bg-indigo-500 border-gray-100 border" to="/Product" >Product</NavLink>
        <NavLink className="text-white p-4 rounded hover: bg-indigo-500 border-gray-100 border" to="/contact" >Contact</NavLink>
        </header>
        <main className="bg-indigo-900 text-white h-screen ">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route  path="/about" element ={<About/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />}/>
          </Routes>
        </main>
         <footer className="bg-indigo-600 text-red">
             <h1>&copy; surafel mengist {new Date().getFullYear()}</h1>
         </footer>
      </div>
  )
};

export default App;