import { useContext } from "react";
import { SolveContext } from "../context/SolveContext";

const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { solve, setSolve } = useContext(SolveContext);

  // User click comma
  const commaClick = () => {
    setSolve({
      ...solve,
      digit: !solve.digit.toString().includes(".")
        ? solve.digit + value
        : solve.digit,
    });
  };
  // User click C
  const resetClick = () => {
    setSolve({ sign: "", digit: 0, res: 0 });
  };
  // User click digit
  const handleClickButton = () => {
    const digitString = value.toString();

    let digitValue;
    if (digitString === "0" && solve.digit === 0) {
      digitValue = "0";
    } else {
      digitValue = Number(solve.digit + digitString);
    }

    setSolve({
      ...solve,
      digit: digitValue,
    });
  };
  // User click operation
  const signClick = () => {
    setSolve({
      sign: value,
      res: !solve.res && solve.digit ? solve.digit : solve.res,
      digit: 0,
    });
  };
  // User click equals
  const equalsClick = () => {
    if (solve.res && solve.digit) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b).toFixed(2);
      };
      setSolve({
        res: math(solve.res, solve.digit, solve.sign),
        sign: "",
        digit: 0,
      });
    }
  };
  // User click persent
  const persentClick = () => {
    setSolve({
      digit: solve.digit / 100,
      res: solve.res / 100,
      sign: "",
    });
  };
  // User click invert button
  const invertClick = () => {
    setSolve({
      digit: solve.digit ? solve.digit * -1 : 0,
      res: solve.res ? solve.res * -1 : 0,
      sign: "",
    });
  };

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "=": equalsClick,
      "%": persentClick,
      "+-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
