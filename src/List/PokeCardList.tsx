import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import useInfiniteScroll from "react-infinite-scroll-hook"
import { fetchPokemon, PokemonListResponseType } from "../Service/pokemonService"
import PokeCard from "./PokeCard"

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonListResponseType>({
    count:0, 
    next:'',
    results: []
  })

  const [infiniteRef] = useInfiniteScroll({
    loading:false,
    hasNextPage: pokemons.next !== '',
    onLoadMore: async () => {
      const morePokemons = await fetchPokemon(pokemons.next);

      setPokemons({
        ...morePokemons,
        results:[...pokemons.results, ...morePokemons.results]
      })
    },
    disabled: false,
    rootMargin: '0px 0px 400px 0px',
  });

  useEffect(() => {
    (async () => {
      const pokemons = await fetchPokemon();
      setPokemons(pokemons);
    })()
  }, [])

  return (
    <>
    <List>
      {
        pokemons.results.map((pokemon, index) => {
          return(
            <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name}/>
          )
        })
      }
    </List>
    <Loading ref={infiniteRef}>
      Loading...
    </Loading>
    </>
  )
}

const Loading = styled.div`
  display:flex;
  justify-content:center;
`

const List = styled.ul`
  max-width:1020px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content:center;
  gap: 20px;
`

export default PokeCardList