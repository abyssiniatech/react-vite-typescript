
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const handleactive=({isActive}:{isActive:boolean})=>{
    return {
       fontWeignt:isActive ? "bold" : "normal",
       textDecoration: isActive? "underLine": "none",
       color:isActive ? "pink": "white"
    }
  }
  return (
    <div className="p-2  flex items-center gap-4 justify-center">
        
            <NavLink style={handleactive} to="/">Home</NavLink>
            <NavLink style={handleactive} to="/about">About</NavLink>
            <NavLink style={handleactive} to="/contact">Contact</NavLink>
  
       
    </div>
  )
};

export default Navigation;