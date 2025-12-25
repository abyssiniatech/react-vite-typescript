import img from "./surafel.JPG"

const Header:React.FC = () => {
  return (
    <div>
        <header className="bg-indigo-700 flex items-center text-white font-bold justify-around">
            <img className="w-12 h-12 rounded-full img-cover" src={img} alt=" no image here " />
            <h1 className="text-amber-600">Responsive website</h1>
            <ul className="flex justify-center items-center gap-4 text-white text-2xl ">
              <li className="list-none text-white"><a className="text-white decoration-none" href="#">About</a></li>
              <li className="list-none text-white"><a className="text-white decoration-none" href="#">Main</a></li>
              <li className="list-none text-white"><a className="text-white decoration-none" href="#">Product</a></li>
              <li className="list-none text-white"><a className="text-white decoration-none" href="#">Contact</a></li>
            </ul>
            
        </header>
    </div>
  )
};

export default Header;