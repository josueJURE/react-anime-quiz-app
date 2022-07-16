import React, {useState, useEffect} from "react";


function Clock(props) {

  let [time, setTime] = useState(props.value);

  useEffect(() => {
    if(time > 0) {
      setInterval(() => setTime(time -1), 1000)
    } else {
      setInterval(() => setTime(11 -1), 1000)
    }
  }, [time])


  return (<div>{time}</div>)
}


export default Clock;
