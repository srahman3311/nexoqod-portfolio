"use client"

import { ProjectType } from "@/app/type/ProjectType"
import Image from "next/image"
import { useState } from "react"

const SingleProject: React.FC<ProjectType> = ({ description, id, image, title, allImage }) => {

    const [selectedProjectShow, setSelectedProjectShow] = useState<string[] | undefined>([" "]);
    const [zoomImage, setZooomImage] = useState<string>("");

    const [modal, setModal] = useState<boolean>(false);
    const [zoomMode, setZoomMode] = useState<boolean>(false);

    const handleClick = (Selectedtitle: string): void => {
        if (Selectedtitle === title) {
            setModal(!modal);
            setSelectedProjectShow(allImage);
        }
    }

    const handleZoomMode = (zoomImage: string): void => {
        setZoomMode(!zoomMode)
        setZooomImage(zoomImage)
    }

    const handleCloseZoom = (): void => {
        setZoomMode(false)
        setZooomImage("")
    }

    return (
        <div key={id} onClick={() => handleClick(title)} className='text-white shadow-xl'>


            {/* ===================== For all image together modal START ======================  */}

            {modal ? <div style={{ zIndex: 1000 }} className="fixed top-0 left-0 min-h-[170vh] flex flex-col justify-start items-center p-6 md:p-12 lg:p-16  bg-[#000] w-full z-50">

                <h2 className="text-2xl md:3xl lg:text-4xl pb-4 mb-4">{title}</h2>
                <div className="relative w-full h-[80vh] p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 overflow-y-auto">

                    <div style={{ zIndex: 1000 }} className="fixed top-4 right-4 w-fit">
                        <button className="p-4 border rounded-full bg-black text-white" onClick={() => setSelectedProjectShow([""])}>Close</button>
                    </div>
                    {selectedProjectShow && selectedProjectShow?.map((singleImage) => {
                        return <div onClick={() => handleZoomMode(singleImage)} className={`cursor-pointer`} key={singleImage}>
                            <Image
                                className="w-full min-h-[15vw] "
                                width={5000}
                                height={5000}
                                alt='Project Image'
                                src={singleImage}
                            />
                        </div>
                    })}
                </div>
            </div>
                : ""}
            {/* ===================== For all image together modal END ======================  */}


            {/* =================== For extra Zoom per Image START =================== */}

            {zoomMode && <div style={{ zIndex: 1000 }} className="fixed flex items-center justify-center top-0 left-0 w-full p-8 bg-black h-screen">
                <div style={{ zIndex: 1000 }} className="fixed top-10 right-10 w-fit">
                    <button className="p-4 border rounded-full bg-black text-white" onClick={handleCloseZoom}>Close</button>
                </div>
                <Image
                    className="h-full object-scale-down"
                    width={5000}
                    height={5000}
                    alt='Project Image'
                    src={zoomImage}
                />
            </div>}
            {/* =================== For extra Zoom per Image END =================== */}


            {/* =================== All Single Image shown here =================== */}
            <div className='relative cursor-pointer h-[320px] md:h-[420px] xl:h-[26vw]' >
                <Image
                    className="w-full h-full object-cover"
                    width={5000}
                    height={5000}
                    alt='Project Image'
                    src={image}
                />
                <div className='absolute top-0 left-0 w-full h-full z-30'>
                    <div className=' relative min-w-full bgToptoBottom h-full p-4 flex flex-col items-start justify-between'>
                        <div>
                            <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-[2rem] leading-normal xl:leading-[2.4rem] text-[#eee9d3] my-4'>{title}</h2>
                            <p className='text-sm md:text-md lg:text-md xl:text-lg my-2 mt-10'>{description}</p>
                            <button className='uppercase text-sm bg-[#0005] backdrop-blur-sm ring-2 ring-white px-2 py-1 my-2'>
                                Case study
                            </button>
                        </div>
                        <div className='w-full'>
                            <div className='bg-white shadow-lg float-right rounded-full text-black text-center leading-[2.5rem] w-10 h-10'>
                                ➡
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject
