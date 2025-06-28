import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <img
        src="/oracle.png"
        alt="Oracle"
        style={{ maxWidth: "80%", maxHeight: "60vh", marginBottom: 30 }}
      />
      <button
        onClick={() => router.push("/tirage")}
        style={{
          padding: "12px 24px",
          backgroundColor: "#FFD700",
          border: "none",
          borderRadius: 8,
          fontSize: 18,
          fontWeight: "bold",
          cursor: "pointer",
          color: "black",
        }}
      >
        Entrer
      </button>
    </div>
  );
}
