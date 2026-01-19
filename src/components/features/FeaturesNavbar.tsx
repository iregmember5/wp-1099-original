import { useState } from "react";
import type { Theme } from "../../types/features-page";

interface FeaturesNavbarProps {
  currentSlug?: string;
  theme: Theme;
}

export const FeaturesNavbar: React.FC<FeaturesNavbarProps> = ({ currentSlug, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.5rem", fontWeight: "bold", color: theme.primaryColor, textDecoration: "none" }}>
          <span>📄</span>
          <span>WP-1099</span>
        </a>
        
        <div style={{ display: "flex", gap: "1.5rem" }} className="desktop-nav">
          <a href="/become-our-partner" style={{ color: theme.textColor, textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", position: "relative" }} onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"} onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}>
            Become a Partner
          </a>
          <a href="#about" style={{ color: theme.textColor, textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", position: "relative" }} onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"} onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}>
            About
          </a>
          <a href="#demo-websites" style={{ color: theme.textColor, textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", position: "relative" }} onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"} onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}>
            Demo Websites
          </a>
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
          className="desktop-btn"
        >
          Get Started
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            color: theme.primaryColor,
            fontSize: "1.5rem",
            cursor: "pointer",
            display: "none",
          }}
          className="mobile-menu-btn"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          backgroundColor: theme.bgColor,
          borderBottom: `1px solid ${theme.primaryColor}30`,
          padding: "1rem",
        }} className="mobile-menu">
          <a href="/become-our-partner" onClick={() => setIsOpen(false)} style={{ display: "block", padding: "0.75rem", color: theme.textColor, textDecoration: "none" }}>
            Become a Partner
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} style={{ display: "block", padding: "0.75rem", color: theme.textColor, textDecoration: "none" }}>
            About
          </a>
          <a href="#demo-websites" onClick={() => setIsOpen(false)} style={{ display: "block", padding: "0.75rem", color: theme.textColor, textDecoration: "none" }}>
            Demo Websites
          </a>
          <button
            onClick={() => { window.location.hash = "#affiliate"; setIsOpen(false); }}
            style={{
              width: "100%",
              marginTop: "0.5rem",
              background: theme.primaryColor,
              color: "#fff",
              border: "none",
              padding: "0.75rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
          >
            Get Started
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-btn {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};
