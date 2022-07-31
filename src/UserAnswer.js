import React from "react";


function UserAnswer(props) {
  return (<div>
      <button  onClick={e => props.onChecked(e)}>{props.value}</button>
    </div>)
}


export default UserAnswer;
