import { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "./FetchArtist.css";
import { Comment } from "../../components/comment/Comments";

export default function FetchArtist() {
  const [visibleCardId, setVisibleCardId] = useState(null);

  const toggleCardDetails = (id) => {
    setVisibleCardId(visibleCardId === id ? null : id);
  };

  return (
    <>
      <ApiFetch url="https://musicbrainz.org/ws/2/artist?query=queen&fmt=json">
        {(data) => (
          <div className="artist__container">
            {data.artists && data.artists.length > 0 ? (
              data.artists.map((artist) => (
                <div key={artist.id} className="artist__item">
                  <h2>{artist.name}</h2>
                  <p><strong>Pays :</strong> {artist.area?.name || "Inconnu"}</p>
                  <p><strong>Début :</strong> {artist["life-span"]?.begin || "Non spécifié"}</p>

                  <button onClick={() => toggleCardDetails(artist.id)}>
                    {visibleCardId === artist.id ? "Masquer" : "Voir détails"}
                  </button>

                  {visibleCardId === artist.id && (
                    <div className="artist__details">
                      <p><strong>Type :</strong> {artist.type || "Non spécifié"}</p>
                      <p><strong>Ville d'origine :</strong> {artist["begin-area"]?.name || "Non spécifiée"}</p>
                      <Comment />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>Aucun artiste trouvé.</p>
            )}
          </div>
        )}
      </ApiFetch>
    </>
  );
}
