import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <Page />
      </div>
    </ThemeProvider>
  );
};

export default App;
