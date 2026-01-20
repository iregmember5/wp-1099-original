import { useState, useEffect, lazy, Suspense } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SiteSettingsProvider } from "./contexts/SiteSettingsContext";
import { DynamicHead } from "./components/DynamicHead";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const FeaturesPage = lazy(() =>
  import("./components/features/features-page/FeaturesPage").then((m) => ({
    default: m.FeaturesPage,
  })),
);
const BlogPage = lazy(() =>
  import("./components/blogs/BlogPage").then((m) => ({ default: m.BlogPage })),
);
const AboutPage = lazy(() => import("./pages/AboutPage"));
const DebugFeaturesAPI = lazy(() => import("./pages/DebugFeaturesApi"));
const DebugLandingAPI = lazy(() => import("./pages/DebugLandingApi"));
const Maverick = lazy(() => import("./components/salespage/Maverick"));
const ImageGallery = lazy(() => import("./components/gallery/ImageGallery"));
const AffiliateDashboard = lazy(
  () => import("./components/landingpage/AffiliateDashboard"),
);
const TeamPage = lazy(() => import("./components/teams/TeamPage"));
const InformationPage = lazy(
  () => import("./components/information-page/InformationPage"),
);
const W9ChaserPrivacyPolicy = lazy(() =>
  import("./components/features/layouts/w9-chaser/W9ChaserPrivacyPolicy").then((m) => ({
    default: m.W9ChaserPrivacyPolicy,
  })),
);
const W9ChaserTermsConditions = lazy(() =>
  import("./components/features/layouts/w9-chaser/W9ChaserTermsConditions").then((m) => ({
    default: m.W9ChaserTermsConditions,
  })),
);

// Loading component
const PageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "var(--color-background)",
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "3px solid var(--color-primary)",
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function AppContent() {
  const [currentView, setCurrentView] = useState<{
    type:
      | "landing"
      | "features"
      | "blog"
      | "about"
      | "debug-features"
      | "debug-landing"
      | "salespage"
      | "gallery"
      | "affiliate"
      | "team"
      | "demo-websites"
      | "privacy-policy"
      | "terms-conditions";
    slug?: string;
  }>({ type: "features", slug: "wp-w9-1099-chaser" });

  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === "/" && !hash) {
        setCurrentView({ type: "features", slug: "wp-w9-1099-chaser" });
        return;
      }

      if (
        path.includes("/debug-features") ||
        hash.includes("#debug-features")
      ) {
        setCurrentView({ type: "debug-features" });
        return;
      }

      if (path.includes("/debug-landing") || hash.includes("#debug-landing")) {
        setCurrentView({ type: "debug-landing" });
        return;
      }

      if (path.includes("/debug") || hash.includes("#debug")) {
        setCurrentView({ type: "debug-features" });
        return;
      }

      if (path.includes("/blog/") || hash.includes("#blog/")) {
        const slugMatch =
          path.match(/\/blog\/([^\/]+)/) || hash.match(/#blog\/([^\/]+)/);

        if (slugMatch && slugMatch[1]) {
          setCurrentView({ type: "blog", slug: slugMatch[1] });
        } else {
          setCurrentView({ type: "blog" });
        }
        return;
      }

      if (path.includes("/blog") || hash.includes("#blog")) {
        setCurrentView({ type: "blog" });
        return;
      }

      if (path.includes("/about/") || hash.includes("#about/")) {
        const slugMatch =
          path.match(/\/about\/([^\/]+)/) || hash.match(/#about\/([^\/]+)/);
        if (slugMatch && slugMatch[1]) {
          setCurrentView({ type: "about", slug: slugMatch[1] });
        } else {
          setCurrentView({ type: "about" });
        }
        return;
      }

      if (path.includes("/about") || hash.includes("#about")) {
        setCurrentView({ type: "about" });
        return;
      }

      if (
        path.includes("/become-a-partner") ||
        path.includes("/become-our-partner") ||
        path.includes("/salespage") ||
        hash.includes("#salespage")
      ) {
        if (path.includes("/become-our-partner")) {
          window.history.replaceState(null, "", "/become-a-partner");
        }
        setCurrentView({ type: "salespage" });
        return;
      }

      if (path.includes("/gallery") || hash.includes("#gallery")) {
        setCurrentView({ type: "gallery" });
        return;
      }

      if (path.includes("/affiliate") || hash.includes("#affiliate")) {
        setCurrentView({ type: "affiliate" });
        return;
      }

      if (path.includes("/team") || hash.includes("#team")) {
        setCurrentView({ type: "team" });
        return;
      }

      if (path.includes("/demo-websites") || hash.includes("#demo-websites")) {
        setCurrentView({ type: "demo-websites" });
        return;
      }

      if (path.includes("/w9-1099-chaser/privacy-policy")) {
        setCurrentView({ type: "privacy-policy" });
        return;
      }

      if (path.includes("/w9-1099-chaser/terms")) {
        setCurrentView({ type: "terms-conditions" });
        return;
      }

      if (path.includes("/features/") || hash.includes("#features/")) {
        const slugMatch =
          path.match(/\/features\/([^\/]+)/) ||
          hash.match(/#features\/([^\/]+)/);

        if (slugMatch && slugMatch[1]) {
          setCurrentView({ type: "features", slug: slugMatch[1] });
        } else {
          setCurrentView({ type: "features", slug: "wp-w9-1099-chaser" });
        }
        return;
      }

      setCurrentView({ type: "features", slug: "wp-w9-1099-chaser" });
    };

    checkRoute();

    window.addEventListener("hashchange", checkRoute);
    window.addEventListener("popstate", checkRoute);

    return () => {
      window.removeEventListener("hashchange", checkRoute);
      window.removeEventListener("popstate", checkRoute);
    };
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <ThemeProvider>
        {currentView.type === "blog" && <BlogPage slug={currentView.slug} />}
        {currentView.type === "features" && (
          <FeaturesPage slug={currentView.slug} />
        )}
        {currentView.type === "debug-features" && <DebugFeaturesAPI />}
        {currentView.type === "debug-landing" && <DebugLandingAPI />}
        {currentView.type === "about" && <AboutPage slug={currentView.slug} />}
        {currentView.type === "salespage" && <Maverick />}
        {currentView.type === "gallery" && <ImageGallery />}
        {currentView.type === "affiliate" && <AffiliateDashboard />}
        {currentView.type === "team" && <TeamPage />}
        {currentView.type === "demo-websites" && (
          <InformationPage slug="demo-websites" />
        )}
        {currentView.type === "privacy-policy" && <W9ChaserPrivacyPolicy />}
        {currentView.type === "terms-conditions" && <W9ChaserTermsConditions />}
        {currentView.type === "landing" && <LandingPage />}
      </ThemeProvider>
    </Suspense>
  );
}

function App() {
  return (
    <SiteSettingsProvider>
      <DynamicHead />
      <AppContent />
    </SiteSettingsProvider>
  );
}

export default App;
