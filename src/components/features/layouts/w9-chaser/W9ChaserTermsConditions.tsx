import { useState, useEffect } from "react";

interface TermsConditionsData {
  id: number;
  title: string;
  slug: string;
  content: string;
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

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Terms of Service</h1>
      <h2 style={{ fontSize: "1.5rem", color: "#666", marginBottom: "1.5rem", fontWeight: "normal" }}>W9 - 1099 Chaser Terms of Services</h2>
      <div style={{ color: "#666", marginBottom: "2rem", fontSize: "1rem", lineHeight: "1.6" }}>
        <p><strong>Last updated: 1 / 19 / 2026</strong></p>
        <p>By installing, accessing, or using W9-1099 Chaser ("the Tool," "the App/Plugin," "we," or "our"), you agree to the following terms:</p>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>1. Tool Purpose</h2>
        <p>W9-1099 Chaser is a tool that:</p>
        <ul>
          <li>Allows users to generate W-9 PDFs</li>
          <li>Acts as a connector to MyPowerly for optional W-9 and 1099 workflow management</li>
        </ul>
        <p>The Tool does NOT:</p>
        <ul>
          <li>File tax forms by default</li>
          <li>Submit 1099s to the IRS automatically</li>
          <li>Provide legal, accounting, or tax advice</li>
        </ul>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>2. Free Usage</h2>
        <p>The tool offers:</p>
        <ul>
          <li>Free installation and use</li>
          <li>Unlimited W-9 PDF generation</li>
          <li>Unlimited form edits</li>
          <li>No ads, subscriptions, or usage caps</li>
        </ul>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>3. Optional Paid Services</h2>
        <p>Optional, usage-based paid features include:</p>
        <ul>
          <li>1099 E-Filing</li>
          <li>Advanced automation</li>
          <li>Compliance workflows</li>
          <li>Multi-channel delivery (email, SMS, WhatsApp)</li>
          <li>TIN Matching</li>
        </ul>
        <p><strong>Note:</strong></p>
        <ul>
          <li>No monthly subscriptions are required</li>
          <li>No long-term contracts</li>
          <li>No automatic upgrades occur</li>
        </ul>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>4. External SaaS Dependency</h2>
        <p>Some advanced features require a free MyPowerly account.</p>
        <ul>
          <li>MyPowerly is a separate SaaS platform</li>
          <li>Data stored on MyPowerly is governed by its own Terms & Privacy Policy</li>
          <li>W9-1099 Chaser acts only as an interface to these services</li>
        </ul>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>5. User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Use the Tool lawfully</li>
          <li>Ensure accuracy of all submitted data</li>
          <li>Maintain your own compliance obligations</li>
          <li>Review any tax filings before submission</li>
        </ul>
        <p>You remain solely responsible for compliance with IRS rules, local regulations, and tax obligations.</p>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>6. Limitation of Liability</h2>
        <p>W9-1099 Chaser:</p>
        <ul>
          <li>Is provided "as is"</li>
          <li>Makes no warranties regarding tax compliance or filing outcomes</li>
          <li>Is not responsible for errors, penalties, or decisions by the IRS or other authorities</li>
        </ul>
        <p>Use of the Tool is entirely at your own risk</p>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>7. Termination</h2>
        <p>We reserve the right to:</p>
        <ul>
          <li>Disable access if misuse is detected</li>
          <li>Modify or discontinue features at any time</li>
          <li>Update these Terms as required</li>
        </ul>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>8. Governing Law</h2>
        <p>These Terms shall be governed by the applicable laws of the country or region in which the platform owner operates.</p>
        
        <h2 style={{ fontSize: "1.5rem", marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" }}>9. Contact Information</h2>
        <ul>
          <li>Official Website: <a href="https://wp-1099.com" style={{ color: "#0066cc" }}>https://wp-1099.com</a></li>
          <li>Backend SaaS Platform: <a href="https://mypowerly.com" style={{ color: "#0066cc" }}>https://mypowerly.com</a></li>
        </ul>
      </div>
      {data && <div dangerouslySetInnerHTML={{ __html: data.content }} />}
    </div>
  );
}
