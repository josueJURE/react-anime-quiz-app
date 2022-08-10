import Clock from "./Clock";
import { anime } from "./ImagesHandler";
// import './App.css';
import { useState, useEffect} from 'react';
import Buttons from "./UserAnswer";
import TrackQuestion from "./TrackQuestion";
import AppStyle from "./AppStyle.css";
import Squares from "./Squares"

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    [
      null,
      null,
      null,
      null,
      null
    ]
  );


  let animeArray = anime;

  console.log(animeArray)

  useEffect(() => {
    let myInterval = setInterval(() => {
      // if the question hasn't been answered
      if(userAnswers[currentQuestion] === null) {
        // set current state for all questions except the current one
        // set the curret question incorrect because user failed to answeer in time
        setUserAnswers(
          userAnswers.map(
            (answer, index) =>
              index === currentQuestion && userAnswers[currentQuestion] === null ? false : answer
            )
        )
      }
    }, 10000)

    return () => {
      clearInterval(myInterval)
    }
  }, [currentQuestion]);

  const handleClick = (e) => {
    e.preventDefault();
    if(e.target.innerHTML === anime[currentQuestion].name) {
      setScore(score + 1);
      setUserAnswers(userAnswers.map(
        (answer, index) => index === currentQuestion ? true : answer
      ));
    }
    if(e.target.innerHTML !== anime[currentQuestion].name) {
      setUserAnswers(userAnswers.map(
        (answer, index) => index === currentQuestion ? false : answer
      ));
    }
    if(currentQuestion < anime.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  const reset = (e) => {
    e.preventDefault();
    setScore(0);
    setCurrentQuestion(0);
  }

  return (
    <div>
      <h1 style={{ fontSize: '40px', color: 'red'}}>Your Score: {score}</h1>
      <TrackQuestion
        score={score}
        length={anime.length}
      />
      <img src={`${anime[currentQuestion].picture}`} style={{ height: '150px', width: '300px'}}/>
      {anime[currentQuestion].answers.map((answer, index) =>
        <Buttons
          key={index}
          id={index}
          value={answer}
          onChecked={() => {

          }}
        />)
      }
      <button onClick={(e) => reset(e)}>RESET</button>
      {userAnswers.map((answer, index) => {
        let color;
        if (answer === true) color = "green"
        else if (answer === false) color = "red"
        else color = "gray"
        return <Squares key={index} color={color}/>
      })}
    </div>
  );
}




export default App;
