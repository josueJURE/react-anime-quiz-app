import React from "react";


function Buttons(props) {
  return (<div>
      <button  onClick={e => props.onChecked(e)}>{props.value}</button>
    </div>)
}


export default Buttons;
