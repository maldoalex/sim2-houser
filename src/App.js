import React from "react";
import "./App.css";
import routes from "./routes";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
