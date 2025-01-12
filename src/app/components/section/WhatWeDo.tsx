
const WhatWeDo = () => {
    return (
        <section className="w-full bg-white py-24 flex flex-col items-center min-h-[80vh]">
            <h2 className="text-[5.3vw] md:text-[2.9vw]  lg:text-[2.4vw] font-bold uppercase my-6">What We Do</h2>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center p-6 md:p-6 lg:p-16">

                <div style={{ backgroundImage: "radial-gradient( circle farthest-corner at 0.2% 0.5%,  rgba(68,36,164,1) 3.7%, rgba(84,212,228,1) 92.7% )" }} className="w-full rounded-xl shadow-sm hover:shadow-2xl transition-all text-white border cursor-pointer px-6 py-12 text-center">
                    Custom Software Development

                </div>
                <div style={{ backgroundImage: "radial-gradient( circle farthest-corner at 12.9% 20.3%,  rgba(255,162,104,1) 0%, rgba(254,80,147,1) 41% )" }} className="w-full rounded-xl shadow-sm hover:shadow-2xl transition-all text-white border cursor-pointer px-6 py-12 text-center">
                    Scalable Multi-Tenant Systems

                </div>
                <div style={{ backgroundImage: "linear-gradient( 89.7deg,  rgba(242,150,150,1) 0.3%, rgba(242,150,150,1) 0.3%, rgba(255,226,173,1) 89.8%)" }} className="w-full rounded-xl shadow-sm hover:shadow-2xl transition-all text-white border cursor-pointer px-6 py-12 text-center">
                    Feature-Rich Web and Mobile Apps

                </div>
                <div style={{ backgroundImage: "linear-gradient( 109.6deg,  rgba(9,9,121,1) 11.2%, rgba(144,6,161,1) 53.7%, rgba(0,212,255,1) 100.2% )" }} className="w-full rounded-xl shadow-sm hover:shadow-2xl transition-all text-white border cursor-pointer px-6 py-12 text-center">
                    High-Performance Cloud Solutions
                </div>

                <div style={{ backgroundImage: "linear-gradient(150.4deg, rgba(75, 255, 237, 1) 11.7%, rgba(32, 42, 235, 1) 82.4%)" }} className="w-full rounded-xl shadow-sm hover:shadow-2xl transition-all text-white border cursor-pointer px-6 py-12 bg-[#0008] text-center">
                    Custom Mobile App Development
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
