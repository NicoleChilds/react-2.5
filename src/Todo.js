import React from 'react';

export default function Todo(props){
  console.log(props, "props");
  return(
    <div>
      <p> {props.task} </p>
      <button onClick={ ()=> props.remove(props.index) }>X</button>    
    </div>
  )
}