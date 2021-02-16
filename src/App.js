import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Panel from './pages/Panel';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/" component={Panel} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
