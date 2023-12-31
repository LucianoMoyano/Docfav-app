import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JuegoService from "../../services/JuegoService";

function JuegoDetalle() {
  const [juego, setJuego] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchJuego = async () => {
      try {
        const juegoService = new JuegoService();
        const response = await juegoService.getJuegoById(id);
        setJuego(response.data);
      } catch (error) {
        console.error("Error al obtener el juego", error);
      }
    };
    fetchJuego();
  }, [id]);

  if (!juego) {
    return <div>Aguarde unos segundos, CARGANDO...</div>;
  }

  return (
    <>
      <div className="juego-grid">
        <h2>{juego.title}</h2>
        <img src={juego.thumbnail} alt={juego.title} />
        <p>{juego.description}</p>
      </div>
      ;
    </>
  );
}

export default JuegoDetalle;
