// pages/index.tsx

import React from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  const randomId = Math.floor(Math.random() * 33) + 1;

  return (
    <div className="container">
      <main>
        <h1>Bienvenue dans l’Oracle Initiatique</h1>

        {/* Image depuis le dossier /public */}
        <img
          src="/oracle.png"
          alt="Oracle Initiatique"
          className="oracle-image"
        />

        {/* Utilise Link AVEC legacyBehavior */}
        <Link href={`/carte/${randomId}`} legacyBehavior>
          <a className="tirer-btn">Tirer une carte</a>
        </Link>
      </main>

      <footer>
        <p>
          © Adrien Dauvert{' '}
          <a
            href="https://www.instagram.com/ether.adrien/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} style={{ marginLeft: '8px' }} />
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
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .oracle-image {
          max-width: 300px;
          height: auto;
          margin-bottom: 2rem;
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
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .tirer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 112, 243, 0.4);
        }

        footer {
          margin-top: 4rem;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          color: #aaa;
        }

        footer a {
          color: #aaa;
          margin-left: 0.5rem;
        }

        footer a:hover {
          color: #fff;
        }
      `}</style>
    </div>
  );
}
