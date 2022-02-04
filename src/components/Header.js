import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './HomePage';
import Projects from './Projects';
import { Sun,Moon } from './icons';
import AboutPage from './AboutPage';

const Header = ({darkTheme,setDarkTheme}) => {
  return (
    <Router>
      <div >
      <div className='w-3/5 m-auto'>
        <nav className='flex justify-around'>
          <ul className='flex m-auto justify-start space-x-8 h-full text-lg h-52 items-center flex-grow'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button className='pl-16 lg:pl-0' onClick={()=>setDarkTheme(!darkTheme)}>{darkTheme ? <Sun/> : <Moon/>}</button>
        </nav>
        </div>
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default Header;
