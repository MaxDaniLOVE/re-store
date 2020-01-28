import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';

export class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundry>
          <Spinner />
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
