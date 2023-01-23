import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PokeImageSkeleton } from "../Common/PokeImageSkeleton"
import PokeMarkChip from "../Common/PokeMarkChip"
import { fetchPokemonDetail, PokemonDetailType } from "../Service/pokemonService"

const PoekmonDetail = () => {  
  const {name} = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null) 

  useEffect(() => {
    if(!name) {
      return;
    }
    (async () => {
      const detail = await fetchPokemonDetail(name);
      setPokemon(detail);
    })()
  }, [name])

  if(!name || !pokemon) {
    return (
      <Container>
      <ImgContain>
        <PokeImageSkeleton/>
      </ImgContain>
      <Divider/>

      <Body>
        <h2> 기본 정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHead>번호</TableHead>
              <td>???</td>
            </TableRow>
            <TableRow>
              <TableHead>이름</TableHead>
              <td>???</td>
            </TableRow>
            <TableRow>
              <TableHead>타입</TableHead>
              <td>???</td>
            </TableRow>
            <TableRow>
              <TableHead>키</TableHead>
              <td>??? m</td>
            </TableRow>
            <TableRow>
              <TableHead>몸무게</TableHead>
              <td>??? kg</td>
            </TableRow>
          </tbody>
        </Table>
        <h2>능력치</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHead></TableHead>
              <td></td>
            </TableRow>
          </tbody>
        </Table>
      </Body>

      <Footer>
        <PokeMarkChip/>
      </Footer>
    </Container>
    )
  }
  return (
    <Container>
      <ImgContain>
        <Image src={pokemon.images.dreamWorldFront} alt={pokemon.koreanName}></Image>
      </ImgContain>
      <Divider/>
      <Body>
        <h2> 기본 정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHead>번호</TableHead>
              <td>{pokemon.id}</td>
            </TableRow>
            <TableRow>
              <TableHead>이름</TableHead>
              <td>{`${pokemon.koreanName} (${pokemon.name})`}</td>
            </TableRow>
            <TableRow>
              <TableHead>타입</TableHead>
              <td>{pokemon.types.toString()}</td>
            </TableRow>
            <TableRow>
              <TableHead>키</TableHead>
              <td>{pokemon.height}m</td>
            </TableRow>
            <TableRow>
              <TableHead>몸무게</TableHead>
              <td>{pokemon.weight}kg</td>
            </TableRow>
          </tbody>
        </Table>
        <h2>능력치</h2>
        <Table>
          <tbody>
            {
              pokemon.baseStats.map(stat => {
                return (
                  <TableRow key={stat.name}>
                  <TableHead>{stat.name}</TableHead>
                  <td>{stat.value}</td>
                </TableRow>
                )
              })
            }
          </tbody>
        </Table>
      </Body>
      <Footer>
        <PokeMarkChip/>
      </Footer>
    </Container>
  )
}

const Container = styled.section`
  max-width:900px;
  border: 1px solid #c8c8c8;
  border-radius: 16px;
  margin: 16px auto;
  box-shadow: 1px 1px 2px 1px #c8c8c8;
`

const ImgContain = styled.section`
  display: flex;
  flex: 1 1 auto;
  justyfy-content: center;
  align-items: center;
  margin:8px 0;
  min-height: 350px;
`
const Image = styled.img`
  width: 350px;
  height:350px;
  margin: auto;
`

const Divider = styled.hr`
  margin: 32px;
  border-style: none;
  border-top: 1px dashed #d4d4d4;

`
const Body = styled.section`
  margin: 0 32px;  
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto 16px;
  
  th, td{
    padding: 6px 12px;
  }
`

const TableRow = styled.tr`
  border: 1px solid #f0f0f0;
`

const TableHead = styled.th`
  width: 1px; 
  white-space: nowrap;
  text-align: left;
  border: 1px solid #f0f0f0;
`
const Footer = styled.footer`
  display: flex;
  flex-direction:row;
  margin: 32px 16px;
`

export default PoekmonDetail