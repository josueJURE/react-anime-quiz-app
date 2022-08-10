import React, {useState} from "react";

const customStyle = {
  height: "30px",
  width: "30px",
  margin: "10px",
}

function Squares(props) {
  return (
    <div
     style={{...customStyle, backgroundColor: props.color}}></div>
  )
}

export default Squares


// {height: "30px", width: "30px", "margin": "10px", backgroundColor: "grey"}
