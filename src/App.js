import Clock from "./Clock"
import { anime } from "./ImagesHandler"
import './App.css';
import { useState, useEffect} from 'react';

function App() {
  const [imageCounter, setImageCounter] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    let myInterval = setInterval(() => {
      if(imageCounter < 1) {
        setImageCounter(imageCounter + 1)
      }
    }, 10000)

    return() => {
      clearInterval(myInterval)
    }
  }, [imageCounter])

  const handleClick = (e) => {
    e.preventDefault();
    if(e.target.value === anime[imageCounter].name) {
      setScore(score + 1)
    }
    if(imageCounter < 1) {
      setImageCounter(imageCounter + 1)
    }
  }

  const reset = (e) => {
    e.preventDefault();
    setScore(0);
    setImageCounter(0);
  }

  return (
    <div>
      <h1 style={{ fontSize: '40px', color: 'red'}}>Your Score: {score}</h1>
      <div>
        <h1>{anime[imageCounter].name}</h1>
        <img src={`${anime[imageCounter].picture}`} style={{ height: '150px', width: '300px'}}/>
        {anime[imageCounter].answers.map((answer, index) => <button key={index} value={answer} onClick={(e) => handleClick(e)}>{answer}</button>)}
        <button onClick={(e) => reset(e)}>RESET</button>
      </div>
    </div>
  );
}

export default App;
