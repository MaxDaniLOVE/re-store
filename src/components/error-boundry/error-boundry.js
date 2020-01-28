import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch(error, info) {
    this.state({
      hasError: true
    })
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    
    return this.props.children;
  }
}

export default ErrorBoundry;
