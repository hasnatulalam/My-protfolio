<<<<<<< HEAD
import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopscrollButton from './components/TopscrollButton';
import Snowfall from 'react-snowfall'
=======
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';

/* import Projects from './components/Projects/Projects'; */
>>>>>>> origin
import AOS from 'aos';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Contact from './components/Contact/Contact';
import About from './components/About/About';

export const activeContext = createContext();

library.add(fab, faCheckSquare, faCoffee)


function App() {

  AOS.init();

  // sessionStorage.setItem("active", "home");
  const [active, setActive] = useState('home');

  return (
<<<<<<< HEAD
    
    <div className="App">
      <Header/>
      <Snowfall />
      <About/>
      <Skills/>
      <Service/>
      <Portfolio/> 
    
      <Contact/>
      <Footer/>
      <TopscrollButton/>
    </div>
    
=======
    <activeContext.Provider value={[active, setActive]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
         {/*  <Route path="/portfolio">
            <Projects />
          </Route> */}
          <Route path="/contact">
            <Contact />
          </Route>
         
        </Switch>
      </Router>
    </activeContext.Provider>
>>>>>>> origin
  );
}

export default App;
