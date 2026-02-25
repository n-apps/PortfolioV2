import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { HomePage } from "./components/home-page";
import { NowPage } from "./components/now-page";
import { NotFoundPage } from "./components/not-found-page";
import { WorkInProgress } from "./components/work-in-progress";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "now", Component: NowPage },
      { path: "work/score-counter", Component: WorkInProgress },
      { path: "work/design-system", Component: WorkInProgress },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
