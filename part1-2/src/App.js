import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {" "}
        {Math.round(props.value * 10) / 10} {props.symbol}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return <h3>No feedback given</h3>;
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text={"Good"} value={good}></StatisticsLine>
          <StatisticsLine text={"Neutral"} value={neutral}></StatisticsLine>
          <StatisticsLine text={"Bad"} value={bad}></StatisticsLine>
          <StatisticsLine text={"All"} value={all}></StatisticsLine>
          <StatisticsLine
            text={"Average"}
            value={(1 * good + 0 * neutral + -1 * bad) / all}
          ></StatisticsLine>
          <StatisticsLine
            text={"Positive"}
            value={(good / all) * 100}
            symbol={"%"}
          ></StatisticsLine>
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text={"Good"}></Button>
      <Button handleClick={handleNeutralClick} text={"Neutral"}></Button>
      <Button handleClick={handleBadClick} text={"Bad"}></Button>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
      ></Statistics>
    </div>
  );
}

export default App;
