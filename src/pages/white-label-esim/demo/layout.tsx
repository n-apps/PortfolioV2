import { Outlet } from "react-router";
import { Suspense } from "react";
import "./demo-styles.css";

export function WhiteLabelDemoLayout() {
  return (
    <div className="white-label-demo min-h-screen bg-surface-page text-ink-900">
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
