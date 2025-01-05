"use client"

import Image from "next/image"
import Footer from "../components/footer/Footer"
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

                <div className=" text-white  w-full h-fit lg:h-[120vh] flex gap-12 flex-col flex-grow mt-24">
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="felx flex-col items-center justify-center w-full">
                            <div className="h-[70%]">


                                <h3 className="text-center text-4xl py-4">Aminur Rahman</h3>
                                <cite className="text-md text-center block">ceo of nexoqod</cite>
                                <small className="block text-lg text-center mt-6 font-serif"><q>If you don't like the road you're walking, start paving another.</q></small>
                            </div>

                            <div className="h-[30%] grid grid-cols-3 items-start justify-between ">
                                <div className="min-h-full  w-full flex items-center justify-center bg-[#1877F2]">

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
                                <div className="min-h-full w-full flex items-center justify-center text-black bg-[#ffffff]">

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
                                            { }
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#1A6FC5] min-h-full w-full flex items-center justify-center">
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
                        <div className="w-full flex  items-center justify-center  lg:items-end lg:justify-end">
                            <div className="">

                                <Image
                                    className="max-h-[50vh] !w-[120%] lg:w-fit object-cover"
                                    width={5000}
                                    height={5000}
                                    alt="Ceo Image"
                                    src={"/team-3.jpg"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid text-white grid-cols-1 relative lg:grid-cols-2 gap-4 object-scale-down h-full w-full">
                        <div className="flex items-center justify-start gap-4">
                            <Image
                                className="h-[50vh] object-cover w-[50%]"
                                width={5000}
                                height={5000}
                                alt="Ceo Image"
                                src={"/team-2.jpg"}
                            />
                            <div>


                                <h2>Shamsur rahman Rafej</h2>
                                <cite>Senior Partner</cite>

                                <div className="h-[50%] grid grid-cols-3  gap-0 lg:gap-4 items-center justify-between mt-12 ">
                                    <div className="min-h-full w-full flex items-center justify-center bg-[#1877F2] rounded-full p-2">

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
                                    <div className="min-h-full w-full flex items-center justify-center text-black bg-[#ffffff] rounded-full p-2">

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
                                                { }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#1A6FC5] min-h-full w-full flex items-center justify-center rounded-full p-2">
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
                        <div className="flex items-center justify-start gap-4">
                            <Image
                                className="h-[50vh] object-cover w-[50%]"
                                width={5000}
                                height={5000}
                                alt="Ceo Image"
                                src={"/team-1.jpg"}
                            />
                            <div>


                                <h2>Shamsur rahman Rafej</h2>
                                <cite>Senior Partner</cite>

                                <div className="h-[50%] grid grid-cols-3 gap-0 lg:gap-4 items-center justify-between mt-12 ">
                                    <div className="min-h-full w-full flex items-center justify-center bg-[#1877F2] rounded-full p-2">

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
                                    <div className="min-h-full w-full flex items-center justify-center text-black bg-[#ffffff] rounded-full p-2">

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
                                                { }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#1A6FC5] min-h-full w-full flex items-center justify-center rounded-full p-2">
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
                    </div>
                </div>
            </main >
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default page
