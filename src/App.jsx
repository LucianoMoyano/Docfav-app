import React, { useEffect, useState } from "react";
import { Link, Route, Switcher } from "react-router-dom";

//imports components
import JuegoCard from "./components/JuegoCard/JuegoCard";
import JuegoDetalle from "./components/JuegoDetalle/JuegoDetalle";

//import services
import JuegoService from "./services/JuegoService";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Hello world!</h1>
      </div>
    </>
  );
}

export default App;
