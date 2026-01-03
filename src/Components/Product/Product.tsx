import { Link } from "react-router-dom";


const Product = () => {
  return (
  <>
    <div className="flex justify-center m-auto w-50 items-center border border-gray-50 p-4 rounded">Product Page!</div>
   <Link to="/"> <button>Back to home page</button></Link>
  </>
  )
};

export default Product;