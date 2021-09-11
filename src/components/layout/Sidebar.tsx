import React, { ReactElement } from 'react'

interface ISidebarProps {
  isOpened?: boolean
}

export default function Sidebar({ isOpened, }: ISidebarProps): ReactElement {
  return <aside />
}
