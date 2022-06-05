import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "09ec95738393d0da1f446dc7befd7f43";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="days">
      <div className="row">
        <div className="col">Sun </div>
        <div className="col">Mon</div>
        <div className="col">Tue</div>
        <div className="col">Wed</div>
        <div className="col">Thu</div>
      </div>
    </div>
  );
}
