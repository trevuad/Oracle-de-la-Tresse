import { useState } from "react";
import Image from "next/image";
import { cartes } from "../data/cartes";

export default function Tirage() {
  const [carte, setCarte] = useState(null);
  const [lastIndex, setLastIndex] = useState(null);

  const tirerCarte = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cartes.length);
    } while (randomIndex === lastIndex && cartes.length > 1);

    setLastIndex(randomIndex);
    setCarte(cartes[randomIndex]);
  };

  return (
    <div>
      <button onClick={tirerCarte}>Tirer une carte</button>
      {carte && (
        <div>
          <h2>{carte.titre}</h2>
          <p>{carte.message}</p>
          <Image src={carte.image} alt={carte.titre} width={300} height={400} />
        </div>
      )}
    </div>
  );
}
