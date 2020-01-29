import React from 'react';
import {
  CartPage,
  HomePage
} from '../pages';
import { Switch, Route} from 'react-router-dom';
import ShopHeader from '../shop-header';

const App = () => {
  return (
    <main>
      <ShopHeader total={59.99} numItems={3}/>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
   
  );
}

export default App;
