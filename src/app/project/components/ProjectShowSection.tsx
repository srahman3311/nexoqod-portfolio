
import { projectArray } from '@/app/data/projectData';
import Image from 'next/image';
import Link from 'next/link';


const ProjectShowSection = () => {




    return (
        <section className='bg-white py-24 px-0 md:px-12 lg:px-24 flex justify-center flex-col items-center'>

            <div className='w-full grid controlLargeScreen grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>

                {projectArray.map((singleProject) => {
                    const { id, title, description, image } = singleProject
                    return <div key={id} className='text-white shadow-xl'>
                        <Link href={`/project/${title}`} className='relative h-[600px]'>

                            <Image
                                width={5000}
                                height={5000}
                                alt='Project Image'
                                src={'/projectimage1.png'}
                            />
                            <div className='absolute top-0 left-0 w-full h-full z-30'>

                                <div className=' relative min-w-full bgToptoBottom h-full p-4 flex flex-col items-start justify-between'>
                                    <div>

                                        <h2 className='text-2xl text-[#eee9d3] my-4'>{title}</h2>
                                        <p className='text-sm my-2'>{description}</p>
                                        <button className='uppercase text-sm ring-2 ring-white px-2 py-1 my-2'>
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

                        </Link>
                    </div>
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
