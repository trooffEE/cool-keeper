import * as React from 'react'

import alarmImg from '@assets/icons/box.svg'
import ButtonWithIcon from '@/shared-styles/components/ButtonWithIcon'

interface IHeaderProps {
  isSearchAvailable?: boolean
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  isSearchAvailable = false,
}) => {
  return (
    <header>
      <ButtonWithIcon>
        <img src={alarmImg} alt="alarm" />
      </ButtonWithIcon>
    </header>
  )
}

export default Header
