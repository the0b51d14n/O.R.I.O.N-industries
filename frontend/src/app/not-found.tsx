import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ background: "#09090b", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "24px" }}>
      <div style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "120px", color: "#f6f6fa", lineHeight: 1 }}>404</div>
      <div style={{ fontFamily: "monospace", color: "#52525e", letterSpacing: "0.3em", fontSize: "11px", textTransform: "uppercase" }}>Page introuvable</div>
      <Link href="/" style={{ fontFamily: "monospace", fontSize: "10px", color: "#8a8a96", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)", padding: "12px 24px" }}>
        Retour accueil
      </Link>
    </div>
  );
}