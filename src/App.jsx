import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/");

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Header data={data} />
      <Main data={data} />
    </>
  );
}

export default App;
