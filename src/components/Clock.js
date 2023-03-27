import React, { useEffect, useState } from "react";

function Clock({handleDelete, offset, id, name}) {
  const date = new Date();
  const seconds = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();
  const secondBegin = ((seconds / 60) * 360) + 90;
  const minuteBegin = ((minute / 60) * 360) + ((seconds/60)*6) + 90;
  const hourBegin = (((hour + offset) / 12) * 360) + ((minute/60)*30) + 90;

  const [count, setCount] = useState(0)

  const counter = function() {
    setCount(count +1);
  }

  useEffect(() => {
    let interval = setInterval( () => {
      counter();
    }, 1000);

    return function clean() {
      clearInterval(interval);
    }
  })  
  
  return (
    <div className="clock-container" id={id}>
      <div className="clock-name">{name}</div>
      <div className="button-delete" onClick={handleDelete}>X</div>
      <div className="clock">
        <div className="outer-clock-face">
          <div className="marking marking-one"></div>
          <div className="marking marking-two"></div>
          <div className="marking marking-three"></div>
          <div className="marking marking-four"></div>
          <div className="inner-clock-face">
            <div className="hand hour-hand" style={{transform: `rotate(${hourBegin}deg)`}}></div>
            <div className="hand min-hand" style={{transform: `rotate(${minuteBegin}deg)`}}></div>
            <div className="hand second-hand" style={{transform: `rotate(${secondBegin}deg)`}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Clock;