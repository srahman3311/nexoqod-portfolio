"use client"

import { useRef } from "react"
import Link from "next/link"

import { handleMouseMove, handleMouseOut } from "../button/buttonEffect"
import Image from "next/image"


const Logo = () => {

    const divRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLAnchorElement>(null)

    return (

        <div ref={divRef}
            onMouseMove={(e) => handleMouseMove(e, divRef, textRef)}
            onMouseLeave={(e) => handleMouseOut(e, divRef, textRef)}
            className="p-4 group flex items-center gap-2 w-fit 
                       cursor-pointer rounded-md h-fit" >


            <div className="">
                <Image
                    className="max-w-28 max-h-24 rounded-full"
                    width={5000}
                    height={5000}
                    alt="logo-image"
                    src={'/nexoqod_logo.png'}
                />

            </div>

            {/* <div className="relative w-[130px] md:w-[15vw] lg:w-[8.5vw] group h-8 overflow-hidden p-2" >
                <Link ref={textRef} href={"/"}
                    className="text-nowrap lg:text-[1.15vw] font-semibold 
                        absolute transition-all duration-300 delay-75 
                        group-hover:left-[-28px] top-[3px] left-0" >

                    NEXOQOD IT
                </Link>
            </div> */}
        </div>


    )
}

export default Logo
