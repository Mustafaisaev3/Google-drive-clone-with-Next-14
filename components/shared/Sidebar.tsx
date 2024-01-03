import React from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="h-[90vh] w-60 fixed top-[10vh] left-0 z-30 bg-[#F6F9FC] dark:bg-[#1f1f1f]">
      <div className='flex flex-col p-3'>
        <Button className='w-fit h-12 rounded-full px-6 cursor-pointer'>
          <Plus />
          <span>New</span>
        </Button>
      </div>
    </div>
  )
}

export default Sidebar