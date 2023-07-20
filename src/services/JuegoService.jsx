import axios from "axios";

class JuegoService {
  apiUrl =
    "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games";

  getJuegos(id) {
    return axios.get(`${this.apiUrl}?id=${id}`);
  }

  getJuegoById(id) {
    return axios.get(`${this.apiUrl}?id=${id}`);
  }

  filtrarJuegos(juegos, filtroNombre, filtroGenero, filtroPlataforma) {
    return juegos.filter((juego) => {
      const nombreValido = juego.title.toLowerCase().includes(filtroNombre);
      const generoValido =
        filtroGenero === "" || juego.genre.toLowerCase() === filtroGenero;
      const plataformaValida =
        filtroPlataforma === "" ||
        juego.platform.toLowerCase() === filtroPlataforma;
      //return juegos;
      return nombreValido && generoValido && plataformaValida;
    });
  }
}

export default JuegoService;
