import React from "react";

function JuegoCard({ juego }) {
  return (
    <>
      <div className="juego-card">
        <img src={juego.thumbnail} alt={juego.title} />
        <h3>{juego.title}</h3>
        <p>{juego.short_description}</p>
      </div>
    </>
  );
}
export default JuegoCard;
