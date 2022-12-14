import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetailsContainer from "./components/MovieDetailsContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/movie-details/:id" element={<MovieDetailsContainer />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
