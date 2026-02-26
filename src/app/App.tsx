import { RouterProvider } from "react-router";
import { router } from "./routes";

// Case study routes: /work/score-counter, /work/design-system
export default function App() {
  return <RouterProvider router={router} />;
}