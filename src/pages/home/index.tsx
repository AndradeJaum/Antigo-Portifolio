import "./style.css"
import Apresentation from "../screens/apresentation";
import About from "../screens/about";
import Skiils from "../screens/skills";
import Contact from "../screens/contact";
import Arrow from "../../components/arrow";
import Social from "../../components/social";
import Work from "../screens/work";
import Header from "../../components/header";
import HeaderModal from "../../components/headerModal";

function Home() {

    return (
        <>
            <div>
                <div>
                {/* <Header /> */}
                    <HeaderModal/>
                    <Apresentation />
                </div>
                <div id="about" >
                    <About />
                </div>
                <div id="skills">
                    <Skiils />
                </div>
                <div >
                    <Work />
                </div>
                <div id="contact">
                    <Contact />
                </div>
                <Arrow />
                <Social />
            </div>

        </>
    )
}

export default Home;