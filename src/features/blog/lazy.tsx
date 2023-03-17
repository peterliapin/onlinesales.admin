import { lazy } from "react";

export const BlogLazy = lazy(() => import("features/blog").then(({ Blog }) => ({ default: Blog })));
