import { useEffect, useState } from "react";
import { fetchAllFeaturesPages } from "./features-page/FeaturesPage.api";
import type { Theme } from "../../types/features-page";

interface FeaturesNavbarProps {
  currentSlug?: string;
  theme: Theme;
}

export const FeaturesNavbar: React.FC<FeaturesNavbarProps> = ({ currentSlug, theme }) => {
  const [pages, setPages] = useState<Array<{ slug: string; title: string }>>([]);

  useEffect(() => {
    fetchAllFeaturesPages().then((data) => {
      setPages(data.map((p) => ({ slug: p.slug, title: p.title })));
    });
  }, []);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: theme.bgColor,
      borderBottom: `1px solid ${theme.primaryColor}30`,
      padding: "1rem 2rem",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.5rem", fontWeight: "bold", color: theme.primaryColor }}>
          <span>📄</span>
          <span>WP-1099</span>
        </div>
        
        <div style={{ display: "flex", gap: "1.5rem", flex: 1, justifyContent: "center" }}>
          {pages.map((page) => (
            <a
              key={page.slug}
              href={`#features/${page.slug}`}
              style={{
                color: currentSlug === page.slug ? theme.primaryColor : theme.textColor,
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: currentSlug === page.slug ? "600" : "400",
                borderBottom: currentSlug === page.slug ? `2px solid ${theme.primaryColor}` : "none",
                paddingBottom: "0.25rem",
              }}
            >
              {page.title}
            </a>
          ))}
        </div>

        <button
          onClick={() => window.location.hash = "#affiliate"}
          style={{
            background: theme.primaryColor,
            color: "#fff",
            border: "none",
            padding: "0.6rem 1.5rem",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.9rem",
            fontWeight: "600",
            whiteSpace: "nowrap",
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};
