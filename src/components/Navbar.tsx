import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav
      className={`p-4 flex justify-between items-center transition-colors duration-300 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="font-bold text-xl">My App</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded  text-white  transition-colors duration-200"
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
