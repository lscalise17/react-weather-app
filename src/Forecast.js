import React from "react";

export default function Forecast() {
  return (
    <div className="Container">
      <div className="days">
        <div className="row">
          <div className="col">Sun </div>
          <div className="col">Mon</div>
          <div className="col">Tue</div>
          <div className="col">Wed</div>
          <div className="col">Thu</div>
        </div>
      </div>
      <div className="dates">
        <div className="row">
          <div className="col">1/23</div>
          <div className="col">1/24</div>
          <div className="col">1/25</div>
          <div className="col">1/26</div>
          <div className="col">1/27</div>
        </div>
      </div>
      <br />
      <div className="condition">
        <div className="row">
          <div className="col">
            <div className="forecast">
              {" "}
              <h1>☀️</h1> <strong>32°F</strong> <br /> <small>20°F</small>{" "}
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="forecast">
              <h1>❄️</h1> <strong>32°F</strong> <br /> <small>20°F</small>
            </div>
          </div>
          <div className="col">
            <div className="forecast">
              <h1>🌤</h1> <strong>32°F</strong> <br /> <small>20°F</small>
            </div>
          </div>
          <div className="col">
            <div className="forecast">
              <h1>💨</h1> <strong>32°F</strong> <br /> <small>20°F</small>
            </div>
          </div>
          <div className="col">
            <div className="forecast">
              <h1>☁️</h1> <strong>32°F</strong> <br /> <small>20°F</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
