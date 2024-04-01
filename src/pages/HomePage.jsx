import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
// import Timeline from "../components/Timeline/Timeline";

const HomePage = () => {
    return(
        <>
            <Hero/>
            <About/>
            {/* <Timeline/> */}
            <Contact/>
        </>
    )
}

export default HomePage;