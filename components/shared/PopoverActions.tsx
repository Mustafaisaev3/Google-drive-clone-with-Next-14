import React from 'react'
import { Separator } from '../ui/separator'
import { FileUp, Folder, FolderUp } from 'lucide-react'
import { useFolder } from '@/hooks/use-folder'

const PopoverActions = () => {
  const { onOpen } = useFolder()
  
  return (
    <>
      <div
        className="flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm"
        role="button"
        onClick={onOpen}
      >
        <Folder className="w-4 h-4" />
        <span>New folder</span>
      </div>
      <Separator />

      <label>
        <div
          className="flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm"
          role="button"
        >
          <FileUp className="w-4 h-4" />
          <span>File upload</span>
        </div>
      </label>

      <label>
        <div
          className="flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm"
          role="button"
        >
          <FolderUp className="w-4 h-4" />
          <span>Folder upload</span>
        </div>
      </label>
    </>
  )
}

export default PopoverActions