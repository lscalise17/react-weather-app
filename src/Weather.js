import React from "react";

export default function Description() {
  return (
    <div className="Description">
      <form id="search-form" className="mb-4">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Search a city"
              autocomplete="off"
              autofocus="on"
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
      <h1 id="city">Chicago </h1>
      <ul id="update">
        <li>
          Today: Saturday <span className="date"> 8:30pm </span>
        </li>
        <hr />
      </ul>
      <div id="weather-condition">Clear</div>
    </div>
  );
}
