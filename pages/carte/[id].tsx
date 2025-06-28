import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { cartes } from '../../data/cartes';

export default function CartePage() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) return <p>Chargement...</p>;

  const idStr = Array.isArray(id) ? id[0] : id;
  const carte = cartes.find((c) => c.id === String(idStr));

  if (!carte) {
    console.log('ID reçu :', idStr);
    console.log('IDs dispos :', cartes.map(c => c.id));
    return <p>Carte non trouvée.</p>;
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src={carte.image}
          alt={carte.titre}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>

      <h1>{carte.titre}</h1>
      <p><strong>Module associé :</strong> {carte.module}</p>
      <p><strong>Mot-clé :</strong> {carte.motCle}</p>
      <p><strong>Symbole :</strong> {carte.symbole}</p>

      <h2>✧ Message :</h2>
      <p>{carte.message}</p>

      <h2>✧ Lecture profonde :</h2>
      <p>{carte.lecture}</p>

      <h2>✧ Invitation :</h2>
      <ul>
        {carte.invitation.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>– {carte.titre} méditation</h2>
      <pre
        style={{
          whiteSpace: 'pre-wrap',
          backgroundColor: '#222',
          padding: '15px',
          borderRadius: '5px',
          fontFamily: 'inherit',
          fontSize: '1rem',
          lineHeight: '1.5',
        }}
      >
        {carte.meditation}
      </pre>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/">
          <span style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}>
            Retour à l'accueil
          </span>
        </Link>
      </div>
    </div>
  );
}
