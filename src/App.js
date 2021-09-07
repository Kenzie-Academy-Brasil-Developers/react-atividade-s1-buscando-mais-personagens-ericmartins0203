import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters/index";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <h2>Meus personagens</h2>
      <div className="button">
        <button onClick={previousPage}>anterior</button>
        <button onClick={nextPage}>próxima</button>
      </div>
      <Characters characterList={characterList}></Characters>
    </div>
  );
}

export default App;
