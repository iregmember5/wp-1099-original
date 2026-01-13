import type { Theme } from "../../types/features-page";

interface FeaturesNavbarProps {
  theme: Theme;
}

export const FeaturesNavbar: React.FC<FeaturesNavbarProps> = ({ theme }) => {
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
        
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#salespage" style={{ color: theme.textColor, textDecoration: "none", fontSize: "0.9rem" }}>
            Become a Partner
          </a>
          <a href="#about" style={{ color: theme.textColor, textDecoration: "none", fontSize: "0.9rem" }}>
            About
          </a>
          <a href="#demo-websites" style={{ color: theme.textColor, textDecoration: "none", fontSize: "0.9rem" }}>
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
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};
