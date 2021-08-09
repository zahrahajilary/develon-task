// i wrote this component with class component beacause error bounary dosent provide any hooks in function component

import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  // set the types for error  and info
  componentDidCatch() {}
  componentDidUpdate() {
    if (this.state.hasError) {
      return { hasError: true };
    }
  }
  render() {
    if (this.state.hasError) {
      return <h1>some Error was happend</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
