
import HomeBannerTitle from "./HomeBannerTitle";
import HomePageBannerAnimation from "./HomePageBannerAnimation";


const Banner = () => {
    return (
        <div className="w-full max-h-[90vh] h-full px-0 lg:py-[4vw]  overflow-hidden z-50  relative flex justify-end items-end gap-12 flex-wrap md:flex-nowrap backdrop-blur-md">
            <HomeBannerTitle />
            <HomePageBannerAnimation />
        </div>
    )
}
export default Banner
