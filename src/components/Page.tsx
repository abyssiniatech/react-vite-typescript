import { useTheme } from "../context/ThemeContext";

const Page = () => {
  const { dark } = useTheme();

  return (
    <main
      className={`p-6 min-h-[calc(100vh-64px)] transition-colors duration-300 ${
        dark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-4">Context API with React + TS</h2>
      <p>This page responds to the Dark Mode toggle globally using Context API.</p>
    </main>
  );
};

export default Page;
