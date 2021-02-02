import React from 'react'
import Home from './Home';
import About from './About';
import Team from './Team';
import Projects from './Projects';
import Contacts from './Contacts';
import { Router } from "@reach/router";

const App = () => (
  <Router>
    <Home path="/" />
    <About path="about" />
    <Team path="team" />
    <Projects path="projects" />
    <Contacts path="contacts" />
  </Router>
)


export default App
