import React from 'react'

import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import GlobalStyles from '@/styles/globals/BasicGlobalStyles'

interface IApplicationProps {}

const App: React.FC = (props: IApplicationProps) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Sidebar />
    </>
  )
}

export default App
