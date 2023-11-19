import styled from 'styled-components'

const theme = {
  primary: {
    default: '#3f51b5',
    hover: '#283593',
  },
  secondary: {
    default: '#e91e63',
    hover: '#ad1457',
  },
}

const Button = styled.button<{ $variant: 'primary' | 'secondary' }>`
  background-color: ${(props) => theme[props.$variant].default};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  outline: 0;
  border: none;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  //box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.$variant].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`

Button.defaultProps = {
  $variant: 'secondary',
}
export default Button
