import Navbar from '@/components/shared/Navbar'
import Sidebar from '@/components/shared/Sidebar'
import { ChildProps } from '@/types'
import React from 'react'

const AuthLayout = ({ children }: ChildProps) => {
  return (
    <div className='relative'>
      <Navbar />
      <Sidebar />
      <main className='w-full h-[90vh] flex items-center justify-center z-50 relative'>
        {children}
      </main>
    </div>
  )
}

export default AuthLayout