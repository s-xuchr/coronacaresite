import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
        <NavigationBar />
        <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={NoMatch} />
            <Route path="/bot" render={() => window.location = 'm.me/coronacareai'}/>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
