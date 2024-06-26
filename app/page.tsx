"use client"

import HomeCard from "@/components/HomeCard";
import SideNavbar from "@/components/SideNavbar";
import { Input } from "@/components/ui/input";
import { homeIcons } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SearchParamProps } from '../types/index';
import { Separator } from "@/components/ui/separator";

export default function Home({ searchParams }: SearchParamProps) {
  const pathname = usePathname()
  const { replace } = useRouter()

  const query = searchParams?.query || '';

  function handleSearch(query: string) {
    const param = new URLSearchParams(window.location.search)
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
        <div className="relative overflow-hidden wrapper py-4 flex flex-col items-center justify-center xl:h-[350px] md:h-[400px] text-center rounded-[24px] bg-gradient-to-r from-blue-700 to-blue-950 md:gap-[70px] gap-10">
          <Image src="/assets/icons/star.png" alt="" width={100} height={100}
            className="absolute top-2 left-2 xl:top-10 xl:left-10 w-[60px] h-[60px] md:w-[100px] md:h-[100px] hidden sm:flex" />
          <Image src="/assets/images/line.png" alt="" width={100} height={100} className="absolute right-10 bottom-0 hidden lg:flex" />
          <h1 className="font-bold text-[20px] md:text-[36px] text-white max-w-xs md:max-w-lg z-10">
            Elegance Personified Korean Girls in Pictures
          </h1>

          <div className="flex gap-6 md:gap-10 xl:gap-[50px] pb-2 md:pb-0 w-full justify-center">
            <div className="flex flex-wrap gap-6 md:gap-10 xl:gap-[50px] pb-2 md:pb-0 w-full justify-center">
              {homeIcons.map((sosmed) => (
                <div className="flex flex-col items-center gap-4" key={sosmed.name}>
                  <Link href={sosmed.path} className="bg-blue-600 p-2 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out">
                    <Image src={sosmed.iconUrl} alt="" width={24} height={24}
                      className="md:w-[24px] md:h-[24px] w-[20px] h-[20px]" />
                  </Link>

                  <p className="text-white font-normal md:font-medium text-[12px] md:text-[16px] lg:text-[20px]">{sosmed.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center justify-between w-full flex-wrap gap-4 md:gap-0">
            <h1 className="text-[24px] md:text-[30px] font-semibold">
              Recent Files
            </h1>

            <div className="flex items-center">
              <div className="bg-gray-200 px-4 py-1 md:py-2 md:px-4 flex items-center gap-2 rounded-full">
                <Image src="/assets/icons/search.png" alt="" width={24} height={24} className="md:w-[24px] md:h-[24px] w-[18px] h-[18px]" />
                <Input
                  // onChange={handleSearch}
                  // ref={inputRef}
                  // onChange={(e) => setQuery(e.target.value)}
                  defaultValue={query}
                  onChange={(e) => { handleSearch(e.target.value) }}
                  className="border-none focus-visible:ring-transparent rounded-full focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 bg-gray-200 " placeholder="Bae Suzy"
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
