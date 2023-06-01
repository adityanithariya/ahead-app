import NavBar from "@components/NavBar";
import Hero from "@components/Hero";
import Emotions from "@components/Emotions";
import Manifesto from "@components/Manifesto";
import Vacancies from "@components/Vacancies";
import Footer from "@components/Footer";
import WorkWithUs from "@components/WorkWithUs";
import RateMe from "@components/RateMe";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Emotions />
            <Manifesto />
            <RateMe />
            <WorkWithUs />
            <Vacancies />
            <Footer />
        </>
    );
}
