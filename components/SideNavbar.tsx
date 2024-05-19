import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type SideNavbarProps = {
    navStyling?: string;
}

const SideNavbar = ({ navStyling }: SideNavbarProps) => {
    const pathname = usePathname()

    return (
        <div className={`${navStyling} relative`}>
            <ul className='flex flex-col gap-6'>
                {navLinks.map((navItem) => {
                    const isActive = pathname === navItem.route;
                    return (
                        <li
                            key={navItem.route}
                            className={`${isActive && 'text-blue-800'}`}>
                            <button className='flex gap-4 items-center group transiliton-all duration-200 ease-in-out cursor-not-allowed' disabled>
                                <div className={`${isActive && 'group-hover:bg-blue-800 !bg-blue-800'} p-2 bg-gray-300 rounded-full transition duration-200 ease-in-out`}>
                                    <Image src={navItem.iconUrl} alt='' width={24} height={24} className='' />
                                </div>
                                <span className={`${isActive && 'group-hover:text-blue-800 !text-blue-800'} text-gray-300 font-bold text-[16px] leading-[24px] transition duration-200 ease-in-out`}>
                                    {navItem.name}
                                </span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideNavbar