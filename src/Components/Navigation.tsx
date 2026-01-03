
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="p-2  flex items-center gap-4 justify-center">
        
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
  
       
    </div>
  )
};

export default Navigation;