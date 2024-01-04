'use client'

import React from 'react'
import Link from 'next/link';
import { Clock5, Cloud, Loader, Plus, Star, Tablet, Trash } from "lucide-react";
import Item from './Item';
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Progress } from '../ui/progress';
import PopoverActions from './PopoverActions';

const sidebarLinks = [
    {
      label: "My drive",
      icon: Tablet,
      path: "/",
    },
    {
      label: "Starred",
      icon: Star,
      path: "/starred",
    },
    {
      label: "Recent",
      icon: Clock5,
      path: "/recent",
    },
    {
      label: "Trash",
      icon: Trash,
      path: "/trash",
    },
    {
      label: "Storage",
      icon: Cloud,
      path: "/cloud",
    },
];

const Sidebar = () => {
  return (
    <div className="h-[90vh] w-72 fixed top-[10vh] left-0 z-30 bg-[#F6F9FC] dark:bg-[#1f1f1f] border-r">
      <div className='flex flex-col p-3'>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-fit h-12 rounded-full px-6">
              <Plus />
              <span>New</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 py-2">
            <PopoverActions />
          </PopoverContent>
        </Popover>
        <div className="flex flex-col space-y-6 mt-8">
          {sidebarLinks.map((link) => (
            <Link href={link.path} key={link.path}>
              <Item icon={link.icon} label={link.label} path={link.path} />
            </Link>
          ))}

          <div className="flex flex-col space-y-2 mx-4">
            <Progress className='h-2' value={30} />
            <span>150 MB of 1.5 GB used</span>
            <Button className="rounded-full" variant={"outline"}>
            Get more storage
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sidebar