import React from 'react'
import Startup from '../components/loadingUi/Startup'
import FirstAnimation from '../components/loadingUi/FirstAnimation'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import AboutBanner from './components/AboutBanner'
import AboutValues from './components/AboutValues'
import AboutWe from './components/AboutWe'
import AboutOurServices from './components/AboutOurServices'

const page = () => {
    return (
        <>
            <Startup />
            <FirstAnimation />
            <header className="w-full bgGradient controlLargeScreen ">
                <Header />
            </header>
            <main>
                <AboutBanner />
                <AboutValues />
                <AboutWe />
                <AboutOurServices />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default page
