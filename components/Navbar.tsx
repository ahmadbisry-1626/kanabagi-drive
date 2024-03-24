"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SideNavbar from './SideNavbar'
import { Separator } from '@radix-ui/react-separator'


const Navbar = () => {
  return (
    <>
      <div className='border-b w-full flex justify-between items-center px-6 py-4'>
        <Link href="/" className='w-37'>
          <Image src="/assets/images/Logos.png" alt='' width={180} height={68} />
        </Link>

        <Link
          href="/"
          className='hidden md:flex bg-gray-200 p-1 rounded-full'>
          <Image src='/assets/images/user.jpg' alt='' width={50} height={50} className='rounded-full' />
        </Link>

        <nav className='md:hidden'>
          <Sheet>
            <SheetTrigger>
              <Image src="/assets/icons/menus.png" alt='menu' width={24} height={24} />
            </SheetTrigger>

            <SheetContent side="top" className=''>
              <SheetHeader className='gap-2'>
                <SheetTitle>Menu</SheetTitle>

                <Separator className='border border-gray-200' />

                <SheetDescription>
                  <SideNavbar />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  )
}

export default Navbar