import {Routes,Route} from "react-router-dom" 
import Navigation from "../Components/Navigation";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
const App = () => {
  return (
    <div className="h-screen bg-indigo-800 text-white">
        <header className="bg-indigo-900 h-20 text-white flex justify-between items-center p-4 text-2xl">
          <h1>My website</h1>
          <Navigation />
        </header>
         <main className="bg-indigo-700 h-[80%] flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
         </main>
      
      <footer className="h-[100px] text-center font-bold">
          <h1>@copy;{new Date().getFullYear()} | surafel Mengist</h1>
      </footer>

    </div>
  )
};

export default App;