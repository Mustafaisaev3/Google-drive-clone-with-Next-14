import React from 'react'
import Navbar from '@/components/shared/Navbar'
import { ChildProps } from '@/types'

const RootLayout = ({ children }: ChildProps) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default RootLayout