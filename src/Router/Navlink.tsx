import { NavLink } from "react-router-dom";


const Navlink = () => {
    const activeLinks = ({isActive}:{isActive:boolean})=>{
        return{
            color:isActive ? "red" : "white",
            textDecoration: isActive ? "underline" : "none",
            fontWeight:isActive ? "bold" : "normal"
        }
    }
  return (
    <div className="bg-indigo-900 text-white flex items-center justify-between">
         <ul className="flex justify-evenly items-center p-4 gap-4">
            <NavLink style={activeLinks} to="/"> Home</NavLink>
            <NavLink style={activeLinks} to="/about"> About</NavLink>
            <NavLink style={activeLinks} to="/layout"> Layout</NavLink>
            <NavLink style={activeLinks} to="/products"> Products</NavLink>

         </ul>
    </div>
  )
};

export default Navlink;