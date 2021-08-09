import React from 'react'
import Home from './Home';
import About from './About';
import Team from './Team';
import Projects from './Projects';
import Contacts from './Contacts';
import NotFound from './404'
import CMC from './CMC'
import THE from './THE'
import HL from './HL'
import Fleet from './Fleet'
import { Router } from "@reach/router";

const App = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
    <Team path="/team" />
    <Projects path="/projects" />
    <Contacts path="/contacts" />
    <CMC path="/services/construction-and-mining-constructors" />
    <THE path="/services/transportation-of-heavy-equipment" />
    <HL path="/services/rental" />
    <Fleet path="/fleet/:fleetID" />
    <NotFound path="/404" default />
  </Router>
)


export default App
