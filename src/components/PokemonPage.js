import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(()=> {
      fetch("http://localhost:3001/pokemon")
      .then(r=> r.json())
      .then(pokemonInfo => setPokemon(pokemonInfo))
    }, [])

    function addNewPokemon (newPokemon) {
      setPokemon([...pokemon, newPokemon])
    }

    const pokemonsToDisplay = pokemon.filter((poke)=> poke.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search searchValue = {searchValue} setSearchValue = {setSearchValue}/>
      <br />
      <PokemonCollection pokemon={pokemonsToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
