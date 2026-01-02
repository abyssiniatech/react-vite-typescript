import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
import About from "./pages/about/About";

export default App;
