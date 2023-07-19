import React from "react";

function JuegoCard() {
  return (
    <>
      <div className="juego-card">
        <img src="{juego.thumbnail}" alt="{juego.title}" />
        <h3>{JuegoCard.title}</h3>
        <p>{juego.short_description}</p>
      </div>
    </>
  );
}
export default JuegoCard;
