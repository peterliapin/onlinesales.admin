import { FallbackProps } from "react-error-boundary";

export function ErrorBoundaryFallbackPage ({error, resetErrorBoundary} : FallbackProps) {
  return (
    <div>
      <span>Something went wrong</span>
      <br />
      {`${error}`}
    </div>
  );
};
