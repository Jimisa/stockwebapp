import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Spare from './components/Spare';
import NewSpare from './pages/NewSpare';

const App = () => {
  return <Router>
      {/* <Switch> prevents to evaluate ALL the Route components */}
      <Switch>
          <Route path="/" exact >
              {/* <h1>This works!</h1> */}
              <Spare />
          </Route>
          <Route path='/spare/new/' exact>
              <NewSpare />
          </Route>
          <Redirect to="/" />
      </Switch>
  </Router>;
}

export default App;
