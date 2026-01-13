import { useContext } from "react";
import { CounterProvider } from "./CounterProvider";
export const useCounter = () => {
  const context = useContext<React.Context<unknown>>(useContext);

  if (!context) {
    throw new Error("useCounter must be used inside CounterProvider");
  }

  return context;
};
