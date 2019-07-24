import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Notes from './pages/note/Notes';
import NewNote from './pages/note/NewNote';
import SignIn from './pages/user/SignIn';
import SignUp from './pages/user/SignUp';
import Profile from './pages/user/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile" exact component={Profile} />
        <Route path="/app" exact component={Notes} />
        <Route path="/edit/:id" component={NewNote} />
        <Route path="/create" component={NewNote} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={SignIn} />
      </Switch>
    </Router>
  );
} 
  
  export default App;
