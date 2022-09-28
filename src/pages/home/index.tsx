import "./style.css"
import Menu from "../../components/menu";
import Apresentation from "../screens/apresentation";
import About from "../screens/about";
import Skiils from "../screens/skills";
import Contact from "../screens/contact";
import Arrow from "../../components/arrow";
import Social from "../../components/social";

function Home() {


    return (
        <>
            <Apresentation />
            <Menu />
            <div id="about" >
                <About />
            </div>
            <div id="skills">
                <Skiils />
            </div>
            <div >

            </div>
            <div id="contact">
                <Contact />
            </div>
            <Arrow />
            <Social />
        </>
    )
}

export default Home;