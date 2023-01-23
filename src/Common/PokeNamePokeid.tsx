import styled from "@emotion/styled"

interface PokeNamePokeidProps{
  name: string
  id: number
  color: string
}

const PokeNamePokeid = (props:PokeNamePokeidProps) => {
  const renderNumber = (id:number) => {
    const digits = 3;
    const numberString = id.toString();

    if(numberString.length >= digits) {
      return numberString; 
    }

    let result = '';

    for(let i = 0; i < digits - numberString.length; i++){
      result += '0';
    }

    return `${result}${numberString}`
  }
  return (
    <Pokeid>
      <NumberWrap color={props.color}>
        <Number>{renderNumber(props.id)}</Number>
      </NumberWrap>
      <Name>{props.name}</Name>
    </Pokeid>
  )
}

const Pokeid = styled.div`
display: flex;
align-item: center;

border: 1px solid #c0c0c0;
border-radius: 16px;

font-size:14px;
font-weight: bold;
box-shadow: 0.5px 0.5px 0 0 #c8c8c8;
`

const NumberWrap = styled.span<{color: string}>`
  padding: 4px;
  border-radius:16px;
  background-color: ${props => props.color };
  `
const Number = styled.label`
`

const Name = styled.label`
margin: 0 5px;
`

export default PokeNamePokeid