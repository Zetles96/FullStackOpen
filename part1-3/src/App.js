import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Anecdote = ({ text, votes }) => {
  if (votes === 1) {
    return (
      <div>
        <p>{text}</p>
        <p>has {votes} vote</p>
      </div>
    );
  }
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [mostVotesIndex, setMostVotesIndex] = useState(0);

  const handleNextAnecdoteClick = () => {
    let randomNumner = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumner);
  };

  const handleVotesClick = () => {
    console.log(votes);
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    setMostVotesIndex(copy.indexOf(Math.max(...copy)));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]}></Anecdote>
      <Button text={"Vote"} handleClick={handleVotesClick}></Button>
      <Button
        text={"Next anecdote"}
        handleClick={handleNextAnecdoteClick}
      ></Button>
      <h1>Anecdote with the most votes</h1>
      <Anecdote
        text={anecdotes[mostVotesIndex]}
        votes={votes[mostVotesIndex]}
      ></Anecdote>
    </div>
  );
}

export default App;
