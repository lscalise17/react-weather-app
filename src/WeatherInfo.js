import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          <div className="calendar">
            {" "}
            <span>
              {" "}
              Today: <FormattedDate date={props.data.date} />{" "}
            </span>
          </div>{" "}
        </li>
        <hr />
      </ul>
      <div className="report text-capitalize">{props.data.condition}</div>

      <div className="row">
        <div className="col-8">
          <div className="clearfix temp">
            <WeatherIcon code={props.data.icon} />

            <strong className="number">
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </strong>
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li> Wind: {Math.round(props.data.wind)} mph </li>
            <li>Humidity: {props.data.humidity} %</li>
          </ul>
        </div>
      </div>

      <hr />
    </div>
  );
}
