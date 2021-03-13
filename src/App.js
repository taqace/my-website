
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Projects from './pages/Projects';
import Stats from './pages/Stats'
import './static/css/main.scss'; // All of our styles
import Resume from './pages/Resume';

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/about" component={About}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/stats" component={Stats}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
