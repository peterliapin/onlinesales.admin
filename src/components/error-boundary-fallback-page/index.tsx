import { ErrorBoundaryProps, FallbackProps } from "react-error-boundary";
import { ReactElement } from "react-markdown/lib/react-markdown";

export function ErrorBoundaryFallbackPage ({error, resetErrorBoundary} : FallbackProps) {
  return (
    <div>
      <span>Something went wrong</span>
      <br />
      {`${error}`}
    </div>
  );
};
