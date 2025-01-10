"use client"

import React from 'react'
import Link from 'next/link'
import Button from '../button/Button'

const HomeBannerTitle = () => {
    return (
        <div className='absolute top-[20%] md:top-[20%] lg:top-[15%] left-0  h-full text-white px-0 lg:px-12  pb-12 w-full md:max-w-[70%]'>

            <h3 className='tracking-wider uppercase text-[4vw] my-1 md:text-[2.9vw] lg:text-[1.5vw] font-bold text-slate-400'>Transforming Ideas Into Reality</h3>
            <h1 className='text-[9vw] leading-[11vw] md:text-[3.9vw] md:leading-[6vw] lg:text-[4.4vw] lg:leading-[5.3vw] font-bold w-full lg:w-[45vw] text-slate-50' >
                Innovative software solutions tailored to your needs.
            </h1>

            <p className='mt-6 text-[3vw]  md:text-[1.9vw] lg:text-[1.3vw] w-3/4 text-slate-200'>
                We specialize in crafting exceptional digital experiences, empowering businesses with cutting-edge technology.
            </p>

            <div className='mt-8 flex justify-between gap-2 w-fit'>
                <div className='p-2 border rounded-2xl'>
                    <Link href={"/project"}>
                        <button className="text-[18px]  hover:bg-white hover:text-black transition-all hover:ring-green-500 lg:text-xl font-bold ring-4 ring-red-500 rounded-lg p-4 ring-offset-4">Discover our works</button>
                    </Link>
                </div>
                <div>
                    <Button background="purple" contact contactAddress="mailto:samsur.rahman3311@gmail.com" content="Contact" />
                </div>
            </div>
        </div>
    )
}

export default HomeBannerTitle
