
import React, { Suspense,lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Resume from './pages/Resume';
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/about" component={About}/>
            <Route path="/resume" component={Resume}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
