import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import RestaurantIndexContainer from './containers/RestaurantIndexContainer';
import EventIndexContainer from './containers/EventIndexContainer';
import NewEventContainer from './containers/NewEventContainer';

function App() {
  return (
    <div>
      <Router>
        <nav className="bg-gray-800 text-center text-white p-4">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"></div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <h1 className="text-purple-400 px-3 py-2 rounded-md text-2xl font-medium"> yaaasss </h1>
                <NavLink 
                  className="bg-gray-900 text-white px-4 py-3 rounded-md text-sm font-large" 
                  activeClassName="text-purple-200"
                  exact
                  to="/"
                  >
                    Home
                </NavLink>
                <NavLink 
                  className="bg-gray-900 text-white px-4 py-3 rounded-md text-sm font-xl" 
                  activeClassName="text-purple-200"
                  to="/restaurants"
                  >
                   Search
                </NavLink>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" >
            <EventIndexContainer/>
          </Route>
          <Route path="/restaurants">
            <RestaurantIndexContainer/>
          </Route>
          <Route path="/events/new" render={(routerProps => <NewEventContainer {...routerProps}/>)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;