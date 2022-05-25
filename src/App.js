import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Chicago" />
        <footer>
          <a
            href="https://github.com/lscalise17/weatherreact"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            Open-Sourced on GitHub
          </a>
          {""} by Lauren Akinrinade and{" "}
          <a
            href="https://idyllic-tapioca-275a99.netlify.app/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
