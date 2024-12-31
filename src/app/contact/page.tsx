import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import FirstAnimation from "../components/loadingUi/FirstAnimation"
import Startup from "../components/loadingUi/Startup"
import MailingForm from "./components/MailingForm"

const page = () => {
    return (
        <>
            <Startup />
            <FirstAnimation />
            <header className="w-full bgGradient controlLargeScreen ">
                <Header />
            </header>
            <main className="w-full px-4 py-12 md:px-24 md:py-24 mt-16 lg:mt-12 ">
                <div className=" w-full lg:w-3/4">
                    <h2 className="text-neutral-50 text-[7vw] md:text-[6vw] lg:text-[4.5vw] first-letter:text-[#3D42FB] first-letter:font-bold inline-block">Let’s Build Something Great Together </h2>
                    <br />
                    <small className="text-[3vw] md:text-[2vw] lg:text-[1.4vw] text-neutral-400 block w-full lg:w-4/6 mt-4">Reach out to discuss your project, request a quote, or ask a question. We’d love to hear from you.</small>
                </div>
                <MailingForm />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default page
