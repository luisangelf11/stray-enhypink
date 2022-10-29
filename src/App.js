import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Reproducer from "./components/Reproducer";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return <div>{loading === true ? <Loader /> : <Reproducer />}</div>;
}

export default App;
