import { createContext, useState } from "react";

export const SolveContext = createContext();

const SolveProvider = ({ children }) => {
  const [solve, setSolve] = useState({
    sign: "",
    digit: 0,
    res: 0,
  });
  const providerValue = {
    solve,
    setSolve,
  };
  return (
    <div>
      <SolveContext.Provider value={providerValue}>
        {children}
      </SolveContext.Provider>
    </div>
  );
};

export default SolveProvider;
