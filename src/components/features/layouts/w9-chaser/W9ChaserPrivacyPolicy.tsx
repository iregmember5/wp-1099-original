import { useState, useEffect } from "react";

interface PrivacyPolicyData {
  id: number;
  title: string;
  slug: string;
  content: string;
  last_updated: string;
}

const isDevelopment = import.meta.env.DEV;
const frontendUrl = isDevelopment ? "http://localhost:5173" : "https://wp-1099.com";
const baseApiUrl = isDevelopment ? "/blogs/api/v2" : "https://esign-admin.signmary.com/blogs/api/v2";

export function W9ChaserPrivacyPolicy() {
  const [data, setData] = useState<PrivacyPolicyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseApiUrl}/privacy-policy-pages/?slug=w9-1099-chaser`, {
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
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Privacy Policy</h1>
      <h2 style={{ fontSize: "1.5rem", color: "#666", marginBottom: "1.5rem", fontWeight: "normal" }}>W9 - 1099 Chaser Privacy Policy</h2>
      <div style={{ color: "#666", marginBottom: "2rem", fontSize: "1rem", lineHeight: "1.6" }}>
        <p><strong>Last updated: 1 / 19 / 2026</strong></p>
        <p>W9-1099 Chaser ("we," "our," or "the App/Plugin") respects your privacy and is committed to transparency regarding how data is handled. This Privacy Policy explains what information is collected, how it is used, and how data flows between our platform, optional third-party services, and your website environment (WordPress, Shopify, or other supported platforms).</p>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>1. Overview & Purpose</h2>
        <p>W9-1099 Chaser is a tool designed to help users generate W-9 forms and optionally connect to an external SaaS platform (e.g., MyPowerly.com) for advanced W-9 and 1099 workflow management.</p>
        <p><strong>Important:</strong> This tool is not a tax filing system and does not provide tax or legal advice.</p>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>2. Data Collected by W9-1099 Chaser</h2>
        <h3 style={{ fontSize: "1.2rem", marginTop: "1rem", marginBottom: "0.5rem", color: "#333" }}>✅ Data NOT Collected or Stored</h3>
        <p>W9-1099 Chaser does not collect, transmit, or store:</p>
        <ul>
          <li>Tax Identification Numbers (TIN)</li>
          <li>Social Security Numbers (SSN)</li>
          <li>Employer Identification Numbers (EIN)</li>
          <li>Completed or signed W-9 PDFs</li>
          <li>Bank details or payment information</li>
        </ul>
        <p>Sensitive tax data is never stored on your website or platform.</p>
        
        <h3 style={{ fontSize: "1.2rem", marginTop: "1rem", marginBottom: "0.5rem", color: "#333" }}>✅ Local, Browser-Only Processing</h3>
        <p>If you use the standalone W-9 PDF tool:</p>
        <ul>
          <li>W-9 data is processed entirely in your browser</li>
          <li>PDFs are generated locally</li>
          <li>No W-9 data is sent to the website server, SaaS platform, or any third party</li>
        </ul>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>3. External Services & Data Sharing</h2>
        <h3 style={{ fontSize: "1.2rem", marginTop: "1rem", marginBottom: "0.5rem", color: "#333" }}>MyPowerly.com (Primary SaaS Platform)</h3>
        <p>If you choose to connect W9-1099 Chaser to MyPowerly:</p>
        <ul>
          <li>Data is transmitted only after explicit administrator action</li>
          <li>No background or automatic syncing occurs</li>
          <li>Transmitted data may include:
            <ul>
              <li>Business profile details</li>
              <li>Team member information</li>
              <li>Contact records (vendors, affiliates, contractors)</li>
            </ul>
          </li>
          <li>All data is stored inside your MyPowerly account</li>
          <li>MyPowerly provides backend APIs, compliance workflows, and optional 1099 E-Filing services</li>
        </ul>
        
        <h3 style={{ fontSize: "1.2rem", marginTop: "1rem", marginBottom: "0.5rem", color: "#333" }}>IRS.gov</h3>
        <p>Used only to retrieve blank W-9 form templates. No user data is sent to the IRS through this tool.</p>
        
        <h3 style={{ fontSize: "1.2rem", marginTop: "1rem", marginBottom: "0.5rem", color: "#333" }}>Clicflo.com (Optional)</h3>
        <p>Optional widget and onboarding integrations:</p>
        <ul>
          <li>Disabled by default</li>
          <li>Enabled only by explicit administrator action</li>
          <li>No activation without consent</li>
        </ul>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>4. Widgets & Embedded Content</h2>
        <p>Optional widgets generated via MyPowerly or other supported platforms may include:</p>
        <ul>
          <li>W-9 collection forms</li>
          <li>Contact forms</li>
          <li>Appointment booking</li>
          <li>Client intake and compliance forms</li>
        </ul>
        <p><strong>Important:</strong></p>
        <ul>
          <li>Widgets load content from external services</li>
          <li>Embedded via shortcodes or scripts</li>
          <li>Do not store sensitive tax data on your website</li>
        </ul>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>5. Data Security</h2>
        <p>We follow strict security principles:</p>
        <ul>
          <li>No sensitive tax data stored on your website</li>
          <li>No automatic background transfers</li>
          <li>Encrypted communication with SaaS platforms</li>
          <li>Administrator-controlled data sync actions</li>
          <li>Strong data-handling boundaries by design</li>
        </ul>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>6. Cookies & Tracking</h2>
        <p>W9-1099 Chaser:</p>
        <ul>
          <li>Does not use tracking cookies</li>
          <li>Does not include ads or analytics tracking</li>
          <li>Does not perform hidden data collection</li>
        </ul>
        <p>Third-party services (e.g., MyPowerly or optional widgets) may use cookies according to their own privacy policies.</p>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>7. User Control</h2>
        <p>Administrators have full control over:</p>
        <ul>
          <li>Connecting the tool to SaaS platforms</li>
          <li>Enabling or disabling features</li>
          <li>Timing of data sync actions</li>
          <li>Embedding widgets</li>
        </ul>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>8. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date.</p>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>9. Contact Information</h2>
        <p>For privacy questions:</p>
        <ul>
          <li>Website: <a href="https://wp-1099.com" style={{ color: "#0066cc" }}>https://wp-1099.com</a></li>
          <li>SaaS Platform: <a href="https://mypowerly.com" style={{ color: "#0066cc" }}>https://mypowerly.com</a></li>
        </ul>
      </div>
      {data && <div dangerouslySetInnerHTML={{ __html: data.content }} />}
    </div>
  );
}
