import * as React from 'react'

import ButtonWithIcon from '@/components/_uikit/buttons/ButtonWithIcon'
import Background from '@/styles/shared/components/Background'
import HeaderWrapper from '@/styles/shared/layout/HeaderWrapper'

interface IHeaderProps {
  isSearchAvailable?: boolean
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  isSearchAvailable = false,
}) => {
  function handleExpandHeader() {
    console.log(123)
  }

  return (
    <Background>
      <HeaderWrapper>
        <header>
          <ButtonWithIcon handleClick={handleExpandHeader}>menu rounded</ButtonWithIcon>
        </header>
      </HeaderWrapper>
    </Background>
  )
}

export default Header
