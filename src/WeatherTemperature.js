import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }
  if (unit === "fahrenheit") {
    return (
      <div>
        <span>{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" rel=" noopener noreferrer" onClick={convertToCelsius}>
            °C{" "}
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round(celsius)}</span>
        <span className="unit">
          <a href="/" rel=" noopener noreferrer" onClick={convertToFahrenheit}>
            °F |{" "}
          </a>{" "}
          °C{" "}
        </span>
      </div>
    );
  }
}
