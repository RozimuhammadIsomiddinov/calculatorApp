import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import SolveProvider from "./context/SolveContext";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  return (
    <SolveProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </ButtonBox>
      </Wrapper>
    </SolveProvider>
  );
};

export default App;
