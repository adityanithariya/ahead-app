import NavBar from "@components/NavBar";
import Hero from "@components/Hero";
import Emotions from "@components/Emotions";
import Manifesto from "@components/Manifesto";
import Vacancies from "@components/Vacancies";
import Footer from "@components/Footer";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Emotions />
            <Manifesto />
            <Vacancies />
            <Footer />
        </>
    );
}
