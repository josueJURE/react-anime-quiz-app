import React, {useState, useEffect} from "react";


function Clock(props) {

  let [time, setTime] = useState(props.value)

  useEffect(()=> {
    let myInterval = setInterval(() => {
      if(time > 0) {
        setTime(time -1)
      } if (time === 0) {
        setTime(10)
      }
    }, 1000)

    return () => {
      clearInterval(myInterval)
    }


  }, [time])




  return (<div>{time}</div>)


}

export default Clock
