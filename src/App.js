import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import UsersContainer from './components/usersContainer';
import GroupsContainer from './components/groupsContainer';
import Login from "./components/login";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="w-25 d-flex">
            <Link className="text-white" to="/">Groups</Link>
            <Link className="ml-3 text-white" to="/users">Users</Link>
            <Link className="ml-3 text-white" to="/login">Login</Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <GroupsContainer />
          </Route>
          <Route exact path="/users">
            <UsersContainer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
