import Header from "./components/Header.js";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer.js";
import { useHistory } from "react-router-dom";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [landed, setLanded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setLanded(true);
  }, []);

  useEffect(() => {
    return history.listen(() => {
      setLanded(false);

      setTimeout(() => {
        setLanded(true);
      }, 0);
    });
  }, [history]);

  return (
    <div className={`${darkTheme ? "dark" : ""} ${landed ? "landed" : ""}`}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen text-gray-800">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
