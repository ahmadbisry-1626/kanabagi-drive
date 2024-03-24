"use client"

import SideNavbar from '@/components/SideNavbar'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <section className='hidden md:flex px-8 w-[300px]'>
        <SideNavbar navStyling="py-6" />
      </section>

      <section className="w-full">
        <div className="px-7 md:px-4 py-4 flex items-center justify-center">
          <h1 className="font-bold text-[36px]">Profile</h1>
        </div>
      </section>
    </div>
  )
}

export default ProfilePage