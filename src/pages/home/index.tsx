import "./style.css"
import Menu from "../../components/menu";
import Apresentation from "../screens/apresentation";
import About from "../screens/about";
import Skiils from "../screens/skills";
import Contact from "../screens/contact";
import Arrow from "../../components/arrow";
import Social from "../../components/social";
import { useRef } from "react";

function Home() {

    const about = useRef<HTMLDivElement>(null);

    const scrollTo = (elementref: React.RefObject<HTMLDivElement>) => {
        if (elementref?.current) {
            window.scrollTo({
                top: elementref.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <>

            <Apresentation />
            <Menu menuScroll={() => scrollTo(about)} />
            <div ref={about}>
                <About />
            </div>

            <Skiils />
            <Contact />
            <Arrow />
            <Social />
        </>
    )
}

export default Home;