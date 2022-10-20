import "./style.css"
import TypewriterComponent from "typewriter-effect";
import * as Scroll from 'react-scroll';
import ButtonContact from "../../../components/button";
let Link = Scroll.Link
let Element = Scroll.Element;

function Apresentation() {
    return (
        <>
            <div className="home">
                <div className="home-box">
                    <h1 className="tittle-animation-loop">
                        <TypewriterComponent
                            options={{
                                deleteSpeed: 30,
                                delay: 120,
                                autoStart: true,
                                cursor: ""
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hi There, <br /> I'm AndradeJaum")
                                    .start()
                            }}
                        />
                    </h1>
                    <h1 className="tittle-animation-loop">
                        <TypewriterComponent
                            options={{
                                deleteSpeed: 30,
                                delay: 120,
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(3700)
                                    .typeString(" Full Stack Developer")
                                    .pauseFor(3500)
                                    .deleteChars(20)
                                    .pauseFor(1000)
                                    .typeString("WordPress Freelancer")
                                    .pauseFor(3500)
                                    .deleteChars(20)
                                    .pauseFor(1000)
                                    .typeString("Web Designer")
                                    .pauseFor(2000)
                                    .deleteChars(12)
                                    .start()
                            }}
                        />
                    </h1>
                </div>
                <div className="box-slogan">
                    <p className="slogan">Let’s make something special.</p>
                    <Link className="anchors" to="contact" spy={true} smooth={true} duration={500}>
                        <ButtonContact />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Apresentation;