import { useContext } from "react";
import { SolveContext } from "../context/SolveContext";
import { Textfit } from "react-textfit";

const Screen = () => {
  const { solve } = useContext(SolveContext);

  return (
    <Textfit className="screen" max={70} mode="single">
      {solve.digit ? solve.digit : solve.res}
    </Textfit>
  );
};

export default Screen;
