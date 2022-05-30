import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          <div className="calendar">
            {" "}
            Today:
            <FormattedDate date={props.data.date} />{" "}
          </div>{" "}
        </li>
        <hr />
      </ul>
      <div className="report text-capitalize">{props.data.condition}</div>

      <div className="row">
        <div className="col-8">
          <div className="clearfix temp">
            <img
              className="resize"
              src="https://cdn-icons-png.flaticon.com/128/869/869869.png"
              alt=""
              id="icon"
            />
            <div className="temperature">
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="unit">°F</span>
            </div>
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
