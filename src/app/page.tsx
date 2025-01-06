import Banner from "./components/banner/HomePageBanner";
import Header from "./components/header/Header";
import FirstAnimation from "./components/loadingUi/FirstAnimation";
import Startup from "./components/loadingUi/Startup";
import AboutSection from "./components/section/AboutSection";
import FooterSection from "./components/section/FooterSection";
import WhatWeDo from "./components/section/WhatWeDo";
import WhyChoseUs from "./components/section/WhyChoseUs";
import WorkSection from "./components/section/WorkSection";


function HomePage() {

  return (
    <>
      <Startup />
      <FirstAnimation />
      <header className="w-full bgGradient controlLargeScreen ">
        <Header />
        <Banner />
      </header>
      <main>
        <WhatWeDo />
        <AboutSection />
        <WhyChoseUs />
        <WorkSection />
      </main>
      <footer>
        <FooterSection />
      </footer>

    </>
  );

}

export default HomePage;