"use client"

import Image from "next/image"
import Header from "../components/header/Header"
import FirstAnimation from "../components/loadingUi/FirstAnimation"
import Startup from "../components/loadingUi/Startup"

import SocialLink from "../components/menubar/SocialLink"
import { BsFacebook, BsLinkedin, BsTwitterX } from "react-icons/bs"

const page = () => {
    return (
        <>
            <Startup />
            <FirstAnimation />
            <header className="w-full  controlLargeScreen ">
                <Header />
            </header>
            <main className="w-full px-4 py-12 bgToptoBottom  md:px-24 md:py-24 ">
                <div className=" w-full lg:w-3/4">
                    <h2 className="text-neutral-50 text-[7vw] md:text-[6vw] lg:text-[4.5vw] lg:leading-[5.5vw] first-letter:text-[#3D42FB] first-letter:font-bold inline-block">Let’s Build Something Great Together </h2>
                    <small className="text-[3vw] md:text-[2vw] lg:text-[1.4vw] text-neutral-400 block w-full lg:w-4/6 mt-4">Reach out to discuss your project, request a quote, or ask a question. We’d love to hear from you.</small>
                </div>


                {/* =================== pro =================== */}

                <div className=" text-white  w-full flex gap-12 items-center flex-col mt-24">


                    <Image
                        className="w-[220px] h-[220px] lg:w-[15vw] lg:h-[15vw] text-center rounded-full object-cover"
                        width={5000}
                        height={5000}
                        alt="Ceo Image"
                        src={"/team-3.jpg"}
                    />

                    <div className="w-full h-full">
                        <div className="felx flex-col items-center justify-center w-full">

                            <h3 className="text-center text-4xl">Aminur Rahman</h3>
                            <cite className="text-md text-center block">ceo of nexoqod</cite>
                            <small className="block text-lg text-center my-8 lg:my-12 font-serif"><q>If you don't like the road you're walking, start paving another.</q></small>

                            <div className="w-full lg:w-3/4 mx-auto flex items-center justify-center h-[8vw]">
                                <div className="w-full h-full min-h-[60px] flex items-center justify-center bg-[#1877F2]">

                                    <div className="">
                                        <div className="hidden w-fit h-fit md:block">
                                            <SocialLink
                                                icon={BsFacebook}
                                                iconSize={25}
                                                linkName="FaceBook"
                                                linkUrl="https://facebook.com"
                                            />
                                        </div>
                                        <div className="block w-fit h-fit md:hidden">
                                            <SocialLink
                                                icon={BsFacebook}
                                                iconSize={18}
                                                linkName="FaceBook"
                                                linkUrl="https://facebook.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full min-h-[60px] flex items-center justify-center text-black bg-[#ffffff]">

                                    <div className="">
                                        <div className="hidden w-fit h-fit md:block">
                                            <SocialLink
                                                icon={BsTwitterX}
                                                iconSize={25}
                                                linkName="Twiter"
                                                linkUrl="https://twiterx.com"
                                            />
                                        </div>
                                        <div className="block w-fit h-fit md:hidden">
                                            <SocialLink
                                                icon={BsTwitterX}
                                                iconSize={18}
                                                linkName="Twiter"
                                                linkUrl="https://facebook.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#1A6FC5] w-full min-h-[60px] h-full flex items-center justify-center">
                                    <div className="">
                                        <div className="hidden w-fit h-fit md:block">
                                            <SocialLink
                                                icon={BsLinkedin}
                                                iconSize={25}
                                                linkName="Twiter"
                                                linkUrl="https://twiterx.com"
                                            />
                                        </div>
                                        <div className="block w-fit h-fit md:hidden">
                                            <SocialLink
                                                icon={BsLinkedin}
                                                iconSize={18}
                                                linkName="Twiter"
                                                linkUrl="https://facebook.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* mfklgfgdfjgio */}
                    <div className="grid text-white grid-cols-1 relative lg:grid-cols-2 gap-4 object-scale-down h-fit  w-full lg:w-3/4">
                        <div className="flex items-center flex-col justify-center gap-4 border-slate-500  border-b-2 border-l-0 lg:border-r">
                            <Image
                                className="w-[170px] h-[170px] lg:w-[12vw] lg:h-[12vw] rounded-full"
                                width={5000}
                                height={5000}
                                alt="Ceo Image"
                                src={"/team-2.jpg"}
                            />


                            <h2 className="text-2xl">Shamsur rahman Rafej</h2>
                            <cite className="-mt-2">Senior Partner</cite>

                            <div className="h-[50%] grid grid-cols-3 gap-4 items-center justify-between my-6">
                                <div className="w-full flex items-center justify-center bg-[#1877F2] rounded-full p-2">

                                    <div className="">
                                        <div className="w-fit h-fit">
                                            <SocialLink
                                                icon={BsFacebook}
                                                iconSize={18}
                                                linkName="FaceBook"
                                                linkUrl="https://facebook.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex items-center justify-center text-black bg-[#ffffff] rounded-full p-2">

                                    <div className="">
                                        <div className="w-fit h-fit">
                                            <SocialLink
                                                icon={BsTwitterX}
                                                iconSize={18}
                                                linkName="Twiter"
                                                linkUrl="https://twiterx.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#1A6FC5] w-full flex items-center justify-center rounded-full p-2">
                                    <div className="">
                                        <div className="w-fit h-fit">
                                            <SocialLink
                                                icon={BsLinkedin}
                                                iconSize={18}
                                                linkName="Twiter"
                                                linkUrl="https://facebook.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center flex-col justify-center gap-4 border-0 border-slate-500 lg:border-b-2 border-l-0 lg:border-l">
                            <Image
                                className="w-[170px] h-[170px] lg:w-[12vw] lg:h-[12vw] rounded-full"
                                width={5000}
                                height={5000}
                                alt="Ceo Image"
                                src={"/team-1.jpg"}
                            />

                            <h2 className="text-2xl">Rayhan ahmed</h2>
                            <cite className="-mt-2">Senior Partner</cite>

                            <div className="h-[50%] grid grid-cols-3 gap-4 items-center justify-between my-6">
                                <div className="w-full flex items-center justify-center bg-[#1877F2] rounded-full p-2">

                                    <div className="">
                                        <div className="w-fit h-fit">
                                            <SocialLink
                                                icon={BsFacebook}
                                                iconSize={18}
                                                linkName="FaceBook"
                                                linkUrl="https://facebook.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex items-center justify-center text-black bg-[#ffffff] rounded-full p-2">

                                    <div className="">
                                        <div className="w-fit h-fit">
                                            <SocialLink
                                                icon={BsTwitterX}
                                                iconSize={18}
                                                linkName="Twiter"
                                                linkUrl="https://twiterx.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#1A6FC5] w-full flex items-center justify-center rounded-full p-2">
                                    <div className="">
                                        <div className="w-fit h-fit">
                                            <SocialLink
                                                icon={BsLinkedin}
                                                iconSize={18}
                                                linkName="Twiter"
                                                linkUrl="https://facebook.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default page
