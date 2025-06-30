// pages/carte/[id].tsx

import React from "react";
import { useRouter } from "next/router";
import { cartes } from "../../data/cartes";

export default function CartePage() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) return <p>Chargement...</p>;

  const carte = cartes.find((c) => c.id === String(id));

  if (!carte) {
    return <p>Carte non trouvée</p>;
  }

  return (
    <div className="container">
      <h1>{carte.titre}</h1>
      <img src={carte.image} alt={carte.titre} />
      <p>
        <strong>Module :</strong> {carte.module}
      </p>
      <p>
        <strong>Mot-clé :</strong> {carte.motCle}
      </p>
      <p>
        <strong>Symbole :</strong> {carte.symbole}
      </p>
      <p>
        <strong>Message :</strong> {carte.message}
      </p>
      <p>
        <strong>Lecture :</strong> {carte.lecture}
      </p>
      <p>
        <strong>Invitation :</strong>
      </p>
      <ul>
        {carte.invitation.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>
        <strong>Méditation :</strong> {carte.meditation}
      </p>

      <button onClick={() => router.push("/")} className="btn-retour">
        ← Retour à l’accueil
      </button>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        h1 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        img {
          max-width: 100%;
          height: auto;
          margin: 1rem 0;
          display: block;
          border-radius: 8px;
        }
        p {
          margin-bottom: 1rem;
        }
        ul {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        li {
          margin-bottom: 0.5rem;
        }
        .btn-retour {
          display: inline-block;
          margin-top: 2rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #0070f3, #0059c9);
          color: #fff;
          border: none;
          border-radius: 30px;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 112, 243, 0.3);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }
        .btn-retour:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 112, 243, 0.4);
        }
        .btn-retour:active {
          transform: translateY(0);
          box-shadow: 0 3px 8px rgba(0, 112, 243, 0.2);
        }
      `}</style>
    </div>
  );
}
