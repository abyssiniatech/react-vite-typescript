import { NavLink, Outlet, useNavigate } from "react-router-dom"

const Products =()=>{
    const navigate=useNavigate()
    return(
        <div className="bg-teal-700 text-white rounded ">
         <input type="text" placeholder="enter the products" />
           <nav className="bg-indigo-900 text-white flex gap-4 items-center justify-center p-4 mt-4">

            <NavLink  className="bg-green-800 text-white px-6 py-3 rounded text-2xl" to="new">New product</NavLink>
            <NavLink  className="bg-green-800 text-white px-6 py-3 rounded text-2xl" to="feature">Feature products</NavLink>
             <button onClick={()=>navigate('/')}>Go to home</button>
           </nav>
           <Outlet />
        </div>
    )
}
export default Products