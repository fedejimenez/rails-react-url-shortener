import React from "react";
import { Router } from "@reach/router";
import UrlPage from "./pages/UrlPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <UrlPage path="/urls" />
    </Router>
  );
}

export default App;
