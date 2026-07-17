import { Outlet, useLocation } from "react-router";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { EasterEggFooter } from "./easter-egg-footer";
import { useEffect, Suspense } from "react";
import { RouteLoading } from "@/components/ui/route-status";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="w-full min-h-screen flex items-center flex-col px-4 sm:px-5">
        <div className="grid w-full max-w-xl min-h-screen relative" style={{ gridTemplateAreas: "'nav' 'main' 'footer'", gridTemplateColumns: "minmax(0, 1fr)", gridTemplateRows: "auto 1fr auto" }}>
          <div style={{ gridArea: "nav" }}>
            <Navigation />
          </div>
          <main className="w-full min-w-0" style={{ gridArea: "main" }}>
            <Suspense fallback={<RouteLoading />}>
              <Outlet />
            </Suspense>
          </main>
          <div style={{ gridArea: "footer" }}>
            <Footer />
          </div>
        </div>
      </div>
      <EasterEggFooter />
    </>
  );
}
