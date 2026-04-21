export default function Loading() {
  return (
    <div style={{ background: "#09090b", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: "monospace", color: "#52525e", letterSpacing: "0.3em", fontSize: "11px", textTransform: "uppercase" }}>
        Chargement...
      </div>
    </div>
  );
}