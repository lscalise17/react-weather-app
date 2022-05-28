import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.main.wind.speed,
      description: response.data.weather[0].description,
      date: "Saturday: 9:00",
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Description">
        <form id="search-form" className="mb-4">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a city"
                autoComplete="off"
                autoFocus="on"
                id="search-text-input"
                size="25"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary"
                id="search-btn"
              />
            </div>
          </div>
        </form>
        <h1 id="city">{weatherData.city} </h1>
        <ul id="update">
          <li>Today: {weatherData.date}</li>
          <hr />
        </ul>
        <div>{weatherData.description}</div>

        <div className="row">
          <div className="col-8">
            <div className="clearfix temp">
              <img
                className="resize"
                src="https://cdn-icons-png.flaticon.com/128/869/869869.png"
                alt={weatherData.description}
                id="icon"
              />
              <div className="temperature">
                <strong id="temp">{Math.round(weatherData.temperature)}</strong>
                <span className="unit">°F</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <ul>
              <li>
                {" "}
                Wind: <span id="wind">{weatherData.wind} </span> mph{" "}
              </li>
              <li>
                Humidity: <span id="humidity"> {weatherData.humidity}</span>%
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "09ec95738393d0da1f446dc7befd7f43";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "loading..";
  }
}
