import Navbar from '@/components/shared/Navbar'
import Sidebar from '@/components/shared/Sidebar'
import { ChildProps } from '@/types'
import React from 'react'

const AuthLayout = ({ children }: ChildProps) => {
  return (
    <div className='relative'>
      <div className="w-screen h-screen absolute inset-0 z-40 bg-black/50" />
      <Navbar />
      <Sidebar />
      <main className='w-full h-[90vh] flex items-center justify-center relative z-40'>
        {children}
      </main>
    </div>
  )
}

export default AuthLayout