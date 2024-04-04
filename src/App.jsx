import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";

import "./index.css";

const App = () => (
  <>
    <Counter />
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
