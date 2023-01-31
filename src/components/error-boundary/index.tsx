import { Component, PropsWithChildren, ReactNode } from "react";

export class ErrorBoundary extends Component<PropsWithChildren, { error: unknown }> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: unknown) {
    console.log("Error: ", error);
    return {
      error: error instanceof Error ? error.message : JSON.stringify(error, null, 2),
    };
  }

  render(): ReactNode {
    const { children } = this.props;
    const { error } = this.state;

    return error ? (
      <div>
        <span>Something went wrong</span>
        <br />
        {`${error}`}
      </div>
    ) : (
      children
    );
  }
}
