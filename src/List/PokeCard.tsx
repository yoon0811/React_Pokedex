import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PokeImageSkeleton } from "../Common/PokeImageSkeleton"
import PokeMarkChip from "../Common/PokeMarkChip"
import PokeNamePokeid from "../Common/PokeNamePokeid"
import {fetchPokemonDetail, PokemonDetailType} from "../Service/pokemonService"


interface PokeCardProps {
  name: string
}

const PokeCard = (props:PokeCardProps) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null) 

  const handleClick =() => {
    navigate(`/pokemon/${props.name}`);
  }

  useEffect(() => {
    (async() => {
      const detail = await fetchPokemonDetail(props.name);
      setPokemon(detail);
    })()
  }, [props.name])

  if (!pokemon) {
    return(
      <Item color={'#eee'}>         
        <Header>
          <PokeNamePokeid name={'???'} color={'#aaa'} id={0}/>
      </Header>
      <Body>
        <PokeImageSkeleton/>
      </Body>
      <Footer>
        <PokeMarkChip/>
      </Footer>
    </Item>
      ) 
  }

  return (
    <Item onClick={handleClick} color={pokemon.color}>
      <Header>
        <PokeNamePokeid name={pokemon.koreanName} color={pokemon.color} id={pokemon.id}/>
      </Header>
      <Body>
        <Image src={pokemon.images.dreamWorldFront} alt={pokemon.name}/>
      </Body>
      <Footer>
        <PokeMarkChip/>
      </Footer>
    </Item>
  )
}

const Item = styled.li<{color: string}>`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 260px;
  padding: 8px;
  
  border: 1px solid #c8c8c8;
  box-shadow: 1px 1px 1px 1px #c0c0c0;

  cursor:pointer;
  transition: transform 0.2s ease-in-out;
  &:hover{
    transform: scale(1.05); 
    border-color:blue;     
  
  &:active {
    background-color: ${props => props.color};
    opacity: 0.6;
    transition: background-color 0.2s ease-in-out;
  }
`

const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin : 8px 0;
`

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justfy-content: center;
  align-items: center; 
  margin: 8px 0;
`

const Image = styled.img`
  max-width:170px;
  max-height: 170px;
  margin: auto;
`
const Footer = styled.section`
  display: flex;
  flex-direction: row;
`

export default PokeCard