
import React, { Suspense,lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/about"/>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
