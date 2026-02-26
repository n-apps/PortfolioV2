import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { HomePage } from "./components/home-page";
import { NowPage } from "./components/now-page";
import { NotFoundPage } from "./components/not-found-page";
import { ScoreCounterPage } from "./components/score-counter-page";
import { DesignSystemPage } from "./components/design-system-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "now", Component: NowPage },
      { path: "work/score-counter", Component: ScoreCounterPage },
      { path: "work/design-system", Component: DesignSystemPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);