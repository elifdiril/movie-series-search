import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/details/:id"
            element={
              <div>
                <link
                  rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                />
                <Details />
              </div>
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
