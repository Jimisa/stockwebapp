import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import './App.css';

import MainNavigation from './shared/components/MainNavigation';
import Spare from './pages/Spare';
import NewSpare from './pages/NewSpare';
import SpareDetails from './pages/SpareDetails';
import Footer from './shared/components/Footer';

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
          <Route path='/spare/:spareid' component={SpareDetails} exact />
          {/* <SpareDetails />
          </Route> */}
          <Route path='/credits'>
              <div>
                  By © 2014 Andreas Kainz &amp; Uri Herrera &amp; Andrew Lake &amp; Marco Martin &amp; Harald Sitter &amp; Jonathan Riddell &amp; Ken Vermette &amp; Aleix Pol &amp; David Faure &amp; Albert Vaca &amp; Luca Beltrame &amp; Gleb Popov &amp; Nuno Pinheiro &amp; Alex Richardson &amp; Jan Grulich &amp; Bernhard Landauer &amp; Heiko Becker &amp; Volker Krause &amp; David Rosca &amp; Phil Schaf&nbsp;/&nbsp;KDE,
                  <a href="http://www.gnu.org/licenses/lgpl.html" title="GNU Lesser General Public License">LGPL</a>,
                  <a href="https://commons.wikimedia.org/w/index.php?curid=49046470">Link</a>
                  <a href="https://commons.wikimedia.org/w/index.php?curid=49049449">Link</a>
                  <a href="https://commons.wikimedia.org/w/index.php?curid=49049244">Link</a>
                  <a href="https://commons.wikimedia.org/w/index.php?curid=49049108">Link</a>
              </div>
          </Route>
          <Redirect to="/" />
      </Switch>
      <Footer />
  </Router>;
}

export default App;
