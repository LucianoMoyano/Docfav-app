import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import JuegoCard from "./components/JuegoCard/JuegoCard";
import JuegoDetalle from "./components/JuegoDetalle/JuegoDetalle";
import JuegoService from "./services/JuegoService";

function App() {
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

  return (
    <Router>
      <Container className="my-5">
        <h1 className="text-center mb-4">Juegos</h1>

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

        <div className="row mt-4">
          {juegos.map((juego) => (
            <div key={juego.id} className="col-md-4 mb-4">
              <Link to={`/juego/${juego.id}`} className="text-decoration-none">
                {/* Utiliza el componente JuegoCard */}
                <JuegoCard juego={juego} />
              </Link>
            </div>
          ))}
        </div>

        <Routes>
          <Route path="/juego/:id" element={<JuegoDetalle />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
