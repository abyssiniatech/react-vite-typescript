import { createContext } from "react";

export type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const CounterContext =
  createContext<CounterContextType | null>(null);
