
"use client"

import { BsFacebook, BsLinkedin, BsTwitterX } from "react-icons/bs"
import SocialLink from "../menubar/SocialLink"

const FooterSection = () => {
    return (
        <div className="w-full  h-fit lg:h-[70vh] text-white grid controlLargeScreen grid-cols-1 lg:grid-cols-3 gap-6 my-12 py-4  lg:py-6 ">

            <div className="w-full flex items-center justify-center p-4">
                <div>
                    <h2 className="text-[5vw] lg:text-[3vw] font-semibold">Aminur Rahman</h2>
                    <cite>Ceo of nexoqod</cite>
                    <p className="my-6 text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed ab impedit accusamus adipisci exercitationem quas a expedita ad temporibus atque omnis.</p>
                    <div className="w-fit grid grid-cols-3 gap-4 items-center justify-between my-6">
                        <div className="w-full flex items-center justify-center rounded-full">

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
                        <div className="w-full flex items-center justify-center  rounded-full">

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
                        <div className="w-full flex items-center justify-center rounded-full">
                            <div className="">
                                <div className="w-fit  h-fit">
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
            <div className="w-full flex items-center justify-center p-4  border-r-0 lg:border-r border-l-0 lg:border-l">
                <div>
                    <h2 className="text-[5vw] lg:text-[3vw] font-semibold">Samsur Rahman</h2>
                    <cite>Senior Partner</cite>
                    <p className="my-6 text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed ab impedit accusamus adipisci exercitationem quas a expedita ad temporibus atque omnis.</p>
                    <div className="w-fit grid grid-cols-3 gap-4 items-center justify-between my-6">
                        <div className="w-full flex items-center justify-center rounded-full">

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
                        <div className="w-full flex items-center justify-center  rounded-full">

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
                        <div className="w-full flex items-center justify-center rounded-full">
                            <div className="">
                                <div className="w-fit  h-fit">
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
            <div className="w-full flex items-center justify-center p-4">
                <div>
                    <h2 className="text-[5vw] lg:text-[3vw] font-semibold">Rayhan Ahmed</h2>
                    <cite>senior partner</cite>
                    <p className="my-6 text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed ab impedit accusamus adipisci exercitationem quas a expedita ad temporibus atque omnis.</p>
                    <div className="w-fit grid grid-cols-3 gap-4 items-center justify-between my-6">
                        <div className="w-full flex items-center justify-center rounded-full">

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
                        <div className="w-full flex items-center justify-center  rounded-full">

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
                        <div className="w-full flex items-center justify-center rounded-full">
                            <div className="">
                                <div className="w-fit  h-fit">
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
    )
}

export default FooterSection
