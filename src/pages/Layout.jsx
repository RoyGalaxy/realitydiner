import NavBar from '@/components/NavBar'
import React from 'react'

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

export default Layout