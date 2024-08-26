// greets the user based on the time of day
import React from "react";
import daySVG from "../assets/day.svg";
import eveningSVG from "../assets/day.svg";
import nightSVG from "../assets/day.svg";

function Greeting() {
  let message;

  const date = new Date();
  const hour = date.getHours();
//   console.log(hour);

  if (hour >= 6 && hour < 12) {
    message = (
      <h1 className="greeting">
        <img src={daySVG} alt="day logo"></img>Good Morning!
      </h1>
    );
  } else if (hour >= 12 && hour < 17) {
    message = (
      <h1 className="greeting">
        <img src={daySVG} alt="day logo"></img>Good Afternoon!
      </h1>
    );
  } else if (hour >= 17 && hour < 20) {
    message = (
      <h1 className="greeting">
        <img src={eveningSVG} alt="evening logo"></img>Good Evening!
      </h1>
    );
  } else {
    message = (
      <h1 className="greeting">
        <img src={nightSVG} alt="night logo"></img>Good Night!
      </h1>
    );
  }

  return <div>{message}</div>;
}

export default Greeting;
