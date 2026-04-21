"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: "40px", fontFamily: "monospace", color: "#f6f6fa", background: "#09090b", minHeight: "100vh" }}>
      <h2>Une erreur est survenue</h2>
      <p style={{ color: "#52525e", marginTop: "12px" }}>{error.message}</p>
      <button onClick={reset} style={{ marginTop: "24px", padding: "12px 24px", background: "#f6f6fa", color: "#09090b", border: "none", cursor: "pointer" }}>
        Réessayer
      </button>
    </div>
  );
}