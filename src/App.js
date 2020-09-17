import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {AuthContext} from "./context/auth";
import {
  LoginPage, Story, Landing, SignUpPage, AddStory, PrivateRoute, NoAuthOnlyRoute, Header
} from './components'
import { getAllStories } from "./util/apis";
import {authInitialState, authReducer, authInit} from "./store/auth";

import './App.css';

function App() {
  // TODO: Check for existing tokens
  const [feed, setFeed] = React.useState([]);
  const [state, dispatch] = React.useReducer(authReducer, authInitialState, authInit);
  React.useEffect( () => {
    fetchData();
  }, [])

  const fetchData = async() => {
    await getAllStories().then((res) => res.json()).then((data) => setFeed(data));
  }

  return (
      <AuthContext.Provider
          value={{
            state, // state.user has user info and state.token has user token
            dispatch // for dispatching reducer actions
          }}
      >
        <Router>
          <div>
            <Header />
            <Switch>
              {/* NON-PROTECTED ROUTES */}
              <Route path="/" exact render={() => <Landing feed={feed} />} />
              <NoAuthOnlyRoute path="/login" component={LoginPage} exact /> {/*These routes can only be accessed when a user is not logged-in*/}
              <NoAuthOnlyRoute path="/signup" exact component={SignUpPage} />

              {/*PROTECTED ROUTES*/}
              <PrivateRoute path="/add-story" exact component={AddStory} />
              <PrivateRoute path="/story/:id" component={Story} />
            </Switch>
          </div>
        </Router>
      </AuthContext.Provider>
  );
}

export default App;
