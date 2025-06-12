import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center text-red-600 p-8">
        <h1 className="text-4xl font-bold mb-2">Error {error.status}</h1>
        <p className="text-lg mb-4">{error.statusText}</p>
        <p className="text-sm text-gray-500">{error.data || 'Something went wrong.'}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center text-red-600 p-8">
      <h1 className="text-4xl font-bold mb-2">Unexpected Error</h1>
      <p className="text-sm">{(error as Error).message}</p>
    </div>
  );
};

export default ErrorBoundary;
