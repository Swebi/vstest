"use client";
import React, { Component } from "react";

class CustomErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    if (error && error.name === "InvalidStateError") {
      this.setState({ hasError: true });
    } else {
      console.error(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

export default CustomErrorBoundary;
