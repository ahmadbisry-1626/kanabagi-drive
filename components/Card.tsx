import Link from 'next/link'
import React from 'react'

const Card = () => {
    return (
        <div className='bg-gray-200 p-4 flex justify-center items-center w-full rounded-xl h-[300px] md:h-[350px]'>
            <p className='max-w-4xl text-[20px] md:text-[30px] text-gray-500'>
                We dont know what we re making. Sometimes we do it just for fun. But If u interested to make responsive website with clean design like this, <Link href="https://wa.link/hhvxf2" className='text-blue-500 hover:underline'>tell us</Link>. We provide website development for our portofolio.
            </p>
        </div>
    )
}

export default Card