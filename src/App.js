import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import './App.css';

import MainNavigation from './shared/components/MainNavigation';
import Spare from './pages/Spare';
import NewSpare from './pages/NewSpare';

const App = () => {
  return <Router>
      {/* <Switch> prevents to evaluate ALL the Route components */}
      <MainNavigation />
      <Switch>
          <Route path="/" exact >
              {/* List all spare parts */}
              {/* <h1>This works!</h1> */}
              <Spare />
          </Route>
          {/* create a new part */}
          <Route path='/spare/new/' exact>
              <NewSpare />
          </Route>
          <Route  path='/supplier/new' exact >
              {/* create a new supplier */}
          </Route>
          <Redirect to="/" />
      </Switch>
  </Router>;
}

export default App;
