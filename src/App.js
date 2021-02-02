import React from 'react'
import Home from './Home';
import About from './About';
import Team from './Team';
import Projects from './Projects';
import Contacts from './Contacts';
import NotFound from './404'
import { Router } from "@reach/router";

const App = () => (
  <Router>
    <Home path="/" />
    <About path="about" />
    <Team path="team" />
    <Projects path="projects" />
    <Contacts path="contacts" />
    <NotFound path="404" default />
  </Router>
)


export default App
