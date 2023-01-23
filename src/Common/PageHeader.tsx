import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const PageHeader = () =>{
  return (
    <Header>
      <Title>
        <Link to = "/">
          *성이들을 위해 이모가 만든 Pokémon Dex
        </Link>
      </Title>
      <Select>
        <option value="Official">Official</option>
        <option value="a">A</option>
        <option value="b">B</option>
      </Select>
    </Header>
  )
}

const Header = styled.nav`
  max-width: 1020px;
  margin:0 auto;
  display: flex;
  padding: 16px 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid #c8c8c8;
`

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  color : #ffca09;
  text-shadow: 2px 0 black, 0 2px black, -1px 0 black, 0 -1px black;
`

const Select = styled.select`
  diplay: flex;
  margin-left: auto;
  padding: 8px 12px;
  border-radous: 4px;
`
export default PageHeader