import { useState } from "react";
import { useRouter } from "next/router";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];

export default function Tirage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const tirerCarte = () => {
    setLoading(true);
    const id = cards[Math.floor(Math.random() * cards.length)];
    setTimeout(() => router.push(`/carte/${id}`), 800);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Tirage de carte</h1>
      <button
        onClick={tirerCarte}
        disabled={loading}
        style={{
          padding: "12px 24px",
          backgroundColor: "#FFD700",
          border: "none",
          borderRadius: 8,
          fontSize: 18,
          fontWeight: "bold",
          cursor: loading ? "wait" : "pointer",
          color: "black",
        }}
      >
        {loading ? "Tirage en cours..." : "Tirer une carte"}
      </button>
    </div>
  );
}
