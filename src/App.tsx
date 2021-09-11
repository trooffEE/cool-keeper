import React from 'react'

import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'

interface IApplicationProps {}

const App: React.FC = (props: IApplicationProps) => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}

export default App
