import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home'
import Jobs from './jobs'
import Inbox from './inbox'
import CarrierPage from './carrierpage'
import calendar from './Calendar'
import NavigationBarHeader from './NavigationBar'
import Reports from './reports'
import { BrowserRouter as Router, Route ,Redirect,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        
     <Router>
     <NavigationBarHeader/>
     <Switch>
        <Route path="/jobs" component={Jobs} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/carrier" component={CarrierPage} />
        <Route path="/calendar" component={calendar} />
        <Route path="/reports" component={Reports} />
        <Redirect to='/jobs' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
