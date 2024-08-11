import React from "react";

export interface ErrorBoundaryProps {
  /** error fallback render */
  fallback: React.ReactNode;
  /** default children */
  children: React.ReactNode;
  /** do sth. on error */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface StateType {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, StateType> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
