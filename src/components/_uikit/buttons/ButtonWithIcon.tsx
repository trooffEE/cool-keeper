import React from 'react'
import styled from 'styled-components'

import Icon from '@material-ui/core/Icon'
import colors from '@/styles/colors/colors'

interface IButton {
  handleClick: () => void
}

const ButtonWithIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: background 250ms ease-in-out;
  padding: 10px;
  :hover {
    background-color: ${colors.black.secondary};
  }

  > img {
    max-width: 48px;
    width: 100%;
  }
`

const ButtonWithIcon: React.FC<
  IButton & React.HTMLProps<HTMLButtonElement>
> = ({ children, handleClick, }) => {
  return (
    <ButtonWithIconWrapper onClick={handleClick}>
      <Icon style={{ color: '#fff', }}>{children}</Icon>
    </ButtonWithIconWrapper>
  )
}

export default ButtonWithIcon
