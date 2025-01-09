
import { projectArray } from '@/app/data/projectData';
import Link from 'next/link';
import { ProjectType } from '@/app/type/ProjectType';

import SingleProjectImage from './SingleProjectImage';
import VideoPlayer from './VideoPlayer';


const ProjectShowSection = () => {




    return (
        <div className='bg-white flex justify-center items-center flex-col py-8 lg:py-12 px-0 md:px-12 lg:px-24'>

            <div className='w-full controlLargeScreen flex flex-col'>

                {projectArray.map((singleProject: ProjectType) => {
                    const { id, title, description, allImage, videoLink, scrollIdLink } = singleProject
                    return (
                        <section id={scrollIdLink} key={id} className='scrollStart flex h-fit lg:min-h-screen border-b-4 justify-center items-start lg:items-center flex-col lg:flex-col gap-12 my-12' >
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
                        </section>

                    )
                })}

            </div>

            <div id={"test"} className='p-24'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloremque cumque odio cupiditate eum modi tempore exercitationem explicabo laudantium officiis debitis unde labore impedit sed dolore quasi quas dolorem reiciendis magni, neque corporis. Eius in eveniet ex dicta perspiciatis provident veritatis neque totam dolorem earum quo corporis, ducimus temporibus eum facere quibusdam expedita? In inventore omnis quasi at ab? Deserunt, ab dolorum! Officia voluptas sed quos quaerat dolorem iure, dolores libero ipsum quibusdam repudiandae exercitationem odit nulla, nihil est eius enim maxime minima dolorum neque id quo velit! Qui repudiandae earum eum doloremque aliquid quos incidunt nobis eveniet totam veniam a odit cupiditate ullam, voluptatibus amet soluta. Doloribus hic ipsum error dolores veritatis deserunt ipsam pariatur, possimus, nobis ab officia sed itaque suscipit. Ad quos, nulla dolores incidunt explicabo nesciunt aspernatur reprehenderit. Quod, officiis veniam! Corrupti quis adipisci officia cupiditate quisquam eius nisi error tempore perspiciatis modi quos, doloribus vel id voluptate dignissimos cum praesentium a aut doloremque perferendis ullam nostrum! In ad perspiciatis architecto suscipit, minus cumque, exercitationem eum iste quae veniam magnam facilis sit provident repellendus ipsum blanditiis hic maxime sint similique debitis possimus officiis? Nemo culpa quia itaque rem, distinctio maxime voluptatibus explicabo necessitatibus odit, sint ea cum adipisci blanditiis, laudantium voluptates laboriosam. Culpa sapiente, adipisci dolorum quos hic ea mollitia odit modi dolorem molestiae? Deleniti vel doloremque placeat. Nemo minima expedita praesentium facilis ipsa corporis excepturi! Minus labore adipisci sit ipsam fugiat, repellat tempora ipsa quibusdam consequuntur, ratione nisi illum modi. Sed obcaecati reprehenderit animi alias beatae dolore ea non, debitis excepturi, fugit dolores optio reiciendis!
            </div>
        </div >
    )
}

export default ProjectShowSection