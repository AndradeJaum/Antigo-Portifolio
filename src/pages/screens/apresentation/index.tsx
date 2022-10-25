import { i18next } from "../../../components/translate/i18n"
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
                                    .typeString(i18next.t("typing.hi"))
                                    .typeString(", <br />")
                                    .typeString(i18next.t("typing.name"))
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
                                    .typeString(i18next.t("typing.office1"))
                                    .pauseFor(3500)
                                    .deleteChars(20)
                                    .pauseFor(1000)
                                    .typeString(i18next.t("typing.office2"))
                                    .pauseFor(3500)
                                    .deleteChars(20)
                                    .pauseFor(1000)
                                    .typeString(i18next.t("typing.office3"))
                                    .pauseFor(2000)
                                    .deleteChars(12)
                                    .start()
                            }}
                        />
                    </h1>
                </div>
                <div className="box-slogan">
                    <p className="slogan">{i18next.t("messages.slogan")}</p>
                    <Link className="anchors" to="contact" spy={true} smooth={true} duration={500}>
                        <ButtonContact />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Apresentation;