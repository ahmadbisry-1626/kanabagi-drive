"use client"

import HomeCard from "@/components/HomeCard";
import SideNavbar from "@/components/SideNavbar";
import { Input } from "@/components/ui/input";
import { homeCard, homeIcons } from "@/constants";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchParamProps } from '../types/index';

const Home = ({ searchParams }: SearchParamProps) => {
  const searchParam = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
 
  const query = searchParams?.query || '';

  function handleSearch(query: string) {
    const param = new URLSearchParams(searchParam)
    if (query) {
      param.set('query', query)
    } else {
      param.delete('query')
    }

    // Set page parameter to 1
    param.set('page', '1')

    replace(`${pathname}?${param.toString()}`)
  }

  return (
    <div className="flex flex-row min-h-screen">
      <section className='hidden md:flex px-8 w-[300px]'>
        <SideNavbar navStyling="py-6" />
      </section>

      <section className="w-full px-7 md:px-8 pt-6 flex flex-col gap-10">
        <div className="relative overflow-hidden wrapper py-4 flex flex-col items-center justify-center xl:h-[300px] md:h-[400px] text-center rounded-[24px] bg-gradient-to-r from-blue-700 to-blue-950 gap-6">
          <Image src="/assets/icons/star.png" alt="" width={100} height={100}
            className="absolute top-2 left-2 xl:top-10 xl:left-10 w-[60px] h-[60px] md:w-[100px] md:h-[100px] hidden sm:flex" />
          <Image src="/assets/images/line.png" alt="" width={100} height={100} className="absolute right-10 bottom-0 hidden lg:flex" />
          <h1 className="font-bold text-[24px] md:text-[36px] text-white max-w-xs md:max-w-lg">
            Unleash Your Creative Vision with Kanabagi
          </h1>

          <div className="flex gap-8 md:gap-10 pb-2 md:pb-0">
            {homeIcons.map((sosmed) => (
              <div className="flex flex-col items-center gap-4" key={sosmed.name}>
                <div className="bg-blue-600 p-2 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out">
                  <Link href={sosmed.path}>
                    <Image src={sosmed.iconUrl} alt="" width={24} height={24}
                      className="md:w-[24px] md:h-[24px] w-[20px] h-[20px]" />
                  </Link>
                </div>

                <p className="text-white font-normal md:font-medium hidden md:flex">{sosmed.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-[24px] md:text-[30px] font-semibold">
              Recent Works
            </h1>

            <div className="flex items-center">
              <div className="bg-gray-200 py-2 px-4 flex items-center gap-2 rounded-full">
                <Image src="/assets/icons/search.png" alt="" width={24} height={24} />
                <Input
                  // onChange={handleSearch}
                  // ref={inputRef}
                  // onChange={(e) => setQuery(e.target.value)}
                  defaultValue={searchParam.get('query')?.toString()}
                  onChange={(e) => { handleSearch(e.target.value) }}
                  className="w-[200px] border-none focus-visible:ring-transparent rounded-full focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 bg-gray-200" placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <HomeCard
            searchParams={searchParams}
            query={query} />
        </div>
      </section>
    </div>
  );
}

export default Home
