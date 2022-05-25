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

      <div className="row">
        <div className="col-8">
          <div className="clearfix temp">
            <img
              className="resize"
              src="https://cdn-icons-png.flaticon.com/128/869/869869.png"
              alt="Sunny"
              id="icon"
            />
            <div className="temperature">
              <strong id="temp">19</strong>
              <span className="unit">°F</span>
            </div>
          </div>
        </div>
        <div className="col-3">
          <ul>
            <li>
              {" "}
              Wind:10 <span id="wind"> </span> mph{" "}
            </li>
            <li>
              Humidity:5 <span id="humidity"></span>%
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div class="days">
        <div class="row">
          <div class="col">Sun </div>
          <div class="col">Mon</div>
          <div class="col">Tue</div>
          <div class="col">Wed</div>
          <div class="col">Thu</div>
        </div>
      </div>
      <div class="dates">
        <div class="row">
          <div class="col">1/23</div>
          <div class="col">1/24</div>
          <div class="col">1/25</div>
          <div class="col">1/26</div>
          <div class="col">1/27</div>
        </div>
      </div>
      <br />
      <div class="condition">
        <div class="row">
          <div class="col">
            <div class="forecast">
              {" "}
              <h1>☀️</h1> <strong>32°F</strong> <br /> <small>20°F</small>{" "}
            </div>
          </div>
          <div class="col">
            {" "}
            <div class="forecast">
              <h1>❄️</h1> <strong>32°F</strong> <br /> <small>20°F</small>
            </div>
          </div>
          <div class="col">
            <div class="forecast">
              <h1>🌤</h1> <strong>32°F</strong> <br /> <small>20°F</small>
            </div>
          </div>
          <div class="col">
            <div class="forecast">
              <h1>💨</h1> <strong>32°F</strong> <br /> <small>20°F</small>
            </div>
          </div>
          <div class="col">
            <div class="forecast">
              <h1>☁️</h1> <strong>32°F</strong> <br /> <small>20°F</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
