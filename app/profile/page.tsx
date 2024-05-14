"use client"

import SideNavbar from '@/components/SideNavbar'
import Image from 'next/image'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <section className='hidden md:flex px-8 w-[300px]'>
        <SideNavbar navStyling="py-6" />
      </section>

      <section className="w-full">
        <div className="px-7 md:px-4 py-4 flex items-center justify-center flex-col gap-4">
          <h1 className="font-bold text-[36px]">Still working on it.</h1>
          {/* <Image src="/assets/images/ehe.jpg" alt='' width={400} height={400} /> */}
        </div>
      </section>
    </div>
  )
}

export default ProfilePage