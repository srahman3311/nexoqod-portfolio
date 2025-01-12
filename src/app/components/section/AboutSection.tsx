"use client"

import { useRef } from "react"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react"
import Image from "next/image";
import Link from "next/link";



gsap.registerPlugin(ScrollTrigger)


const AboutSection = () => {

    const aboutRef = useRef<HTMLHeadingElement>(null)

    useGSAP(() => {


        gsap.fromTo(".posRightTo", { translateX: 0, translateY: 0 }, {
            translateX: 150, translateY: 100, ease: "power1.in", delay: .2, scrollTrigger: {
                trigger: ".posRightTo",
                start: "top 100%",
                scrub: 1,
                toggleActions: 'play play play reverse'
            }
        })
    }, [])


    return (

        <div ref={aboutRef} className="text-white flex justify-between items-center flex-wrap lg:flex-nowrap gap-12 lg:gap-24 relative py-20 px-8 md:px-12 lg:px-20 overflow-hidden">

            <div className="full">
                <Image
                    className="w-full md:max-w-[35vw] lg:min-w-[35vw] lg:max-w-[65vw]"
                    width={5000}
                    height={5000}
                    alt="banner"
                    src={"/banner.webp"}
                />
            </div>
            <div className="w-full">
                <h2 className="text-[7vw] leading-[9vw] md:leading-[6.6vw] lg:leading-[4.4vw] md:text[3.2vw] lg:text-[3.5vw] mb-8 xl:w-3/4">Working to build your success</h2>
                <span className="text-[16px] md:text[1.7vw] lg:text-[1.2vw] text-light">For over 6 years, NEXOQOD IT, a premier digital agency, provides best-in-class web design, development, hosting, digital marketing, and managed services. With us, your success is our success, and we work with you to find powerful online solutions that fit your needs.</span>

                <div className="my-8">
                    <Link href={"/about"}>
                        <button className="text-[14px]  hover:bg-white hover:text-black transition-all hover:ring-green-500 lg:text-lg font-bold ring-4 ring-red-500 rounded-lg p-4 ring-offset-4">Know us more</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default AboutSection
