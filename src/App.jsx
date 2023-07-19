import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

//imports components
import JuegoCard from "./components/JuegoCard/JuegoCard";
import JuegoDetalle from "./components/JuegoDetalle/JuegoDetalle";

//import services
import JuegoService from "./services/JuegoService";

import "./App.css";

function App() {
  const [juegos, setJuegos] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("");
  const [filtroPlataforma, setFiltroPlataforma] = useState("");

  useEffect(() => {
    const fetchJuego = async (req, res) => {
      try {
        const juegoService = new JuegoService();
        const response = await juegoService.getJuegoById(id);
        setJuego(response.data);
      } catch (error) {
        console.error("Error al obtener el juego", error);
      }
    };
    fetchJuego();
  }, []);

  const handleFiltrar = (event) => {
    event.preventDefault();

    const juegosService = new JuegosService();
    const juegosFiltrados = juegosService.filtrarJuegos(
      juegos,
      filtroNombre,
      filtroGenero,
      filtroPlataforma
    );
    setJuegos(juegosFiltrados);
  };

  return (
    <>
      <Container>
        <h1>Juegos</h1>

        <Form onSubmit={handleFiltrar}>
          <Form.Group>
            <Form.Label>Buscar por nombre:</Form.Label>
            <Form.Control
              type="text"
              value={filtroNombre}
              onChange={(e) => setFiltroNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Buscar por género:</Form.Label>
            <Form.Control
              as="select"
              value={filtroGenero}
              onChange={(e) => setFiltroGenero(e.target.value)}
            >
              <option value="">Todos los géneros</option>
              {/* Opciones de género */}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Buscar por plataforma:</Form.Label>
            <Form.Control
              as="select"
              value={filtroPlataforma}
              onChange={(e) => setFiltroPlataforma(e.target.value)}
            >
              <option value="">Todas las plataformas</option>
              {/* Opciones de plataforma */}
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Filtrar
          </Button>
        </Form>

        <div className="juegos-grid">
          {juegos.map((juego) => (
            <Link key={juego.id} to={`/juego/${juego.id}`}>
              <JuegoCard juego={juego} />
            </Link>
          ))}
        </div>

        <Switch>
          <Route path="/juego/:id">
            <JuegoDetalle />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
