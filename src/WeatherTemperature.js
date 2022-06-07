import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span>{Math.round(props.fahrenheit)}</span>
      <span className="unit">°F </span>
    </div>
  );
}
