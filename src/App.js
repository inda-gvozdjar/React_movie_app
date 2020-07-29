
import React, { Component } from 'react';
import Popular from './components/Popular';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import SearchApp from './components/SearchApp'
import { Redirect } from 'react-router'
import Selected from './components/Selected'

class App extends Component {


  render() {
    return (
      <Router >
        <div>
          <button className="fetch-button" >
            <Link to="/movie/popular" className="fetch-button">Movies</Link>
          </button>
          <button className="fetch-button"  >
            <Link to="/tv/popular" className="fetch-button">Tv shows</Link>
          </button>

          <Switch>

            <Route exact path="/details/movie/:id" component={Selected} />
            <Route exact path="/details/tv/:id" component={Selected} />
            <Route path="/:id" component={SearchApp} />
          </Switch>

          <Redirect exact from="/" to="/tv/popular" />
          <Route exact path="/movie/popular" component={Popular} title="Poplar Movies" />
          <Route exact path="/tv/popular" component={Popular} title="Popular Series" />

        </div>
      </Router>
    )
  }
}

export default App;

