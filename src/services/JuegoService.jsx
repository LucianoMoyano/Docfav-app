import axios from "axios";

class JuegoService {
  apiUrl = "https://www.freetogame.com/api/games";

  getJuegos() {
    return axios.get("${this.apiUrl}?id=${id}");
  }

  getJuegoById(id) {
    return axios.get("${this.apiUrl}?id=${id}");
  }

  filtrarJuegos(juegos, filtroNombre, filtroGenero, filtroPlataforma) {
    return juegos.filter((juego) => {
      const nombreValido = juego.title
        .toLowerCase()
        .includes(filtroNombre.toLowerCase());
      const generoValido =
        filtroGenero === "" ||
        juego.genre.toLowerCase() === filtroGenero.toLowerCase();
      const plataformaValida =
        filtroPlataforma === "" ||
        juego.platform.toLowerCase() === filtroPlataforma.toLowerCase();

      return nombreValido && generoValido && plataformaValida;
    });
  }
}

export default JuegoService;
