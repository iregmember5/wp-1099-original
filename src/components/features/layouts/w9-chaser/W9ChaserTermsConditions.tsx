import { useState, useEffect } from "react";

interface TermsConditionsData {
  id: number;
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  last_updated: string;
}

const isDevelopment = import.meta.env.DEV;
const frontendUrl = isDevelopment ? "http://localhost:5173" : "https://wp-1099.com";
const baseApiUrl = isDevelopment ? "/blogs/api/v2" : "https://esign-admin.signmary.com/blogs/api/v2";

export function W9ChaserTermsConditions() {
  const [data, setData] = useState<TermsConditionsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseApiUrl}/terms-conditions-pages/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Frontend-Url": frontendUrl,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.items?.[0] || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
    );
  if (!data)
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>Page not found</div>
    );

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{
        backgroundImage: "url(/wp-1099.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }} />
        <div style={{ position: "relative", textAlign: "center", zIndex: 1 }}>
          <p style={{ fontSize: "0.9rem", letterSpacing: "2px", marginBottom: "1rem", textTransform: "uppercase" }}>
            UNDERSTANDING OUR
          </p>
          <h1 style={{ fontSize: "4rem", fontWeight: "700", margin: 0, lineHeight: 1.2 }}>
            {data.title}
          </h1>
        </div>
      </div>
      
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "4rem 2rem",
        backgroundColor: "#f9fafb"
      }}>
        {data.subtitle && (
          <h2 style={{ 
            fontSize: "1.5rem", 
            color: "#1a1a1a", 
            marginBottom: "2rem", 
            fontWeight: "600"
          }}>
            {data.subtitle}
          </h2>
        )}
        <div 
          style={{ 
            color: "#374151", 
            fontSize: "1.05rem", 
            lineHeight: "1.8"
          }}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
      
      <style>{`
        body { margin: 0; background: #f9fafb; }
        h3 { 
          font-size: 1.5rem; 
          color: #1f2937; 
          margin-top: 2.5rem; 
          margin-bottom: 1rem;
          font-weight: 600;
        }
        p { 
          margin-bottom: 1.25rem; 
        }
        ul { 
          margin: 1rem 0 1.5rem 1.5rem;
          list-style-type: disc;
        }
        li { 
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }
        a { 
          color: #2563eb; 
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        a:hover { 
          border-bottom-color: #2563eb;
        }
        b, strong { 
          color: #1f2937;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
