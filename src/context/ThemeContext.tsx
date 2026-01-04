import { createContext, useContext, useState, type ReactNode } from "react";

/* 1. Define the context type */
type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
};

/* 2. Create context with undefined default */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/* 3. Props for the provider */
type ThemeProviderProps = {
  children: ReactNode;
};

/* 4. ThemeProvider component */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/* 5. Custom hook for consuming context safely */
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};
