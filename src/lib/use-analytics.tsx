import { useEffect, useRef } from "react";
import { useLocation, Outlet } from "react-router";

/**
 * Custom hook to track page views and re-bind interactive click tracking
 * using GoatCounter analytics in a React Single Page Application (SPA).
 */
export function useAnalytics() {
  const location = useLocation();
  const isFirstRun = useRef(true);

  useEffect(() => {
    const goatcounter = (window as any).goatcounter;

    // The initial page load is already automatically counted by the GoatCounter script
    // when it first executes on script load. We skip the first trigger of this hook to
    // avoid duplicate pageviews on landing.
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (goatcounter && typeof goatcounter.count === "function") {
      // 1. Track the new client-side route view
      goatcounter.count({
        path: location.pathname + location.search,
      });

      // 2. Re-bind click tracking (data-goatcounter-click) to newly rendered elements.
      // Because GoatCounter binds click handlers directly instead of using event delegation,
      // React's DOM destruction/re-creation on route changes clears these listeners.
      // We wrap it in a setTimeout to guarantee React has finished updating the DOM.
      if (typeof goatcounter.bind_events === "function") {
        setTimeout(() => {
          goatcounter.bind_events();
        }, 0);
      }
    }
  }, [location.pathname, location.search]);
}

/**
 * Root component that serves as a pathless layout route,
 * ensuring all sub-routes are covered by the analytics tracker.
 */
export function AnalyticsTracker() {
  useAnalytics();
  return <Outlet />;
}
