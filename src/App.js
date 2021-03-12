import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import RestaurantIndexContainer from './containers/RestaurantIndexContainer';
import EventIndexContainer from './containers/EventIndexContainer';

function App() {
  return (
    <div>
      <Router>
        <nav className="text-center bg-blue-900 text-yellow-100 p-4">
          <NavLink 
            className="inline-block px-4 p-2" 
            activeClassName="text-yellow-300"
            exact
            to="/"
            >
              Home
          </NavLink>
          <NavLink 
            className="inline-block px-4 p-2" 
            activeClassName="text-yellow-300"
            to="/restaurants"
            >
              Search
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <EventIndexContainer />
          </Route>
          <Route path="/restaurants">
            <RestaurantIndexContainer />
          </Route>
          <Route path="/events/new">Create New Event</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;