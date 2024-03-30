"use client"

import Card from '@/components/Card'
import Dropdown from '@/components/Dropdown'
import SideNavbar from '@/components/SideNavbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Upload } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CollectionPage = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <section className='hidden md:flex px-8 w-[300px]'>
        <SideNavbar navStyling="py-6" />
      </section>

      <section className="w-full">
        <div className="px-7 md:px-8 pt-6 flex justify-between items-center">
          <h1 className="font-bold text-[24px] md:text-[36px]">Collections</h1>
          <Button size="lg" className="bg-blue-800 hover:bg-blue-900 rounded-full md:flex hidden">
            Add Files
          </Button>
          <Button className='bg-blue-800 hover:bg-blue-900 rounded-full flex md:hidden'>
            <Upload  className='h-5 w-5'/>
          </Button>
        </div>

        <div className="flex px-7 md:px-8 py-4 gap-2">
          <div className="flex items-center w-full overflow-hidden rounded-full bg-gray-200 px-2 md:py-2">
            <Input className="bg-gray-200 border-none focus-visible:ring-transparent rounded-full focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 md:text-[16px]" placeholder="Search..." />
            <Image src='/assets/icons/search.png' alt="" width={24} height={24} className="mr-2" />
          </div>
          <Dropdown />
        </div>

        <div className="wrapper py-4 px-7 md:px-8">
          <Card />
        </div>
      </section>
    </div>
  )
}

export default CollectionPage