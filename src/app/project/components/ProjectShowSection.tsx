
import { projectArray } from '@/app/data/projectData';
import Link from 'next/link';
import { ProjectType } from '@/app/type/ProjectType';

import SingleProjectImage from './SingleProjectImage';
import VideoPlayer from './VideoPlayer';


const ProjectShowSection = () => {




    return (
        <section className='bg-white flex justify-center items-center flex-col py-8 lg:py-12 px-0 md:px-12 lg:px-24'>

            <div className='w-full controlLargeScreen flex flex-col'>

                {projectArray.map((singleProject: ProjectType) => {
                    const { id, title, description, allImage, videoLink } = singleProject
                    return (
                        <div key={id} className='flex h-fit lg:min-h-screen border-b-4 justify-center items-start lg:items-center flex-col lg:flex-col gap-12 my-12' >
                            <div className='flex items-center justify-center flex-col'>
                                <h2 className='text-4xl lg:text-5xl my-2 text-center'>{title}</h2>
                                <div className='w-[60%]'>
                                    <p className='text-lg text-center'>{description}</p>
                                </div>
                            </div>

                            {
                                videoLink && (
                                    <div>
                                        <VideoPlayer videoSrc={videoLink} />
                                    </div>
                                )
                            }

                            <div className=' pb-4 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {allImage?.map((singleImage, index) => {
                                    return <SingleProjectImage key={index} singleImage={singleImage} />
                                })}
                            </div>
                        </div>

                    )
                })}

            </div>

            {/* <div className="my-12 shadow-lg">
                <Link href={"/project"}>
                    <button className="text-[18px]  hover:bg-white hover:text-black transition-all hover:ring-black lg:text-xl font-bold ring-4 ring-[#039084] rounded-lg p-2 ring-offset-4 hover:text-[15px]">See More Projects</button>
                </Link>
            </div> */}
        </section>
    )
}

export default ProjectShowSection