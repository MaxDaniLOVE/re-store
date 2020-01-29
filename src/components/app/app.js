import React from 'react';
import {
  CartPage,
  HomePage
} from '../pages';
import { Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
}

export default App;
