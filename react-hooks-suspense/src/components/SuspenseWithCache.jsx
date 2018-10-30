import React, { useState, Suspense } from 'react'
import { createCache, createResource } from 'react-cache'
import fetchPokemon from '../utils/fetch-pokemon'

//better way to handle cache
const cache = createCache()
//accepts a function that returns a promise
const myPokemon = createResource(fetchPokemon)

function PokemonInfo({ pokemonName }) {
  const pokemon = myPokemon.read(cache, pokemonName) //does not make repeated HTTP calls
  return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>
}

function SuspenseWithCache() {
  const [pokemonName, setPokemonName] = useState(null)
  function handleSubmit(e) {
    e.preventDefault()
    setPokemonName(e.target.elements.pokemonName.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonName-input">Pokemon Name (ie Pikachu)</label>
        <input id="pokemonName-input" name="pokemonName" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {pokemonName ? (
          //shows fallback while data isn't loaded
          <Suspense fallback={<div>loading...</div>}>
            <PokemonInfo pokemonName={pokemonName} />
          </Suspense>
        ) : null}
      </div>
    </div>
  )
}

export default SuspenseWithCache
