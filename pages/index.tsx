import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const randomId = Math.floor(Math.random() * 33) + 1;

  return (
    <div className="container">
      <main>
        <h1>Bienvenue dans l’Oracle Initiatique</h1>

        <img
          src="/oracle.png"
          alt="Oracle Initiatique"
          className="oracle-image"
        />

        <Link href={`/carte/${randomId}`} className="tirer-btn">
          Tirer une carte
        </Link>
      </main>

      <footer>
        <p>
          © Adrien Dauvert{" "}
          <a
            href="https://www.instagram.com/ether.adrien/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} style={{ marginLeft: "8px" }} />
          </a>
        </p>
      </footer>

      <style jsx>{`
        .container {
          background: #000;
          color: #fff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          margin: 0 auto;
          width: 100%;
          max-width: 600px;
          box-sizing: border-box;
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          width: 100%;
        }

        h1 {
          font-size: 2rem;
          margin: 0;
        }

        .oracle-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }

        .tirer-btn {
          display: inline-block;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #0070f3, #0059c9);
          color: #fff;
          border-radius: 30px;
          font-size: 1.2rem;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 112, 243, 0.3);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
          cursor: pointer;
          user-select: none;
        }

        .tirer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 112, 243, 0.4);
        }

        footer {
          margin-top: 3rem;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #aaa;
          width: 100%;
        }

        footer a {
          color: #aaa;
          margin-left: 0.5rem;
        }

        footer a:hover {
          color: #fff;
        }

        @media (max-width: 480px) {
          .container {
            padding: 1rem;
            max-width: 100%;
          }

          h1 {
            font-size: 1.5rem;
          }

          .tirer-btn {
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
