import { default as React, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    FallbackCompnent: React.ComponentType<{
        resetErrorBoundary: () => void;
    }>;
}
interface ErrorBoundaryState {
    hasError: boolean;
}
export declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(_: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    resetErrorBoundary: () => void;
    render(): ReactNode;
}
export default ErrorBoundary;
