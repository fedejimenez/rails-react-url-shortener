import React from "react";
import { Router } from "@reach/router";
import UrlList from "./UrlList";

function App() {
  return (
    <Router>
      <UrlList path="/" />
    </Router>
  );
}

export default App;
