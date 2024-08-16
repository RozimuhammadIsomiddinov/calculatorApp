import { useContext } from "react";
import { SolveContext } from "../context/SolveContext";

const Screen = () => {
  const { solve } = useContext(SolveContext);

  return (
    <div
      className="screen"
      max={70}
      mode="single"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        objectFit: "fill",
        fontSize: "1.7rem",
      }}
    >
      {solve.digit ? solve.digit : solve.res}
    </div>
  );
};

export default Screen;
