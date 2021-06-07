// EXTERNAL
import React, { useState, useEffect } from "react";
import axios from "axios";
// STYLES
import "./styles.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const { data } = await axios.get(
      "https://randomuser.me/api/?page=3&results=5&seed=abc"
    );
    setData(data);
  };

  useEffect(() => {
    setIsLoading(true);
    getAPIData();
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <h1>
        <span id="brand">Picnic</span> Tech Test
      </h1>
      <p>
        Please follow the instructions in the <code>README</code> file
      </p>
      <hr />
      {/*  */}

      {/*  */}
    </div>
  );
}
