import styled, { css } from 'styled-components'

const ButtonWithIcon = styled.button`
  width: 48px;
  height: 48px;
  background-color: transparent;
  border-radius: 50%;
  :hover {
    background-color: red;
  }

  > img {
    max-width: 48px;
    width: 100%;
  }
`

export default ButtonWithIcon
