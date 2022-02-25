import React, { useEffect, useState }  from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

 const pegarPokemons = () => {
  axios
  .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  .then(response => {
    console.log(response.data)
    setPokeList(response.data.results)
  })
  .catch(err => {
    console.log(err);
  })
}

useEffect(() => {pegarPokemons()}, [])

const mudarPokeName = (event) => {
  setPokeName(event.target.value)
}


    return (
      <div className="App">
        <select onChange={mudarPokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }

export default App;
