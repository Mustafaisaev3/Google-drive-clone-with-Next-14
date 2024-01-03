import React from 'react'
import Navbar from '@/components/shared/Navbar'
import Sidebar from '@/components/shared/Sidebar'
import { ChildProps } from '@/types'

const RootLayout = ({ children }: ChildProps) => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        {children}
    </div>
  )
}

export default RootLayout