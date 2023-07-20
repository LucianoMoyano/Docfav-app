import React from "react";
import { Form, Button } from "react-bootstrap";

import JuegoService from "./services/JuegoService";

const [juegos, setJuegos] = useState([]);
const [filtroNombre, setFiltroNombre] = useState("");
const [filtroGenero, setFiltroGenero] = useState("");
const [filtroPlataforma, setFiltroPlataforma] = useState("");
const [juegosOriginal, setJuegosOriginal] = useState([]);

useEffect(() => {
  const fetchJuego = async () => {
    try {
      const juegoService = new JuegoService();
      const response = await juegoService.getJuegos();
      setJuegos(response.data);
      setJuegosOriginal(response.data);
    } catch (error) {
      console.error("Error al obtener el juego", error);
    }
  };
  fetchJuego();
}, []);

const handleFiltrar = (event) => {
  event.preventDefault();

  const juegoService = new JuegoService();
  const juegosFiltrados = juegoService.filtrarJuegos(
    juegosOriginal,
    filtroNombre,
    filtroGenero,
    filtroPlataforma
  );
  setJuegos(juegosFiltrados);
};

//restaurar la lista de juegos completo

const handleClearFilters = () => {
  setFiltroNombre("");
  setJuegos(juegosOriginal);
};

export const Formulario = () => {
  return (
    <Form onSubmit={handleFiltrar}>
      <Form.Group className="mb-3">
        <Form.Label>Buscar por nombre:</Form.Label>
        <Form.Control
          type="text"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Buscar por género:</Form.Label>
        <Form.Control
          as="select"
          value={filtroGenero}
          onChange={(e) => setFiltroGenero(e.target.value)}
        >
          <option value="">Todos los géneros</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Buscar por plataforma:</Form.Label>
        <Form.Control
          as="select"
          value={filtroPlataforma}
          onChange={(e) => setFiltroPlataforma(e.target.value)}
        >
          <option value="">Todas las plataformas</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Filtrar
      </Button>
    </Form>
  );
};
