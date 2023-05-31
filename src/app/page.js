import NavBar from "@components/NavBar";
import Hero from "@components/Hero";
import HeroBottom from "@components/HeroBottom";
import Emotions from "@components/Emotions";
import Manifesto from "@components/Manifesto";
import ManifestoBottom from "@components/ManifestoBottom";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <HeroBottom />
            <Emotions />
            <Manifesto />
            <ManifestoBottom />
        </>
    );
}
