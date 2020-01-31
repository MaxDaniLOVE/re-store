import React from 'react';
import {
  CartPage,
  HomePage,
  BookInfo
} from '../pages';
import { Switch, Route} from 'react-router-dom';
import ShopHeader from '../shop-header';

const App = () => {
  return (
    <main>
      <ShopHeader />
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/cart" component={CartPage} />
        <Route path="/book-info" component={BookInfo} />
      </Switch>
    </main>
   
  );
}

export default App;
