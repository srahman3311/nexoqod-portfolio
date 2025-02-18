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
                <div className=" w-full lg:w-3/4 mb-12">
                    <h2 className="text-neutral-50 text-[7vw] md:text-[5vw] lg:text-[4vw] lg:leading-[5vw] first-letter:text-[#3D42FB] first-letter:font-bold inline-block">Let’s Build Something Great Together </h2>
                    <small className="text-[3vw] md:text-[2vw] lg:text-[1.4vw] text-neutral-400 block w-full lg:w-4/6 mt-4">Reach out to discuss your project, request a quote, or ask a question. We’d love to hear from you.</small>
                </div>

                <div className=" text-white  w-full flex gap-16  items-center flex-col mt-32">
                    <div className="mb-12">


                        <div className="flex items-center flex-col gap-4">
                            <Image
                                className="w-32 h-24 rounded-full"
                                width={5000}
                                height={5000}
                                alt="logo-image"
                                src={"/nexoqod_logo.png"}
                            />
                            <h3 className='-mt-2 text-center mb-0  w-fit text-[8vw] leading-[10vw] md:text-[3vw] md:leading-[5.2vw] lg:text-[3.2vw] lg:leading-[4.5vw] font-bold text-slate-50' >
                                NEXOQOD IT
                            </h3>
                        </div>
                        <div className=" w-full flex  my-1 lg:my-2 flex-col items-center justify-center">
                            <address>House: 5, Apartment 5B</address>
                            <address>Road 17, Block D, Banani</address>
                            <address>Dhaka, Bangladesh</address>
                            <address>Phone: +8801973002528</address>
                        </div>
                    </div>

                    <div className="grid text-white grid-cols-1  relative lg:grid-cols-2 gap-12 object-scale-down h-fit  w-full lg:w-3/4">
                        <div className="flex p-4 lg:p-6 hover:bg-neutral-700  items-center flex-col justify-center gap-2 border-slate-500  border-b-2 border-l-0 lg:border-r">
                            <Image
                                className="w-[170px] h-[170px] lg:w-[12vw] lg:h-[12vw] rounded-full"
                                width={5000}
                                height={5000}
                                alt="Ceo Image"
                                src={"/man_placeholder.jpeg"}
                            />

                            <h2 className="text-3xl mt-2">Aminur Rahman</h2>
                            <cite className="mb-4">CEO</cite>
                            <cite>Email: aminur@nexoqod.com</cite>
                            <cite>Phone/Whatsapp: +8801752008844</cite>
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
                                                linkUrl="https://facebook.com"
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
                        <div className="flex p-4 lg:p-6 hover:bg-neutral-700  items-center flex-col justify-center gap-2 border-0 border-slate-500 lg:border-b-2 border-l-0 lg:border-l">
                            <Image
                                className="w-[170px] h-[170px] lg:w-[12vw] lg:h-[12vw] rounded-full"
                                width={5000}
                                height={5000}
                                alt="Ceo Image"
                                src={"/man_placeholder.jpeg"}
                            />


                            <h2 className="text-3xl">Syed Ahmad Taofique</h2>
                            <cite className="mb-4">CTO</cite>
                            <cite>Email: arif@nexoqod.com</cite>
                            <cite>Phone/Whatsapp: +8801711930032</cite>

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
                                                linkUrl="https://facebook.com"
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

                    <div className="grid text-white grid-cols-1 relative lg:grid-cols-2 gap-12 object-scale-down h-fit  w-full lg:w-3/4">
                        <div className="flex p-4 lg:p-6 items-center bg-black hover:bg-neutral-700  flex-col justify-center gap-3 border-slate-500  border-b-2 border-l-0 lg:border-r">
                            <Image
                                className="w-[170px] h-[170px] lg:w-[12vw] lg:h-[12vw] rounded-full"
                                width={5000}
                                height={5000}
                                alt="Ceo Image"
                                src={"/man_placeholder.jpeg"}
                            />


                            <h2 className="mt-2 text-3xl">Shamsur rahman Rafez</h2>
                            <cite className="mb-4">Tech Lead</cite>
                            <cite>Email: rafez@nexoqod.com</cite>
                            <cite>Phone/Whatsapp: +8801717062884</cite>
                            <div className="h-[50%] grid grid-cols-3 gap-2 items-center justify-between my-4">
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
                                                linkUrl="https://facebook.com"
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
                        <div className="flex p-4 lg:p-6 hover:bg-neutral-700  items-center flex-col justify-center gap-2 border-0 border-slate-500 lg:border-b-2 border-l-0 lg:border-l">
                            <Image
                                className="w-[170px] h-[170px] lg:w-[12vw] lg:h-[12vw] rounded-full"
                                width={5000}
                                height={5000}
                                alt="Ceo Image"
                                src={"/man_placeholder.jpeg"}
                            />

                            <h2 className="text-3xl mt-2">Mirza Amirul Islam</h2>
                            <cite className="mb-4">Tech Lead</cite>
                            <cite>Email: mahfuz@nexoqod.com</cite>
                            <cite>Phone/Whatsapp: +8801754146178</cite>

                            <div className="h-[50%] grid grid-cols-3 gap-4 items-center justify-between my-4">
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
                                                linkUrl="https://facebook.com"
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
