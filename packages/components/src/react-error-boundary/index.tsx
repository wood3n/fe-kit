import React from "react";

export interface ErrorBoundaryProps {
  /** error fallback render */
  fallback: React.ReactNode | ((error: unknown) => React.ReactNode);
  /** default children */
  children: React.ReactNode;
  /** do sth. on error */
  onError?: (error: unknown, errorInfo: React.ErrorInfo) => void;
}

interface StateType {
  hasError: boolean;
  error: unknown;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, StateType> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, errorInfo: React.ErrorInfo): void {
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return typeof this.props.fallback === "function" ? this.props.fallback(this.state.error) : this.props.fallback;
    }

    return this.props.children;
  }
}
