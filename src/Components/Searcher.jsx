import { useState, useEffect } from 'react';

const Searcher = () => {
  // setear los hooks useState
  const [nameGame, setNameGame] = useState([]);
  const [search, setSearch] = useState("");

  // función para traer los datos de la API
  const URL = 'https://two7-web-a-2-backend.onrender.com/games';

  const showData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log("Datos obtenidos:", data);  // Verifica que los datos se obtienen correctamente
      setNameGame(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  // función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log("Texto de búsqueda:", e.target.value);
  };

  // metodo de filtrado
  const results = !search ? nameGame : nameGame.filter((dato) =>
    dato.name_game.toLowerCase().includes(search.toLowerCase())
  );
  
  console.log("Resultados de búsqueda:", results);  // Verifica que el filtrado funciona

  useEffect(() => {
    showData();
  }, []);

  // renderizamos la vista
  return (
    <div className='Search_bar'>
      <input
        value={search}
        onChange={searcher}
        type="text"
        name="Searcher"
        id='Searcher'
        placeholder='Qué deseas buscar...?'
        className='form-control'
      />
      <ul>
        {results.map((game) => (
          <li key={game.id} className='search-result'>
            {game.name_game}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Searcher;
