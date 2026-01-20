import { useState, useEffect } from "react";

interface PrivacyPolicyData {
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

export function W9ChaserPrivacyPolicy() {
  const [data, setData] = useState<PrivacyPolicyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseApiUrl}/privacy-policy-pages/`, {
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
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", margin: 0 }}>
      <div style={{
        backgroundImage: "linear-gradient(rgba(30, 41, 38, 0.7), rgba(30, 41, 38, 0.7)), url(/wp-1099.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "4rem 2rem"
      }}>
        <p style={{ 
          fontSize: "0.85rem", 
          letterSpacing: "3px", 
          marginBottom: "1.5rem", 
          textTransform: "uppercase",
          fontWeight: "400",
          opacity: 0.9
        }}>
          UNDERSTANDING OUR
        </p>
        <h1 style={{ 
          fontSize: "5rem", 
          fontWeight: "700", 
          margin: 0, 
          lineHeight: 1.1,
          textAlign: "center",
          maxWidth: "800px"
        }}>
          Privacy<br/>Policy
        </h1>
      </div>
      
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "4rem 2rem",
        backgroundColor: "#ffffff"
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
        body { margin: 0; background: #ffffff; }
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
