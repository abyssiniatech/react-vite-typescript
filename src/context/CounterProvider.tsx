import { type ReactNode, useState } from "react";
import { CounterContext } from "./CounterContext";

type Props = {
  children: ReactNode;
};

export const CounterProvider = ({ children }: Props) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider
      value={{ count, increment, decrement, reset }}
    >
      {children}
    </CounterContext.Provider>
  );
};
