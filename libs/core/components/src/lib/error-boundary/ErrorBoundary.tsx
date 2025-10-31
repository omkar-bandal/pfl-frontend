import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  FallbackCompnent: React.ComponentType<{ resetErrorBoundary: () => void }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  resetErrorBoundary = (): void => {
    this.setState({ hasError: false });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      const {FallbackCompnent} = this.props;
      return <FallbackCompnent resetErrorBoundary={this.resetErrorBoundary} />
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
