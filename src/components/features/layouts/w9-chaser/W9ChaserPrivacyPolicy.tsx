import { useState, useEffect } from "react";

interface PrivacyPolicyData {
  id: number;
  title: string;
  slug: string;
  content: string;
  last_updated: string;
}

export function W9ChaserPrivacyPolicy() {
  const [data, setData] = useState<PrivacyPolicyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://esign-admin.signmary.com/api/v2/pages/privacy-policy-pages/?slug=w9-1099-chaser")
      .then((res) => res.json())
      .then((result) => {
        setData(result.items?.[0] || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>;
  if (!data) return <div style={{ padding: "2rem", textAlign: "center" }}>Page not found</div>;

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{data.title}</h1>
      {data.last_updated && (
        <p style={{ color: "#666", marginBottom: "2rem" }}>
          Last updated: {new Date(data.last_updated).toLocaleDateString()}
        </p>
      )}
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
}
