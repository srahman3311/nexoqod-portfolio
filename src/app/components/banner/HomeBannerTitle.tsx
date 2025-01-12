"use client"

import React from 'react'

const HomeBannerTitle = () => {
    return (
        <div className='absolute top-[25%] left-0  h-full text-white px-0 lg:px-12  pb-12 w-full md:max-w-[70%]'>

            <h3 className='tracking-wider uppercase text-xl my-1 md:text-xl lg:text-[1.3vw] font-bold text-slate-400'>Transforming Ideas Into Reality</h3>
            <h1 className=' my-4 md:my-2 font-bold w-full lg:w-[45vw] text-[2.6rem] leading-[1]  md:text-5xl md:leading-[1.2] lg:text-[3.6vw] lg:leading-[4.2vw] text-slate-50' >
                Innovative software solutions tailored to your needs.
            </h1>

            <p className='mt-6 text-[3.1vw]  md:text-[2vw] lg:text-[1.3vw] w-3/4 text-slate-200'>
                We specialize in crafting exceptional digital experiences, empowering businesses with cutting-edge technology.
            </p>
        </div>
    )
}

export default HomeBannerTitle
