
import { projectArray } from '@/app/data/projectData';
import Link from 'next/link';
import SingleProject from './SingleProject';
import { ProjectType } from '@/app/type/ProjectType';


const ProjectShowSection = () => {




    return (
        <section className='bg-white relative py-24 px-0 md:px-12 lg:px-24 flex justify-center flex-col items-center'>

            <div className='w-full grid controlLargeScreen grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>

                {projectArray.map((singleProject: ProjectType) => {
                    const { id, title, description, image, allImage } = singleProject
                    return <SingleProject id={id} image={image} title={title} description={description} allImage={allImage} />
                })}

            </div>

            <div className="my-12 shadow-lg">
                <Link href={"/project"}>
                    <button className="text-[18px]  hover:bg-white hover:text-black transition-all hover:ring-black lg:text-xl font-bold ring-4 ring-[#039084] rounded-lg p-2 ring-offset-4 hover:text-[15px]">See More Projects</button>
                </Link>
            </div>
        </section>
    )
}

export default ProjectShowSection
