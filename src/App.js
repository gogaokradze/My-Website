import Header from './components/Header.js'
import React,{useState} from 'react'
import Footer from './components/Footer.js';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark':''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen text-gray-800">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
