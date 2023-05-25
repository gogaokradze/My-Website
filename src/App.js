import Header from "./components/Header.js";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer.js";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen text-gray-800">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
